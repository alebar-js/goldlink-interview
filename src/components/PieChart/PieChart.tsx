import React from 'react'
import Card from '../Card'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Strategy 1', 'Strategy 2', 'Strategy 3', 'Strategy 4'],
    datasets: [
      {
        data: [12, 13, 25, 50],
        backgroundColor: [
          '#855CF8',
          '#E289F2',
          '#7879F1',
          '#B085FF',
        ],
      },
    ],
  };

const options = { 
    plugins: {
        legend: {
            labels: {
                boxWidth: 14,
                boxHeight: 14,
                borderRadius: 8,
            },
            position: 'bottom'
        }
    }
}

const PieChart = () => {
  return (
    <Card>
        <div className='flex justify-between mb-8'>
            <div>Lending Allocations</div>
            <div>$5000 USDC</div>
        </div>
        <Pie data={data} options={options}/>
    </Card>
  )
}

export default PieChart