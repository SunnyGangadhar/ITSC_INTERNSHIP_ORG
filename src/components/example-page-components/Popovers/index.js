import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import PopoversBasic from '../../../components/example-components/Popovers/PopoversBasic';

const Popovers = () =>
  <Fragment>
    <PageTitle
      titleHeading="Popovers"
      // eslint-disable-next-line max-len
      titleDescription="Add small overlay content, like those found in iOS, to any element for housing secondary information."
    />

    <WrapperSimple sectionHeading="Basic">
      <PopoversBasic />
    </WrapperSimple>
  </Fragment>;

export default Popovers;
