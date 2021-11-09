import {changeHandler,submitHandler} from '../helpers/formHandlers'
import {URL} from '../../config'
import axios from "axios";
import updateState from '../helpers/updateState'

export function addChangeHandler({...val}) {
    changeHandler({...val})
}

export function brandSelectHandler({event,formVal,setVal}){
    console.log("val",event.target.name)
    let val = event.target.options[event.target.options.selectedIndex].value
    let name = event.target.name
    formVal[name] = val
    setVal(Object.assign({},formVal))

}
export function selectHandler({event,formVal,setVal}){
    let val = event.target.options[event.target.options.selectedIndex].value
    let name = event.target.name
    formVal[name] = val
    setVal(Object.assign({},formVal))

}

export async function updateBrands({formVal,setVal}){
    
    try {
        let response = await axios({
            method: "get",
            url: URL+'brands',
            withCredentials: true,
            headers: {

                "Content-Type": "application/json",},

        })
            
        console.log("in brands")
        let brands = response.data;
        updateState({oldval:formVal,from:{brands},setState:setVal})

    }
    catch (e) {
        updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})
    }
    

}

export async function updateModelsByBrand({formVal,setVal}){
    console.log("in updateModelsByBrand()")
    let path = 'models/'+formVal.brand.toString()
    console.log(path)
    try {
        let response  = await axios({
            method: "get",
            url: URL+path,
            withCredentials: true,
            headers: {

                "Content-Type": "application/json",},

        })
        var models = response.data;
        updateState({oldval:formVal,from:{models},setState:setVal})
    }
    catch (e) {
        updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})
    }
    
    
       
}

export function addHandler({event,formVal,history,setVal}){

    let {brands,models,...newForm}=formVal
    axios({
        method: "post",
        url: URL+'addCar',
        data:newForm,
        withCredentials: true,
        headers: {

            "Content-Type": "application/json",},

    })
        .then(function (response){
            updateState({oldval:formVal,from:{unfortunate:'Added'},setState:setVal})
            history.push("/cars")
            }
        )
        .catch(function (error) {
            updateState({oldval:formVal,from:{unfortunate:'Unfortunate'},setState:setVal})
        });
    event.preventDefault()

}