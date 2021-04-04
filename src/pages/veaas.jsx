import React from 'react';
import { Link } from '@reach/router';
import '../CSS/card.css';
import { useRouteData } from 'react-static';

const Veaas = () => {
  const { veaas } = useRouteData();
  return (
    <div className="default-content">
      <div className="content container devops">
        <div className="row">        
          {veaas.map(veaas =>
           <div className="col-md-6 col-lg-3 pb-3" key={veaas.id}>          
         <Link to={`/veaas/${veaas.id}/`}>
         <div className="card"  >
           <div className="name">
             <h2> {veaas.nameOfProject}</h2>
           </div>
           <div className="card-overlay">
             <p>{veaas.description}</p>           
           </div>
         </div>
         </Link>
         </div> )}          
         </div>
      </div>
    </div>
  );
};

export default Veaas;
