import {URL} from '../config'
import axios from "axios";
export function submitHandler({event,formVal,history,path}){
    // let bodyFormData = new FormData();
    // for(let key in formVal){
    //     bodyFormData.append(key.toString(),formVal[key])
    // }
    console.log(formVal)
    axios({
        method: "post",
        url: URL+path,
        data: formVal,
        withCredentials: true,
        headers: {

            "Content-Type": "application/json",},

    })
        .then(function (response) {
            console.log(response);
            console.log(response.headers["set-cookie"])
            //handle success


        })
        .catch(function (error) {
            //handle error
            console.log(error.response.data);
        });
    event.preventDefault();

}
export function changeHandler({e,formVal,setVal}){
    formVal[e.target.name] = e.target.value
    setVal(Object.assign({},formVal))
}