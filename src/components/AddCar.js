import React, {useState,useEffect} from "react";
import axios from "axios";
import {URL} from "../config";
import {Redirect, useHistory} from "react-router";
import CheckList from '../components/CheckList'
import {yearList} from '../eventHundlers/helpers/utils'
import {changeHandler} from '../eventHundlers/helpers/formHandlers'
import {addHandler,updateBrands,brandSelectHandler,updateModelsByBrand,selectHandler} from '../eventHundlers/add_car/addHandlers'

export default function AddCar(props) {
    if (!props.args.isLogged){
        return <Redirect to={'\login'}/>
    }
    const [formVal,setVal] = useState({brands:[],models:[],brand:'',model:'',year:'',regnum:'',unfortunate:''})
    const  history = useHistory()
    useEffect(()=>{
        updateBrands({formVal,setVal})
    },[])

    let years = yearList()
    return (<div className='container '>
        <div className='row-cols-4'>
            <form onSubmit={(event)=>{addHandler({event,formVal,history,setVal})}} >
                <div className="mb-3 mt-lg-5">
                    <select name={"brand"} className="form-select" id="inputGroupSelect01" onChange={(event) => {
                        console.log('selected')
                        brandSelectHandler({event,formVal,setVal})
                        updateModelsByBrand({formVal,setVal})
                    }}>
                        <option hidden disabled selected value> Brand </option>
                        <CheckList array = {formVal.brands}/>
                    </select>
                </div>
                { formVal.models.length ? <div className="mb-3">
                    <select name={"model"} className="form-select" id="inputGroupSelect02" onChange={(event) => {

                        selectHandler({event,formVal,setVal})
                    }}>
                        <option disabled selected value> Model </option>
                        <CheckList array = {formVal.models}/>
                    </select>
                </div> : null
                }
                <div className="mb-3">
                    <select  name={"year"} className="form-select" id="inputGroupSelect03" onChange={(event) => {
                        selectHandler({event,formVal,setVal})
                    }}>
                        <option disabled selected value> Year </option>
                        <CheckList array = {years} />
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputRegNum" className="form-label">Registration Number</label>
                    <input type="regnum" value={formVal.regnum} onChange={e => {changeHandler({e,formVal,setVal})}} name="regnum"  className="form-control" id="InputRegNum" aria-describedby="regnumHelp"/>
                    <div id="regnumHelp" className="form-text my-3"><div className='h4 text-danger'>{formVal.unfortunate}</div></div>
                </div>
                <button type="Add" className="btn btn-primary">Add</button>
            </form>
        </div>
    </div>)
}