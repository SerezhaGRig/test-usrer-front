import axios from "axios";
import {URL} from "../config";

export default function logoutControl({data,setData}) {
    console.log("response2")
    axios({
        method: "post",
        url: URL+'logout',
        withCredentials: true
    }).then(function (response) {
        console.log(data.history)
        data.isLogged=false
        data.data = 'Loading'
        let newData = Object.assign({},data)
        setData(newData)
    })
}