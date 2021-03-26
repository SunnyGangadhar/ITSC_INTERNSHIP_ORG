import React, { Fragment } from 'react';

import { Col, Row } from 'reactstrap';
import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import ApexChartsLine from '../../../components/example-components/ApexCharts/ApexChartsLine';
import ApexChartsArea from '../../../components/example-components/ApexCharts/ApexChartsArea';
import ApexChartsColumn from '../../../components/example-components/ApexCharts/ApexChartsColumn';
import ApexChartsBar from '../../../components/example-components/ApexCharts/ApexChartsBar';
import ApexChartsMixed from '../../../components/example-components/ApexCharts/ApexChartsMixed';
import ApexChartsHeatmap from '../../../components/example-components/ApexCharts/ApexChartsHeatmap';
import ApexChartsRadialbar from '../../../components/example-components/ApexCharts/ApexChartsRadialbar';
import ApexChartsRadar from '../../../components/example-components/ApexCharts/ApexChartsRadar';

const ApexCharts = () =>
  <Fragment>
    <PageTitle
      titleHeading="Apex Charts"
      titleDescription="Wonderful animated charts built with ApexCharts components."
    />

    <Row>
      <Col xl="6">
        <WrapperSimple sectionHeading="Area">
          <ApexChartsArea />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Column">
          <ApexChartsColumn />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Line">
          <ApexChartsLine />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Radar">
          <ApexChartsRadar />
        </WrapperSimple>
      </Col>
      <Col xl="6">
        <WrapperSimple sectionHeading="Bar">
          <ApexChartsBar />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Heatmap">
          <ApexChartsHeatmap />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Mixed">
          <ApexChartsMixed />
        </WrapperSimple>
        <WrapperSimple sectionHeading="Radial bar">
          <ApexChartsRadialbar />
        </WrapperSimple>
      </Col>
    </Row>
  </Fragment>;

export default ApexCharts;
