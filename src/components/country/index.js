import React,{Component} from 'react'
import { Table, Divider, Tag,Modal,Input,Form, } from 'antd';
import Button from "antd/es/button";
import axios from "axios";
import {GET_ERRORS, IP} from "../../actions/types";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addCountry, getCountry} from "../../actions/countryActions";

class Country extends  Component{
    constructor(){
        super();
        this.state={
            visible:false,
            name:''
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    openModal=()=>{
        this.setState({
            visible:true
        })
    }
    handleCancel=()=>{
        this.setState({
            visible:false
        })
    }
    handleOk=()=>{
       if(this.state.name.length>0){
           this.props.addCountry(this.state.name,this.handleCancel)
       }

    }
    componentDidMount() {
        this.props.getCountry();
    }

    render(){
        const {visible,name}=this.state
        const {country}=this.props;

        let data =[]
        if(country && country.countries && country.countries.length>0){
            data = country.countries.map((item,i)=>{
                return{
                    ...item,
                    key:i
                }
            })
        }
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <p>{text}</p>,
            },

            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
        <a>Edit</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
                ),
            },
        ];


        return(
            <div>
                <Button onClick={this.openModal} style={{margin:"10px"}}>Add country</Button>
                <Table columns={columns} dataSource={data} />
                <Modal
                    title="Add"
                    visible={visible}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button style={{background:"#000",color:"#fff"}} key="ok" onClick={this.handleOk}>Сохранить
                        </Button>,
                        <Button key="no" onClick={this.handleCancel}>Отменить
                        </Button>,
                    ]}
                >
                    <Form>
                        <Form.Item label="Название">
                            <Input name="name" value={name} onChange={this.onChange}/>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    country:state.country
})
export default connect(mapStateToProps,{addCountry,getCountry}) (withRouter(Country))