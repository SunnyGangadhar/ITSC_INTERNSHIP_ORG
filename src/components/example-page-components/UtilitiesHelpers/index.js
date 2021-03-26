import React, { Fragment } from 'react';
import { PageTitle } from '../../../components/layout-components';
import { WrapperSimple } from '../../../components/layout-components';
import UtilitiesHelpersPrimaryColors from
  '../../../components/example-components/UtilitiesHelpers/UtilitiesHelpersPrimaryColors';
import UtilitiesHelpersNeutralColors from
  '../../../components/example-components/UtilitiesHelpers/UtilitiesHelpersNeutralColors';
import UtilitiesHelpersBrandColors from
  '../../../components/example-components/UtilitiesHelpers/UtilitiesHelpersBrandColors';

const UtilitiesHelpers = () =>
  <Fragment>
    <PageTitle
      titleHeading="Utilities &amp; Helpers"
      titleDescription="These are helpers that speed up the dev time for various components and effects."
    />

    <WrapperSimple sectionHeading="Brand colors">
      <UtilitiesHelpersBrandColors />
    </WrapperSimple>

    <WrapperSimple sectionHeading="Neutral colors">
      <UtilitiesHelpersNeutralColors />
    </WrapperSimple>
    <WrapperSimple sectionHeading="Primary colors">
      <UtilitiesHelpersPrimaryColors />
    </WrapperSimple>
  </Fragment>;

export default UtilitiesHelpers;
