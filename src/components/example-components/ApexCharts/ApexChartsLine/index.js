import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

const LivePreviewExample = () => {
  const options = {
    markers: {
      size: 0,
    },
    stroke: {
      curve: `smooth`,
    },
    xaxis: {
      categories: [ `Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun` ],
    },
  };
  const series = [
    {
      data: [ 30, 40, 25, 50, 49, 21, 70, 51 ],
    },
  ];
  return (
    <Fragment>
      <Chart options={options} series={series} type="line" />
    </Fragment>
  );
};

export default LivePreviewExample;
