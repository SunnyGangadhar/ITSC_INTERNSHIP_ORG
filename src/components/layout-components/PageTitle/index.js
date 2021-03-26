import React, { Fragment } from 'react';

const PageTitle = ({ titleDescription, titleHeading }) =>
  <Fragment>
    <div className="mb-5">
      <h1 className="display-3 mb-3 font-weight-bold text-capitalize">
        {titleHeading}
      </h1>
      <p className="font-size-xl text-black-50">
        {titleDescription}
      </p>
    </div>
  </Fragment>;

export default PageTitle;
