import React, { useState } from 'react';
import './profile.css';
// import a from'../images/a.jpg';

function ProfileA() {
 
  return (
    <div className="con">
    <div className="main-body">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://www.mycast.io/talent/corey-mylchreest" />
                <div className="mt-3">
                  <h4>Correy</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                  <button className="bt">Follow</button>
                  <button className="bt">Message</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Kenneth Valdez
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  fip@jukmuh.al
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  (239) 816-9029
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  (320) 380-4539
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Bay Area, San Francisco, CA
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <a className="bt">Edit</a>
                </div>
              </div>
            </div>
          </div>
          
       </div>
      </div>
    </div>
  </div>
  );
}

export default ProfileA;
