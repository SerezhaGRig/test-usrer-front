import axios from "axios";
import {URL} from "../../config";
import updateState from '../helpers/updateState'

export  function loadCars({cars,setCars}) {
    console.log("response2")
    axios({
        method: "get",
        url: URL+"cars",
        withCredentials: true
    }).then(function (response) {
        var newCars = response.data;
        setCars(newCars)
    }).catch(function (error) {
        
    });
}

export function handleCarEdit({event,carId,history}){
    history.push(`edit/`+carId)
}