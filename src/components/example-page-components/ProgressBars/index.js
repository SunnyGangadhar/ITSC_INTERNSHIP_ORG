import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import ProgressBarsBasic from '../../../components/example-components/ProgressBars/ProgressBarsBasic';
import ProgressBarsAnimated from '../../../components/example-components/ProgressBars/ProgressBarsAnimated';
import ProgressBarsLabels from '../../../components/example-components/ProgressBars/ProgressBarsLabels';
import ProgressBarsRounded from '../../../components/example-components/ProgressBars/ProgressBarsRounded';
import ProgressBarsColors from '../../../components/example-components/ProgressBars/ProgressBarsColors';
import ProgressBarsMultiple from '../../../components/example-components/ProgressBars/ProgressBarsMultiple';

const ProgressBars = () =>
  <Fragment>
    <PageTitle
      titleHeading="Progress Bars"
      titleDescription="You can use the progress bars on their own or in combination with other widgets."
    />

    <Row>
      <Col xl="6">
        <WrapperSimple sectionHeading="Basic">
          <ProgressBarsBasic />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Labels">
          <ProgressBarsLabels />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Animated">
          <ProgressBarsAnimated />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Multiple">
          <ProgressBarsMultiple />
        </WrapperSimple>
      </Col>
      <Col xl="6">
        <WrapperSimple sectionHeading="Rounded">
          <ProgressBarsRounded />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Colors">
          <ProgressBarsColors />
        </WrapperSimple>
      </Col>
    </Row>
  </Fragment>;

export default ProgressBars;
