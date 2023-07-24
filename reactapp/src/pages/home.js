import React from "react";

import { useSelector } from 'react-redux'; 
import './home.css';
import { Link } from "react-router-dom";

function Home(){
 
  return(
                <div className="header">
         
                   <h1 className="logo">
                   <a className="title">ADVISOR HUB</a>
                   </h1>
                   <div class="search">
                     
            <form action="/i">
                <input type="text"
                    placeholder=" Search "
                    name="search"/>
              
            </form>
        </div>
              <ul className="main-nav">
                <li>
                  <a><Link to="/home">Home</Link></a>
                </li>
                <li>
                <a><Link to="/i">TopAdvisors</Link></a>
                </li>
                <li>
                <a><Link to="/pro">Profile</Link></a>
                </li>
                <li>
                  <a><Link to="/">LogOut</Link></a>
                </li>
              </ul>
              <div>
           
              </div>
             
                  </div>
                  
  
                  
                ); 
            }
            export default Home;
