import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip } from 'chart.js';
import { BarElement } from 'chart.js';
import './Barchart.css'

ChartJS.register(BarElement);
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip);

const BarChart = ({ data }) => {
  const customOptions = {
    scales: {
      x: {
        ticks: {
          color: '#858585', 
        },
      },
      y: {
        suggestedMin: 0, 
        suggestedMax: 500, 
        ticks: {
          color: '#858585', 
          stepSize: 100,
        },
      },
    },
    legendColors: {
      guest: '#EE8484',
      user: '#98D89E',
    },
  };

  const datasetOptions = {
    barPercentage: 1, 
    categoryPercentage: 1, 
  };

  if (data && data.datasets) {
    data.datasets.forEach((dataset) => {
      Object.assign(dataset, datasetOptions);
    });
  }

  return (
    <div className="barchart">
      <div className='chart'>
        <div className='heading'>
          <div className='date'>
            <span>Activities</span>
            <span>May-June 2021</span>
          </div>
          <div className='legend'>
  <div className='guest'>
    <span className='circle' style={{ backgroundColor: customOptions.legendColors.guest }}></span>
    Guest
  </div>
  <div className='user'>
    <span className='circle' style={{ backgroundColor: customOptions.legendColors.user }}></span>
    User
  </div>
</div>

        </div>
        <Bar
          data={data}
          options={customOptions}
        />
      </div>
    </div>
  );
};

export default BarChart;
