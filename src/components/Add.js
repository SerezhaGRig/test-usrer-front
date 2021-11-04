import React, {useState} from "react";
import axios from "axios";
import {URL} from "../config";
import {Redirect, useHistory} from "react-router";
import {addChangeHandler,addHandler} from '../eventHundlers/add/addHandlers'

export default function Add(props) {
    if (!props.args.isLogged){
        return <Redirect to={'\login'}/>
    }
    const [formVal,setVal] = useState({brand:'',model:'',year:'',regnum:'',unfortunate:''})
    const  history = useHistory()
    return (<div className='container '>
        <div className='row-cols-4'>
            <form onSubmit={(event)=>{addHandler({event,formVal,history,setVal})}} >
                <div className="mb-3 mt-lg-5">
                    <select className="form-select" id="inputGroupSelect01">
                        <option selected>Brand...</option>
                        <option value="1">BMW</option>
                        <option value="2">MERCEDES</option>
                        <option value="3">AUDI</option>
                    </select>
                </div>
                <div className="mb-3">
                    <select className="form-select" id="inputGroupSelect02">
                        <option selected>Model...</option>
                        <option value="1">C 300</option>
                        <option value="2">X5</option>
                        <option value="3">A8</option>
                    </select>
                </div>
                <div className="mb-3">
                    <select className="form-select" id="inputGroupSelect03">
                        <option selected>Year...</option>
                        <option value="1">2010</option>
                        <option value="2">2009</option>
                        <option value="3">2008</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputRegNum" className="form-label">Registration Number</label>
                    <input type="regnum" value={formVal.password} onChange={e => {addChangeHandler({e,formVal,setVal})}} name="regnum"  className="form-control" id="InputRegNum" aria-describedby="regnumHelp"/>
                    <div id="regnumHelp" className="form-text my-3"><div className='h4 text-danger'>{formVal.unfortunate}</div></div>
                </div>
                <button type="Add" className="btn btn-primary">Add</button>
            </form>
        </div>
    </div>)
}