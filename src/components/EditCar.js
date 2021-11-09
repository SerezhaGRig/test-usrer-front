import  React,{useState,useEffect} from "react";
import axios from "axios";
import {URL} from "../config";
import {Redirect, useHistory,useParams} from "react-router";
import {yearList} from '../eventHundlers/helpers/utils'
import CheckList from '../components/CheckList'
import {changeHandler} from '../eventHundlers/helpers/formHandlers'
import {addHandler,updateBrands,brandSelectHandler,updateModelsByBrand,selectHandler} from '../eventHundlers/add_car/addHandlers'
import {updateEditForm,editHandler} from '../eventHundlers/edit_car/editHandlers'
import updateState from '../eventHundlers/helpers/updateState'

export default function EditCar(props) {
    let {carId} = useParams();
    let history =  useHistory()
    let years = yearList()
    const [formVal, setVal] = useState({
        carId,
        brands: [],
        models: [],
        brand: '',
        model: '',
        year: '',
        years,
        regnum: '',
        unfortunate: ''
    })
    useEffect(async () => {
        console.log("edit car use eff "+carId)
        updateBrands({formVal, setVal}).then(
            (resp)=>{
            updateEditForm({formVal, setVal,carId}).then(
                (res)=>{
                    updateModelsByBrand({formVal, setVal})
                }
            )
        })

    }, [])
    return (<div className='container '>
        <div className='row-cols-4'>
            <form onSubmit={(event) => {
                editHandler({event,history, formVal, setVal,carId})
            }}>
                <div className="mb-3 mt-lg-5">
                    <select name={"brand"} className="form-select" id="inputGroupSelect01" onChange={(event) => {
                        selectHandler({event, formVal, setVal})
                        updateModelsByBrand({formVal, setVal}).then(()=>{
                            updateState({oldval:formVal,from:{model:formVal.models[0]},setState:setVal})
                        })

                    }}>
                        <CheckList array={formVal.brands} selected={formVal.brand}/>
                    </select>
                </div>

                {formVal.brand.length ? <div className="mb-3">
                    <select name={"model"} className="form-select" id="inputGroupSelect02" onChange={(event) => {
                        selectHandler({event, formVal, setVal})
                    }}>
                        <CheckList array={formVal.models} selected={formVal.model}/>
                    </select>
                </div> : null
                }


                <div className="mb-3">
                    <select name={"year"} className="form-select" id="inputGroupSelect03" onChange={(event) => {
                        selectHandler({event, formVal, setVal})
                    }}>
                        <CheckList array={formVal.years} selected={formVal.year}/>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputRegNum" className="form-label">Registration Number</label>
                    <input type="regnum" value={formVal.regnum} onChange={e => {
                        changeHandler({e, formVal, setVal})
                    }} name="regnum" className="form-control" id="InputRegNum" aria-describedby="regnumHelp"/>
                    <div id="regnumHelp" className="form-text my-3">
                        <div className='h4 text-danger'>{formVal.unfortunate}</div>
                    </div>
                </div>
                <button type="Edit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    </div>)
}