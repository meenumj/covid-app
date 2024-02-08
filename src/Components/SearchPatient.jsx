import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchPatient = () => {
    const [input,setInput] = new useState(
        {   
            "Name":""
               }
)
    const [data,setData] = new useState([])
    

    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    
    }


    const readValues = ()=>{
        axios.post("http://localhost:3001/api/covid/patientsearch",{Name:input.Name}).then((response)=>{
            setData(response.data)
        })
    }
    
  return (
    <div>
      <NavBar />
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2>Search Results</h2>
                    <ul>
                    {
                    data.map((value,index) => {
return <li>
                        <strong>Name:</strong> {value.Name}  <br />
                        <strong>Phone:</strong> {value.Mobile} <br />
                        <strong>Address:</strong> {value.Address} <br />
                        <strong>Symptoms:</strong> {value.Symptoms} <br />
                        <strong>Status:</strong> {value.Status} <br />
                        </li>
                    }
                    )}
                </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPatient
