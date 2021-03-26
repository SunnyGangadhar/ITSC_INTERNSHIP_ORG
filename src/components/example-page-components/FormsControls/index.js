import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';
import { WrapperSeamless } from '../../../components/layout-components';

import FormsControlsBasic from '../../../components/example-components/FormsControls/FormsControlsBasic';
import FormsControlsInputGroups from '../../../components/example-components/FormsControls/FormsControlsInputGroups';

const FormsControls = () =>
  <Fragment>
    <PageTitle
      titleHeading="Controls"
      titleDescription="Wide selection of forms controls, using a standardized code base, specifically for React."
    />
    <WrapperSeamless sectionHeading="Basic">
      <FormsControlsBasic />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Input groups">
      <FormsControlsInputGroups />
    </WrapperSeamless>
  </Fragment>;

export default FormsControls;
