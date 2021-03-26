import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { AnimatePresence, motion } from 'framer-motion';
import { PresentationLayout } from './components/layout-blueprints';
import './plugins/fontawesome';
import './assets/base.scss';
import './app.scss';

const pageVariants = {
  in: {
    opacity: 1,
    scale: 1,
  },
  initial: {
    opacity: 0,
    scale: 0.99,
  },
  out: {
    opacity: 0,
    scale: 1.01,
  },
};

const pageTransition = {
  duration: 0.4,
  ease: `anticipate`,
  type: `tween`,
};

const App = () =>
  <Root>
    <AnimatePresence>
      <React.Suspense fallback={
        // eslint-disable-next-line max-len
        <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
          <div className="w-50 mx-auto">
            Please wait while we load the website
          </div>
        </div>
      }>
        <PresentationLayout>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            <Router>
              <Routes path="*" />
            </Router>
          </motion.div>
        </PresentationLayout>
      </React.Suspense>
    </AnimatePresence>
  </Root>;

export default App;
