import {URL} from '../../config'
import axios from "axios";
import updateState from '../helpers/updateState'

export function editHandler({event,history,formVal,setVal}){
    console.log("edit handler")
    let {brands,models,...newForm}=formVal
    axios({
        method: "post",
        url: URL+'upcar/'+formVal.carId,
        data:newForm,
        withCredentials: true,
        headers: {

            "Content-Type": "application/json",},

    })
        .then(function (response){
            updateState({oldval:formVal,from:{unfortunate:'Updated'},setState:setVal})
            history.push("/cars")
            }
        )
        .catch(function (error) {
            updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})
        });
    event.preventDefault()

}
export async function updateEditForm({formVal,setVal,carId}){
    console.log("in updeditform")
    try {
         let response = await axios({
            method: 'get',
            url: URL+'car/'+carId,
            withCredentials: true,
            headers: {

                "Content-Type": "application/json",},

        })
        let car = response.data[0]
        updateState({oldval:formVal,from:{regnum:car.reg_num,brand:car.brand_name,year:car.pr_year,model:car.model_name},setState:setVal})

    }
    catch (e) {
        updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})

    }

}