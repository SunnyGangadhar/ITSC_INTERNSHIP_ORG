import React, { Component, Fragment } from 'react';

import { Button } from 'reactstrap';

import Chart from 'react-apexcharts';

export default class LivePreviewExample extends Component {
  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this);

    this.state = {
      optionsMixedChart: {
        chart: {
          id: `basic-bar`,
          toolbar: {
            show: false,
          },
        },
        markers: {
          fillOpacity: 0,
          hover: {
            size: 8,
          },
          size: 6,
          strokeOpacity: 0,
          strokeWidth: 3,
        },
        plotOptions: {
          bar: {
            columnWidth: `50%`,
            endingShape: `arrow`,
          },
        },
        stroke: {
          width: [ 4, 0, 0 ],
        },
        xaxis: {
          categories: [ `Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun` ],
        },
        yaxis: {
          max: 100,
          min: 0,
          tickAmount: 5,
        },
      },
      seriesMixedChart: [
        {
          data: [ 30, 40, 25, 50, 49, 21, 70, 51 ],
          name: `series-1`,
          type: `line`,
        },
        {
          data: [ 23, 12, 54, 61, 32, 56, 81, 19 ],
          name: `series-2`,
          type: `column`,
        },
        {
          data: [ 62, 12, 45, 55, 76, 41, 23, 43 ],
          name: `series-3`,
          type: `column`,
        },
      ],
    };
  }

  updateCharts() {
    const max = 90;
    const min = 30;
    const newMixedSeries = [];
    const { seriesMixedChart } = this.props;

    seriesMixedChart.forEach(s => {
      const data = s.data.map(() => Math.floor(Math.random() * (max - min + 1)) + min);
      newMixedSeries.push({ data, type: s.type });
    });

    this.setState({
      seriesMixedChart: newMixedSeries,
    });
  }

  render() {
    const { optionsMixedChart, seriesMixedChart } = this.state;

    return (
      <Fragment>
        <Chart
          options={optionsMixedChart}
          series={seriesMixedChart}
          type="line"
        />

        <div className="text-center mt-3">
          <Button color="primary" onClick={this.updateCharts}>
            Update!
          </Button>
        </div>
      </Fragment>
    );
  }
}
