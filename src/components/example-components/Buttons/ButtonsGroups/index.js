import React, { Fragment } from 'react';

import { Button } from 'reactstrap';

import { ButtonGroup } from 'reactstrap';

const LivePreviewExample = () =>
  <Fragment>
    <ButtonGroup>
      <Button color="primary">Left</Button>
      <Button active color="primary">
        Middle
      </Button>
      <Button color="primary">Right</Button>
    </ButtonGroup>
  </Fragment>;

export default LivePreviewExample;
