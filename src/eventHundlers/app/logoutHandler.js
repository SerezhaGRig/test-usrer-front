import axios from "axios";
import {URL} from "../../config";
import updateState from '../helpers/updateState'

export default function logoutControl({data,setData}) {
    console.log("response2")
    axios({
        method: "post",
        url: URL+'logout',
        withCredentials: true
    }).then(function (response) {
        updateState({oldval:data,from:{isLogged:false,data:'Loading'},setState:setData})
        window.location.reload();
    })
}