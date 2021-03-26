import React from 'react';

const WrapperContainer = ({ children, sectionHeading }) =>
  <div className="example-card-container mb-5">
    <div className="container">
      <h5 className="display-4 mb-4 font-weight-bold">
        {sectionHeading}
      </h5>
      {children}
    </div>
  </div>;

export default WrapperContainer;
