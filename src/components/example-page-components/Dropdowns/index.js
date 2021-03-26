import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import DropdownsBasic from '../../../components/example-components/Dropdowns/DropdownsBasic';
import DropdownsSplit from '../../../components/example-components/Dropdowns/DropdownsSplit';

const Dropdowns = () =>
  <Fragment>
    <PageTitle
      titleHeading="Dropdowns"
      // eslint-disable-next-line max-len
      titleDescription="A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list."
    />

    <Row>
      <Col xl="6">
        <WrapperSimple sectionHeading="Basic">
          <DropdownsBasic />
        </WrapperSimple>
      </Col>
      <Col xl="6">
        <WrapperSimple sectionHeading="Split">
          <DropdownsSplit />
        </WrapperSimple>
      </Col>
    </Row>
  </Fragment>;

export default Dropdowns;
