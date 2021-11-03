import React, {useEffect, useState} from "react";
import {submitHandler} from "../eventHundlers/formHandlers";
import {Redirect, useHistory} from "react-router";
import {changeHandler} from "../eventHundlers/formHandlers";


export default function Login(props) {

    let [formVal,setVal]=useState({login:'',password:'',user:'',unfortunate:''})
    if (props.args.isLogged ){
        return <Redirect to={'/'} />
    }
    return (
        <div className='container '>
            <div className='row-cols-4'>
                <form onSubmit={(event)=>{submitHandler({event,formVal,path:'login',setVal})}}>
                    <div className="mb-3 mt-lg-5">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='login' value={formVal.login} onChange={e => changeHandler({e,formVal,setVal})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' value={formVal.password} onChange={e => changeHandler({e,formVal,setVal})} className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"/>
                    </div>
                    <div id="passwordHelp" className="form-text my-3"><div className='h4 text-danger'>{formVal.unfortunate}</div></div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>);
}