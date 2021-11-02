import React, {useState} from "react";
import axios from "axios";
import {URL} from "../config";

export default function Home() {
    let [data,setData]=useState("Loading")
    console.log("response2")
    axios({
        method: "get",
        url: URL,
        withCredentials: true
    }).then(function (response) {
        console.log("response")
        console.log(response)
        setData('About')
    })
    .catch(function (error) {
        console.log(error.response.data);
        setData('error')
    });
    return (<h2>{data}</h2>)
}
