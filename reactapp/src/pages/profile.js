import React, { useState } from 'react';
import './profile.css';
// import a from'../images/a.jpg';
import { useEffect } from 'react';
import axios from 'axios';
function Profile() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      
      try {
        const response = await axios.get("http://localhost:8181/api/v1/auth/get", {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setDataList(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);
  return (
    <>
    {dataList.map((data,index)=>(
    <div className="con">
     
    <div className="main-body">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" />
                <div className="mt-3">
                  <h4>{data.name}</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm"> {data.address}</p>
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
                  {data.name}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.email}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Designation</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.designation}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                {data.phone}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {data.address}
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
  </div>))}
  </>
  );
}

export default Profile;
