import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddPatient = () => {
    const [input,setInput] = new useState(
        
        {   
            "Name":"",
            "Mobile": "",
            "Address":"",
            "Symptoms":"",
            "Status":""
               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}
const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/covid/addpatients",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("Data Added Successfully")
            setInput( {   
                "Name":"",
            "Mobile": "",
            "Address":"",
            "Symptoms":"",
            "Status":""
                   })
        } else {
            alert("Something went wrong")
        }
    })
}
  return (
    <div>
      <NavBar />
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Mobile</label>
                        <input type="text" className="form-control" name="Mobile" value={input.Mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Address</label>
                        <input type="text" className="form-control" name="Address" value={input.Address} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Symptoms</label>
                        <input type="text" className="form-control" name="Symptoms" value={input.Symptoms} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Status</label>
                        <input type="text" className="form-control" name="Status" value={input.Status} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default AddPatient
