import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

const LivePreviewExample = () => {
  const options = {
    xaxis: {
      categories: [ `Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun` ],
    },
  };
  const series = [
    {
      data: [ 30, 40, 25, 50, 49, 21, 70, 51 ],
      name: `series-1`,
    },
    {
      data: [ 23, 12, 54, 61, 32, 56, 81, 19 ],
      name: `series-2`,
    },
  ];

  return (
    <Fragment>
      <Chart options={options} series={series} type="area" />
    </Fragment>
  );
};

export default LivePreviewExample;
