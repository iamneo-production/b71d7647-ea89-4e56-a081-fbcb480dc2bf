import React from "react";
import { Link } from 'react-router-dom';
import './advprof.css';
import t1 from '../images/a.jpg';

import Home from "./home";

const Adprof = () => {
  const cards = [
    {
      id: 1,
      name: '        Kitches Correy',
      field: 'Strategy',
      image: t1,
    },
 
    
  ];

  return (
    <>
    
    
      <Home></Home>
    <div className="create">
      <div className="create-header">
        <h1 className="create-title">About</h1>
        
      </div>
      <div className="create-cardss">
        {cards.map((card) => (
          <div className="create-cardd" key={card.id}>
            <div className="card-image">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="card-detailss">
              <h2 className="card-namee">{card.name}</h2>
              <p className="card-fieldd">{card.field}</p>


             <div>
                </div>
              
              <h1 >
              Head of Planning Strategy, Buckingham Strategic Wealth | Reston, VA
              </h1>
                <div>
                  
                <p className="hhh">
                For more than two decades, Kitces has been a financial advisor and educator who helps clients and readers at all stages of life. Prior to joining Buckingham Wealth Partners, Michael founded XY Planning Network to serve 'next generation' clients who seek financial advice but don't have the assets to be served by more traditional financial advisors. XY Planning Network now has 1,700 advisors who work with underserved consumer segments.
                </p>
                </div>
             
              
              
              <br></br>
              <br></br>
              <Link to="pa" className="card-link">View Profile</Link>
            </div>
          
          </div>
        ))}
      </div>
    </div>

    <br></br>
    <br></br>
    <h1  style={{textAlign:"center"}}>Upcoming schedules</h1>
    <br></br>
    <br></br>
<div className="schedules">
    <div className="schedule">
    <div className="card-date">
  
  SAT 08
  
</div>
  
  <h2 className="card-nam">
    Available
  </h2>
  <p className="card-fiel">
    1:00 pm - 2:00 pm
  </p>
  <br></br>

  <br></br> 
   <Link to="po" className="card-link">Book</Link>
  
    </div>
    <div className="schedule">
 <div className="card-date">
  
   SUN 09
   
 </div>
 
  <h2 className="card-nam">
    Available
  </h2>
  <p className="card-fiel">
    12:00 pm - 2:00 pm
  </p>
  <br></br>
  <br></br>
  <Link to="po" className="card-link">Book</Link>
    </div>
    
    </div>
    
        </>
  );
};

export default Adprof;