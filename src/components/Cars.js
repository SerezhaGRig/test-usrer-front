import React, {useState, useEffect} from "react";
import axios from "axios";
import {URL} from "../config";
import {Redirect, useHistory} from "react-router";
import loadCars from '../eventHundlers/cars/carsHandler'

export default function Cars(props) {

    let [cars,setCars]=useState([])
    useEffect(() => {
            loadCars({cars,setCars})
        },[]);
    if (!props.args.isLogged){
        return <Redirect to={'\login'}/>
    }
    if(cars.length === 0)
        return (<h2 className='mt-lg-5'>About</h2>)
    return (
        <CarList data={cars}/>
    )
}

function CarList(props){
    const listItems = props.data.map((car) =>
        <tr><th>{car.model_name}</th><th>{car.reg_num}</th></tr>
    );
    return (
        <table className="table">{listItems}</table>
    );
}