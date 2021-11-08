import React from "react";

export default function CheckList(props){
    console.log("CheckList",props.array)
    const listItems =props.array.map((item)=>{
        if(props.selected && item.toString() === props.selected.toString()){
            console.log("set selected"+item.toString())
            return (<option selected value={item.toString()} >{item.toString()}</option>)
        }
        else{
            return (<option value={item.toString()}  >{item.toString()}</option>)
        }

    })
    return listItems

}