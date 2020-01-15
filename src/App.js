import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Main from './components/main'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import WrappedNormalLoginForm from './components/login'
import WrappedNormalRegistrationForm from './components/registration'
import {Provider} from 'react-redux'
import store from './store'
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode'
import {setCurrentUser,logoutUser} from './actions/authActions'
import Dashboard from "./components/dashboard";


if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
  const currentTime=Date.now()/1000
  if(decoded.exp<currentTime){
    store.dispatch(logoutUser());
    window.location.href='/'
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">  
          <Router>
            <Switch>
              <Route exact path={'/'} component={()=><Main/>}/>
              <Route exact path={'/login'} component={WrappedNormalLoginForm}/>
              <Route exact path={'/registration'} component={WrappedNormalRegistrationForm}/>
              <Route  path={'/dashboard'} component={Dashboard}/>
            </Switch>    
          </Router>
          
        </div>
      </Provider>
    );
  }
}

export default App;
