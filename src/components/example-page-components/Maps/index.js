import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import MapsGoogleMaps from '../../../components/example-components/Maps/MapsGoogleMaps';
import MapsLeafletMaps from '../../../components/example-components/Maps/MapsLeafletMaps';

const Maps = () =>
  <Fragment>
    <PageTitle
      titleHeading="Maps"
      titleDescription="Implement in your applications Google or vector maps."
    />
    <WrapperSimple sectionHeading="Google maps">
      <MapsGoogleMaps />
    </WrapperSimple>
    <WrapperSimple sectionHeading="Leaflet maps">
      <MapsLeafletMaps />
    </WrapperSimple>
  </Fragment>;

export default Maps;
