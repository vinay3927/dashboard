import React from 'react';
import { activitiesData } from '../../../../data/Data'; 
import BarChart from './barchart/Barchart';


const Activities = () => {
  return (
    <div className="activities">
      <BarChart data={activitiesData} />
    </div>
  )
}

export default Activities;
