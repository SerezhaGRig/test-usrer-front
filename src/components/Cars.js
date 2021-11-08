import React, {useState, useEffect} from "react";
import axios from "axios";
import {URL} from "../config";
import {Redirect, useHistory} from "react-router";
import {
    Link
} from "react-router-dom";
import {loadCars,handleCarEdit} from '../eventHundlers/cars/carsHandler'

export default function Cars(props) {
    
    let [cars,setCars]=useState([])
    useEffect(() => {
            loadCars({cars,setCars})
        
        },[]);
    if(cars.length === 0)
        return (<h2 className='mt-lg-5'>About cars</h2>)
    return (
        <CarList data={cars}/>
    )
}

function CarList(props){
    let history = useHistory()
    const listItems = props.data.map((car) =>
        <tr key={car.car_id}>
            <th>{car.brand_name}</th>
            <th>{car.model_name}</th>
            <th>{car.pr_year}</th>
            <th>{car.reg_num}</th>
            <th>
                <Link to={'edit/'+car.car_id}>Edit</Link></th>
        </tr>
    );
    return (
        <table className="table"><thead>
        <tr>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Reg. number</th>
            <th scope="col">Handle</th>
        </tr>
        </thead><tbody>{listItems}</tbody></table>
    );
}

