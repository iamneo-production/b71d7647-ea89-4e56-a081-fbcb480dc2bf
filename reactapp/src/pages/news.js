import React from "react";
import { Link } from 'react-router-dom';
import './news.css';
import t1 from '../images/a.jpg';
import t2 from '../images/b.jpg';
import t3 from '../images/c.jpg';
import t4 from '../images/d.jpeg';
import t5 from '../images/e1 (2).jpeg';
import t6 from '../images/f.jpg';
import t7 from '../images/g.jpg';
import t8 from '../images/h.jpg';
import Home from "./home";

const TopAdvisors = () => {
  const cards = [
    {
      id: 1,
      name: 'Correy',
      description: 'Management',
      image: t1,
    },
    {
      id: 2,
      name: 'Tom Hiddleston ',
      description: 'Finanace',
      image:  t2,
    },
    {
      id: 3,
      name: 'Charles',
      description: 'Buisness Consulting',
      image: t3,
    },
    {
      id: 4,
      name: 'Joseph Morgan',
      description: 'Information Technology',
      image: t4,
    },
    {
      id: 5,
      name: 'Ana de Armas',
      description: 'Software Development',
      image:  t5,
    },
    {
      id: 6,
      name: 'Victor',
      description: 'Mechanics',
      image: t6,
    },
    {
      id: 7,
      name: 'Laura',
      description: 'Finanace',
      image: t7,
    },
    {
      id: 8,
      name: 'William',
      description: 'entrepreneurship',
      image: t8,
    },
    
  ];

  return (
    <>
    
    
      <Home></Home>
    <div className="topad">
      <div className="topad-header">
        <h1 className="topad-title">Top Advisors</h1>
        
      </div>
      <div className="topad-cards">
        {cards.map((card) => (
          <div className="topad-card" key={card.id}>
            <div className="card-image">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="card-details">
              <h2 className="card-name">{card.name}</h2>
              <p className="card-description">{card.description}</p>
              <Link to="ad" className="card-link">Select</Link>
            </div>
          
          </div>
        ))}
      </div>
    
                  
      <footer className="homepage-footer">
        
      </footer>
    </div>
        </>
  );
};

export default TopAdvisors;