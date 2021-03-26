import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import BadgesBasic from '../../../components/example-components/Badges/BadgesBasic';
import BadgesPills from '../../../components/example-components/Badges/BadgesPills';
import BadgesButtons from '../../../components/example-components/Badges/BadgesButtons';

const Badges = () =>
  <Fragment>
    <PageTitle
      titleHeading="Badges"
      titleDescription="Badges and labels are used to offer extra small pieces of info for your content."
    />

    <Row>
      <Col xl="6">
        <WrapperSimple sectionHeading="Basic">
          <BadgesBasic />
        </WrapperSimple>
      </Col>
      <Col xl="6">
        <WrapperSimple sectionHeading="Pills">
          <BadgesPills />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Buttons with label badges">
          <BadgesButtons />
        </WrapperSimple>
      </Col>
    </Row>
  </Fragment>;

export default Badges;
