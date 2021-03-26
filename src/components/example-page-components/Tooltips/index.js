import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import TooltipsBasic from '../../../components/example-components/Tooltips/TooltipsBasic';

const Tooltips = () =>
  <Fragment>
    <PageTitle
      titleHeading="Tooltips"
      titleDescription="The tooltip or infotip or a hint is a common graphical user interface element."
    />

    <WrapperSimple sectionHeading="Basic">
      <TooltipsBasic />
    </WrapperSimple>
  </Fragment>;

export default Tooltips;
