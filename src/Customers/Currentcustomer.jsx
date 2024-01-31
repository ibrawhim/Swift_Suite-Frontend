import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Currentcustomer = () => {
  const options = {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '60%',
        },
        track: {
          dropShadow: {
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            fontSize: '13px',
          },
          value: {
            fontSize: '10px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'color',
      colors: ['#027840'],
    },
    stroke: {
      lineCap: 'round',
      colors: ['#027840'], // Color of the stroke
      width: 15, // Adjust this value to control the thickness of the bar
    },
    labels: ['Progress'],
  };

  const series = [90];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={175}
      />
    </div>
  );
};

export default Currentcustomer;
