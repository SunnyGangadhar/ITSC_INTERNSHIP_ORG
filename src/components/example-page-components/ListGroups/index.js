import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';
import { WrapperSeamless } from '../../../components/layout-components';

import ListGroupsVariations4 from '../../../components/example-components/ListGroups/ListGroupsVariations4';
import ListGroupsVariations8 from '../../../components/example-components/ListGroups/ListGroupsVariations8';

const ListGroups = () =>
  <Fragment>
    <PageTitle
      titleHeading="List Groups"
      // eslint-disable-next-line max-len
      titleDescription="These can be used with other components and elements to create stunning and unique new elements for your UIs"
    />

    <WrapperSeamless sectionHeading="Examples variations IV">
      <ListGroupsVariations4 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Examples variations VIII">
      <ListGroupsVariations8 />
    </WrapperSeamless>
  </Fragment>;

export default ListGroups;
