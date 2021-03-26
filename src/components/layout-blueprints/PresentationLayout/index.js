import React, { Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Footer, Header } from '../../../components/layout-components';

const PresentationLayout = ({ children, contentBackground }) =>
  <Fragment>
    <div className={clsx(contentBackground)}>
      <Header />
      <div className="container-fluid px-5">{children}</div>
      <Footer />
    </div>
  </Fragment>;

PresentationLayout.propTypes = {
  children: PropTypes.node,
};

export default PresentationLayout;
