import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import PaginationBasic from '../../../components/example-components/Pagination/PaginationBasic';
import PaginationSizing from '../../../components/example-components/Pagination/PaginationSizing';

const Pagination = () =>
  <Fragment>
    <PageTitle
      titleHeading="Pagination"
      titleDescription="Basic and dynamic pagination for use in your next awesome application."
    />

    <Row>
      <Col lg="6">
        <WrapperSimple sectionHeading="Basic">
          <PaginationBasic />
        </WrapperSimple>
      </Col>
      <Col lg="6">
        <WrapperSimple sectionHeading="Sizing">
          <PaginationSizing />
        </WrapperSimple>
      </Col>
    </Row>
  </Fragment>;

export default Pagination;
