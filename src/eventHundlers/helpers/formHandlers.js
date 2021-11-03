import {URL} from '../../config'
import axios from "axios";
import updateState from '../helpers/updateState'
export function submitHandler({event,formVal,path,history,setVal}){
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
            if(response.data === 'Congratulation')
            {
                if(history)
                    history.push('\login')
            }
            else {
                window.location.reload();
            }

        })
        .catch(function (error) {
            updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})
        });
    event.preventDefault();

}
export function changeHandler({e,formVal,setVal}){
    formVal[e.target.name] = e.target.value
    setVal(Object.assign({},formVal))
}