import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';
import { WrapperSeamless } from '../../../components/layout-components';

import Cards1Examples1 from '../../../components/example-components/Cards1/Cards1Examples1';
import Cards4Examples23 from '../../../components/example-components/Cards4/Cards4Examples23';
import Cards2Examples8 from '../../../components/example-components/Cards2/Cards2Examples8';
import Cards5Examples29 from '../../../components/example-components/Cards5/Cards5Examples29';
import Cards7Examples48 from '../../../components/example-components/Cards7/Cards7Examples48';
import Cards8Examples55 from '../../../components/example-components/Cards8/Cards8Examples55';
import Cards9Examples56 from '../../../components/example-components/Cards9/Cards9Examples56';
import Cards9Examples61 from '../../../components/example-components/Cards9/Cards9Examples61';
import Cards11Examples70 from '../../../components/example-components/Cards11/Cards11Examples70';
import Cards12Examples79 from '../../../components/example-components/Cards12/Cards12Examples79';

const Cards3 = () =>
  <Fragment>
    <PageTitle
      titleHeading="Cards examples 3"
      titleDescription="Wide selection of cards with multiple styles, borders, actions and hover effects."
    />

    <WrapperSeamless sectionHeading="Cards 1">
      <Cards1Examples1 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 2">
      <Cards2Examples8 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 3">
      <Cards5Examples29 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 4">
      <Cards7Examples48 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 5">
      <Cards8Examples55 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 6">
      <Cards9Examples56 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 7">
      <Cards9Examples61 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 8">
      <Cards11Examples70 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 9">
      <Cards12Examples79 />
    </WrapperSeamless>
    <WrapperSeamless sectionHeading="Cards 10">
      <Cards4Examples23 />
    </WrapperSeamless>
  </Fragment>;

export default Cards3;
