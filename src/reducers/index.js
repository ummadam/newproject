import {combineReducers} from 'redux'
import authReducer from "./authReducer";
import countryReducer from "./countryReducer"


export default combineReducers({
   auth:authReducer,
    country:countryReducer
})