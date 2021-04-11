import React from 'react';
import { Link } from '@reach/router';
import '../CSS/card.css';
import { useRouteData } from 'react-static';

const Devops = () => {
  const { devops } = useRouteData();
  return (
    <div className="default-content">
      <div className="content container devops">
        <div className="row">        
          {devops.map(devop =>
           <div className="col-md-6 col-lg-3 pb-3" key={devop.id}>
             {/* key ={devop.id} is very important and should be unique as react will identify the DOM changes based on unique key */}
         <Link to={`/devops/${devop.id}/`}>
         <div className="card"  >
           <div className="name">
             <h2> {devop.nameOfProject}</h2>
           </div>
           <div className="card-overlay">
             <p>{devop.description}</p>           
           </div>
         </div>
         </Link>
         </div> )}          
         </div>
      </div>
    </div>
  );
};

export default Devops;
