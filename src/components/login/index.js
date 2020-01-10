import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React,{Component} from 'react'
import Header from "../headers";
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/authActions'

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if(values.remember){
                    localStorage.setItem("email",values.email);
                }
                else{
                    localStorage.removeItem("email");
                }
                // console.log('Received values of form: ', values);
                this.props.loginUser(values,this.props.history)
            }
        });
    };
    
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{width:"80%",margin:'0 auto'}}>
                <Header/>

                <Form style={{paddingTop:"100px",width:"80%",margin:"0 auto"}} onSubmit={this.handleSubmit} className="login-form">
                    <p>Get Into Your Account</p>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                                {
                                    required: true,
                                    message: 'Please input your email!'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <Link to={'/reset'}>
                            Forgot password
                        </Link>
                        <Button type="primary" style={{display:"block",margin:"0 auto"}} htmlType="submit" className="login-form-button">
                            Login
                        </Button>
                        Or <Link to={'/registration'}>register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect(null,{loginUser}) (withRouter(WrappedNormalLoginForm));