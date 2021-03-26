import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import ButtonsBasic from '../../../components/example-components/Buttons/ButtonsBasic';
import ButtonsGroups from '../../../components/example-components/Buttons/ButtonsGroups';
import ButtonsGroupsSizing from '../../../components/example-components/Buttons/ButtonsGroupsSizing';
import ButtonsColors from '../../../components/example-components/Buttons/ButtonsColors';
import ButtonsLinks from '../../../components/example-components/Buttons/ButtonsLinks';
import ButtonsOutline from '../../../components/example-components/Buttons/ButtonsOutline';
import ButtonsSizing from '../../../components/example-components/Buttons/ButtonsSizing';

const Buttons = () =>
  <Fragment>
    <PageTitle
      titleHeading="Buttons"
      // eslint-disable-next-line max-len
      titleDescription="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
    />

    <Row>
      <Col xl="6">
        <WrapperSimple sectionHeading="Basic">
          <ButtonsBasic />
          <div className="divider my-2" />
          <ButtonsSizing />
        </WrapperSimple>
      </Col>
      <Col xl="6">
        <WrapperSimple sectionHeading="Button groups">
          <div className="text-center">
            <ButtonsGroups />
            <div className="divider my-2" />
            <ButtonsGroupsSizing />
          </div>
        </WrapperSimple>
      </Col>
      <Col xl="12">
        <WrapperSimple sectionHeading="Colors">
          <ButtonsColors />
        </WrapperSimple>
      </Col>
    </Row>

    <WrapperSimple sectionHeading="Links">
      <ButtonsLinks />
    </WrapperSimple>

    <WrapperSimple sectionHeading="Outline">
      <ButtonsOutline />
    </WrapperSimple>
  </Fragment>;

export default Buttons;
