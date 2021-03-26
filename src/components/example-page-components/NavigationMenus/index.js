import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import NavigationMenusHorizontal from
  '../../../components/example-components/NavigationMenus/NavigationMenusHorizontal';
import NavigationMenusVerticalBasic from
  '../../../components/example-components/NavigationMenus/NavigationMenusVerticalBasic';

const NavigationMenus = () =>
  <Fragment>
    <PageTitle
      titleHeading="Navigation menus"
      titleDescription="Navigation menus are one of the basic building blocks for any web or mobile app."
    />

    <WrapperSimple sectionHeading="Vertical menus">
      <NavigationMenusVerticalBasic />
    </WrapperSimple>

    <WrapperSimple sectionHeading="Horizontal menus">
      <NavigationMenusHorizontal />
    </WrapperSimple>
  </Fragment>;

export default NavigationMenus;
