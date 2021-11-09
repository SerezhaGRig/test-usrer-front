import axios from "axios";
import {URL} from "../../config";
import updateState from '../helpers/updateState'

export  function loadCars({cars,setCars,pageId}) {
    console.log("response2")
    axios({
        method: "get",
        url: URL+"carp/"+pageId,
        withCredentials: true
    }).then(function (response) {
        console.log(response.data)
        var newCars = response.data.rows;
        let count = parseInt(response.data.count[0].count)
        setCars({data:newCars,count})
    }).catch(function (error) {
        
    });
}

export function handleCarEdit({event,carId,history}){
    history.push(`edit/`+carId)
}