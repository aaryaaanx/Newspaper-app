import React from 'react'
import NavBar from './NavBar'

const Delete_Subscribers = () => {
  return (
    <div>
         <NavBar/>
         <br />
      <div className="container">
        <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="card bg-secondary">
                            <div className="card-body">
                                <h1 className="card-text text-center"><b>Delete Subscribers</b></h1>

                                
                            </div>
                        </div>
                    </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Subscriber's Name</label>
                        <input type="text" className="form-control"placeholder='Enter Subscriber Name' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Delete_Subscribers
