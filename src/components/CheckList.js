import React from "react";

export default function CheckList(props){
    console.log("CheckList",props.array)
    const listItems =props.array.map((item)=>{
        if(props.selected && item === props.selected){
            return (<option selected value={item} >{item}</option>)
        }
        else{
            return (<option value={item}  >{item}</option>)
        }

    })
    return listItems

}