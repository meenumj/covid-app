import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPatient = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/covid/viewpatients").then(
            (response)=>{setData(response.data)})
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
      
<NavBar />
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Symptoms</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
{
    data.map((value,index)=>{
        return <tr>
        <td>{value.Name}</td>
        <td>{value.Mobile}</td>
        <td>{value.Address}</td>
        <td>{value.Symptoms}</td>
        <td>{value.Status}</td>
        </tr>
    })
}
  </tbody>
</table>

            </div>
        </div>
     </div>

    </div>
  )
}

export default ViewPatient
