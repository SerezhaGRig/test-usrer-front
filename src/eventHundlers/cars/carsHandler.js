import axios from "axios";
import {URL} from "../../config";
import updateState from '../helpers/updateState'

export default function loadCars({cars,setCars}) {
    console.log("response2")
    axios({
        method: "get",
        url: URL,
        withCredentials: true
    }).then(function (response) {
        var newCars = JSON.parse(response.data);
        setCars(newCars)
    }).catch(function (error) {
        
    });
}