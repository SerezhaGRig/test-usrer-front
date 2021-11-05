import {URL} from '../../config'
import axios from "axios";
import updateState from '../helpers/updateState'

export function editHandler({formVal,setVal}){

    let {brands,models,...newForm}=formVal
    axios({
        method: "post",
        url: URL+'updateCar',
        data:newForm,
        withCredentials: true,
        headers: {

            "Content-Type": "application/json",},

    })
        .then(function (response){


            }
        )
        .catch(function (error) {
            updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})
        });

}
export function updateEditForm({formVal,setVal,carId}){
    axios({
        method: `getCar/{carId}`,
        url: URL+'models',
        withCredentials: true,
        headers: {

            "Content-Type": "application/json",},

    })
        .then(function (response){
                var car = JSON.parse(response.data);
                updateState({oldval:formVal,from:{...formVal.model},setState:setVal})

            }
        )
        .catch(function (error) {
            updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})
        });

}