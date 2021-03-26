import React from 'react';
import FancyDiv from '../components/FancyDiv';

const IndexPage = () =>
  <div className="default-content">
    <div className="content">
      <FancyDiv>
        <div style={{ textAlign: `center` }}>
          <h1>
            Welcome to React-Static <br />
          </h1>
          <p>
            Start Here
          </p>
        </div>
      </FancyDiv>
    </div>
  </div>;

export default IndexPage;
