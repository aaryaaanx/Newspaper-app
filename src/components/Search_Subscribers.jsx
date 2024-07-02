import React from 'react'
import NavBar from './NavBar'

const Search_Subscribers = () => {
  return (
    <div>
         <NavBar/>
      <div className="container">
        <div className="row g-3">

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-secondary">
                            <div className="card-body">
                                <h1 className="card-text text-center"><b>Search Subscribers</b></h1>
                               
                                
                            </div>
                        </div>
                    </div>


            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Subscriber's Name</label>
                        <input type="text" className="form-control" placeholder='Enter Subscriber Name'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search_Subscribers
