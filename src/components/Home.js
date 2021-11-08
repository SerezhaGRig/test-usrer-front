import React, {useState} from "react";
import axios from "axios";
import {URL} from "../config";
import {Redirect, useHistory, useEffect} from "react-router";

export default function Home(props) {
    if (!props.args.isLogged){
        return <Redirect to={'\login'}/>
    }
    return (<h2 className='mt-lg-5'>Car information website</h2>)
}
