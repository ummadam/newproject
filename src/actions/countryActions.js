import axios from 'axios'
import {GET_COUNTRIES, GET_ERRORS, IP} from "./types";
export const addCountry=(data,func)=>dispatch=>{
    axios.post(IP+'api/admin/countries',{name:data}).then(
        res=>{
            console.log(res.data)
            func()

        }
    ).catch(
        err=>{
           return dispatch({
               type:GET_ERRORS,
               payload:err.response.data
           })
        }
    )
}
export const getCountry=(data,func)=>dispatch=>{
    axios.get(IP+'api/admin/countries').then(
        res=>{
           return dispatch({
               type:GET_COUNTRIES,
               payload:res.data
           })

        }
    ).catch(
        err=>{
            return dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        }
    )
}