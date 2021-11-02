import React from "react";
import { useHistory } from "react-router";
import {submitHandler,changeHandler} from '../eventHundlers/formHandlers'
import {useState} from "react";

export default function Registration() {
    let history =useHistory()
    const [formVal,setVal] = useState({username:'',login:'',password:''})
    return (
        <div className='container '>
            <div className='row-cols-4'>
                <form onSubmit={(event)=>{submitHandler({event,formVal,history,path:'register'})}} >
                    <div className="mb-3 mt-lg-5">
                        <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                        <input type="username" name="username"
                               value={formVal.username} onChange={e => {changeHandler({e,formVal,setVal})}} className="form-control" id="exampleInputUsername1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="login" value={formVal.login} onChange={e => {changeHandler({e,formVal,setVal})}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={formVal.password} onChange={e => {changeHandler({e,formVal,setVal})}} name="password"  className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}