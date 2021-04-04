import React from 'react';
import { Link } from '@reach/router';
import '../CSS/card.css';
import { useRouteData } from 'react-static';

const Ocat = () => {
  const { ocat } = useRouteData();
  return (
    <div className="default-content">
      <div className="content container devops">
        <div className="row">        
          {ocat.map(ocat =>
           <div className="col-md-6 col-lg-3 pb-3" key={ocat.id}>          
         <Link to={`/ocat/${ocat.id}/`}>
         <div className="card"  >
           <div className="name">
             <h2> {ocat.nameOfProject}</h2>
           </div>
           <div className="card-overlay">
             <p>{ocat.description}</p>           
           </div>
         </div>
         </Link>
         </div> )}          
         </div>
      </div>
    </div>
  );
};

export default Ocat;
