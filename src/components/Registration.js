import React from "react";
import {Redirect, useHistory} from "react-router";
import {submitHandler,changeHandler} from '../eventHundlers/formHandlers'
import {useState} from "react";

export default function Registration(props) {
    if (props.args.isLogged){
        return <Redirect to={'/'} />
    }
    let history  = useHistory()
    const [formVal,setVal] = useState({username:'',login:'',password:'',unfortunate:''})
    return (
        <div className='container '>
            <div className='row-cols-4'>
                <form onSubmit={(event)=>{submitHandler({event,formVal,path:'register',history,setVal})}} >
                    <div className="mb-3 mt-lg-5">
                        <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                        <input type="username" name="username"
                               value={formVal.username} onChange={e => {changeHandler({e,formVal,setVal})}} className="form-control" id="exampleInputUsername1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="login" value={formVal.login} onChange={e => {changeHandler({e,formVal,setVal})}}  className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={formVal.password} onChange={e => {changeHandler({e,formVal,setVal})}} name="password"  className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"/>
                        <div id="passwordHelp" className="form-text my-3"><div className='h4 text-danger'>{formVal.unfortunate}</div></div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}