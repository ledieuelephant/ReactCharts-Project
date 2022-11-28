import './App.css'

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useState } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['1.11.2022', '2.11.2022', '3.11.2022', '4.11.2022', '5.11.2022', '6.11.2022', '7.11.2022', '8.11.2022', '9.11.2022', '10.11.2022', '11.11.2022', '12.11.2022', '13.11.2022', '14.11.2022', '15.11.2022', '16.11.2022', '17.11.2022', '18.11.2022', '19.11.2022', '20.11.2022', '21.11.2022', '22.11.2022', '23.11.2022', '24.11.2022', '25.11.2022', '26.11.2022', '27.11.2022'];

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'IKEA Instagram Günlük Takipçi Sayısı',
      data : [1616586, 1616630, 1616942, 1617000, 1617220, 1617476, 1617513, 1617832, 1617900, 1618188, 1618366, 1618330, 1618722, 1618820, 1619078, 1619256, 1619300, 1619612, 1619560, 1619968, 1620146, 1620176, 1620502, 1620600, 1620858, 1620800, 1621214],
      // Colors blue
      borderColor: 'rgba(0, 81, 186, 1)',
      backgroundColor: 'rgba(0, 81, 186, 0.5)',
    }
  ]
}

export const data2 = {
  labels: labels,
  datasets: [
    {
      label: 'IKEA Facebook Günlük Takipçi Sayısı',
      data : [31922825, 31925264, 31928103, 31932742, 31932381, 31933020, 31938659, 31940298, 31944937, 31943576, 31945215, 31951854, 31956493, 31957132 /* */, 31955771, 31962410, 31962049, 31967488, 31970327, 31974066, 31975605, 31976244 /* */, 31986083, 31985122, 31986161, 31988800, 31994068],
      borderColor: 'rgba(0, 81, 186, 1)',
      backgroundColor: 'rgba(0, 81, 186, 0.5)',
    }
  ]

}

var min = 31922825
var max = 31994068
var mydata = []
while (min < max) {
  mydata.push(min)
  min += 2639
}
console.log(mydata)

// console.log 3 times number between 1616586 and 1621388


function App() {
  return (
    <div>
      <Line data={data} />
      <Line data={data2} />
    </div>
  )
}

export default App
