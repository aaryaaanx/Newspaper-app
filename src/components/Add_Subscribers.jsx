import React from 'react'
import NavBar from './NavBar'

const Add_Subscribers = () => {
  return (
    <div>
        <NavBar/>
      <div className="container">
        <div className="row g-3">

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-secondary">
                            <div className="card-body">
                                <h1 className="card-text text-center"><b>Change Begins Here</b></h1>
                                <h4 className="card-text text-center"><b>The Sree Buddha Times</b></h4>
                                
                            </div>
                        </div>
                    </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subscriber Name</label>
                        <input type="text" className="form-control" placeholder='Enter your name'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" placeholder='Enter your Phone Number'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Enter your Address"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder='Enter your pincode'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">District</label>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Select Your District</option>
                        <option value="1">Thiruvanthapuram</option>
                        <option value="1">Kollam</option>
                        <option value="1">Alappuzha</option>
                        <option value="1">Pathanamthitta</option>
                        <option value="1">Kottayam</option>
                        <option value="1">Idukki</option>
                        <option value="1">Ernakulam</option>
                        <option value="1">Thrissur</option>
                        <option value="1">Palakkad</option>
                        <option value="1">Malappuram</option>
                        <option value="1">Kozhikode</option>
                        <option value="1">Wayanad</option>
                        <option value="2">Kannur</option>
                        <option value="3">Kasargod</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Village Office</label>
                    <input type="text" className="form-control" placeholder='Enter your Village Office' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email ID</label>
                       <input type="email" name="" id="" className="form-control" placeholder='Enter your Email ID' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add_Subscribers
