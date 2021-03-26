import React from 'react';

const WrapperSeamless = ({ children, sectionHeading }) =>
  <div className="example-card-seamless mb-5">
    <h5 className="display-4 mb-4 font-weight-bold">
      {sectionHeading}
    </h5>
    {children}
  </div>;

export default WrapperSeamless;
