import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAttend = () => {
    const[data,setData]=useState([
        {"subject":"adbms","facname":"sree","lab":"l6","hour":"6"}
    ])

  return (
    <div>
       <NavBar/>
        <h1><center>VIEW ATTENDENCE</center></h1>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">SUBJECT</th>
      <th scope="col">FACULTY NAME</th>
      <th scope="col">LAB</th>
      <th scope="col">HOUR</th>
      
    </tr>
  </thead>
  <tbody>

  {data.map(
  (value, index)=>{
    return   <tr>
    
    <td>{value.subject}</td>
    <td>{value.facname}</td>
    <td>{value.lab}</td>
    <td>{value.hour}</td>
  </tr>
  }
  )}
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAttend