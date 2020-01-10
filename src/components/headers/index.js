import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link,withRouter} from "react-router-dom";


class Header extends Component{

    constructor(){
        super();
        this.state={
            auth:false
        }

    }

    render(){
        return(
            <div className = "header">
                <Menu mode = "horizontal">
                    <Menu.Item key = "1">
                    <Link to={'/'}>Home</Link>                        
                    </Menu.Item>
                   <Menu.Item key="2">
                            <Link to={'/registration'}>Registration</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                            <Link to={'/login'}>Login</Link>
                    </Menu.Item> 
                   
                </Menu>
            </div>

        )
    }

}

export default withRouter(Header)
