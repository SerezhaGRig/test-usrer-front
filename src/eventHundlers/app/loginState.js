import axios from "axios";
import {URL} from "../../config";
import updateState from '../helpers/updateState'

export default function loginState({data,setData}) {
    console.log("response2")
    axios({
        method: "get",
        url: URL,
        withCredentials: true
    }).then(function (response) {
        updateState({oldval:data,from:{isLogged:true,data:'About'},setState:setData})
    }).catch(function (error) {
        updateState({oldval:data,from:{isLogged:false,data:'Error'},setState:setData})
    });
}