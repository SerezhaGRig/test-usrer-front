import axios from "axios";
import {URL} from "../config";

export default function registerControl({data,setData}) {
    console.log("response2")
    axios({
        method: "get",
        url: URL,
        withCredentials: true
    }).then(function (response) {
        console.log(response)
        data.isLogged=true
        data.data = 'About'
        let newData = Object.assign({},data)
        setData(newData)
    }).catch(function (error) {
        console.log(error.response);
        data.isLogged=false
        data.data = 'Error'
        let newData = Object.assign({},data)
        setData(newData)
    });
}