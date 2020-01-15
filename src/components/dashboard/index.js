import { Layout, Menu, Icon } from 'antd';
import React,{Component} from 'react'
import Country from "../country";
import {Route,Link} from 'react-router-dom'
const { Header, Sider, Content } = Layout;
class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: false,
        };
    }


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout >
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to={'/dashboard/country'}>
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ height:"50px", background: '#fff', padding: 0 }}>

                    </Header>
                    <Content
                        style={{
                            margin: 0,
                            padding: 24,
                            height:"100%",
                    background:"#fff"

                        }}
                    >
                        <Route exact path={'/dashboard/country'} component={Country}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Dashboard