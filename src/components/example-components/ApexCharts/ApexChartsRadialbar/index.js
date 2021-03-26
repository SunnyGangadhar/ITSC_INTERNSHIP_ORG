import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

const LivePreviewExample = () => {
  const series = [ 44, 55, 67, 83 ];
  const options = {
    chart: {
      height: 350,
      type: `radialBar`,
    },
    labels: [ `Apples`, `Oranges`, `Bananas`, `Berries` ],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: `22px`,
          },
          total: {
            formatter() {
              return 249;
            },
            label: `Total`,
            show: true,
          },
          value: {
            fontSize: `16px`,
          },
        },
      },
    },
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-center">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
