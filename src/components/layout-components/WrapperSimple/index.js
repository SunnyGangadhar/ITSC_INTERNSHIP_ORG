import React from 'react';

import { Card, CardBody, CardHeader } from 'reactstrap';

const WrapperSimple = ({ children, sectionHeading }) =>
  <Card className="card-box mb-5">
    <CardHeader>
      <div className="card-header--title font-size-md font-weight-bold py-2">
        <b className="font-size-md">{sectionHeading}</b>
      </div>
    </CardHeader>
    <CardBody>{children}</CardBody>
  </Card>;

export default WrapperSimple;
