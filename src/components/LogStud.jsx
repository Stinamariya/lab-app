import React, { useState } from 'react'
import NavBar from './NavBar'

const LogStud = () => {
  
    const [data,setData]=useState(
        {

            "email":String,
            "password":String
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
    return (
    <div>
       <NavBar/>
        <h1><center>STUDENT LOGIN</center></h1>
        <br /><br />
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">EMAIL</label>
                    <input type="text" className="form-control"name='email'value={data.email}onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control"name='password'value={data.password}onChange={inputHandler} />
                    <br /><br />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-success"onClick={readValue}>Login</button></center>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center><a href="/astud">go to Register</a></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogStud