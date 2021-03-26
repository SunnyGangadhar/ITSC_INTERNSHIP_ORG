import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import FormsLayoutBasic from '../../../components/example-components/FormsLayout/FormsLayoutBasic';
import FormsLayoutGrids from '../../../components/example-components/FormsLayout/FormsLayoutGrids';

const FormsLayout = () =>
  <Fragment>
    <PageTitle
      titleHeading="Layout"
      titleDescription="Build whatever layout you need with our modular user interface framework."
    />

    <WrapperSimple sectionHeading="Basic">
      <FormsLayoutBasic />
    </WrapperSimple>
    <WrapperSimple sectionHeading="Grids">
      <FormsLayoutGrids />
    </WrapperSimple>
  </Fragment>;

export default FormsLayout;
