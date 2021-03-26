import React, { Fragment } from 'react';

import { PageTitle, WrapperSeamless } from '../../../components/layout-components';

import RegularTables4Example7 from '../../../components/example-components/RegularTables4/RegularTables4Example7';

const RegularTables4 = () =>
  <Fragment>
    <PageTitle
      titleHeading="Tables examples 4"
      titleDescription="Tables are the backbone of almost all web applications."
    />

    <WrapperSeamless sectionHeading="">
      <RegularTables4Example7 />
    </WrapperSeamless>
  </Fragment>;

export default RegularTables4;
