import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import ModalsBasic from '../../../components/example-components/Modals/ModalsBasic';

const Modals = () =>
  <Fragment>
    <PageTitle
      titleHeading="Modal dialogs"
      titleDescription="Wide selection of modal dialogs styles and animations available."
    />

    <WrapperSimple sectionHeading="Basic">
      <ModalsBasic />
    </WrapperSimple>
  </Fragment>;

export default Modals;
