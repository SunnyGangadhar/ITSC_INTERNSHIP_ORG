import React, { Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Footer, Header } from '../../layout-components';

const PresentationLayout = props => {
  const { children, contentBackground } = props;

  return (
    <Fragment>
      <div className={clsx(contentBackground)}>
        <Header />
        <div className="container-fluid px-5">
          <div className="default-content">
            <div className="content">
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

PresentationLayout.propTypes = {
  children: PropTypes.node,
};

export default PresentationLayout;
