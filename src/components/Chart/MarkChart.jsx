import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const students = [
    { id: 1, name: "Alice Johnson", math: 85, english: 78, science: 92 },
    { id: 2, name: "Bob Smith", math: 74, english: 81, science: 88 },
    { id: 3, name: "Charlie Brown", math: 90, english: 85, science: 91 },
    { id: 4, name: "Daisy Miller", math: 68, english: 74, science: 80 },
    { id: 5, name: "Ethan Davis", math: 95, english: 89, science: 94 },
    { id: 6, name: "Fiona Clark", math: 76, english: 83, science: 79 },
    { id: 7, name: "George Lee", math: 82, english: 80, science: 86 },
    { id: 8, name: "Hannah Wilson", math: 88, english: 90, science: 85 },
    { id: 9, name: "Ian Thompson", math: 70, english: 75, science: 78 },
    { id: 10, name: "Julia Martinez", math: 93, english: 87, science: 90 }
  ];
  
  const bangladeshTopScorers = [
    { id: 1, name: "Tamim Iqbal", highestRuns: 206, format: "Test" },
    { id: 2, name: "Mushfiqur Rahim", highestRuns: 219, format: "Test" },
    { id: 3, name: "Shakib Al Hasan", highestRuns: 217, format: "Test" },
    { id: 4, name: "Mahmudullah Riyad", highestRuns: 150, format: "Test" },
    { id: 5, name: "Litton Das", highestRuns: 141, format: "Test" },
    { id: 6, name: "Nazmul Hossain Shanto", highestRuns: 163, format: "Test" },
    { id: 7, name: "Mohammad Ashraful", highestRuns: 190, format: "Test" },
    { id: 8, name: "Anamul Haque", highestRuns: 120, format: "ODI" },
    { id: 9, name: "Soumya Sarkar", highestRuns: 127, format: "ODI" },
    { id: 10, name: "Afif Hossain", highestRuns: 93, format: "T20I" }
  ];
  
  

const MarkChart = () => {
    return (
        <div className='px-10 py-8'>
            <div>
            <LineChart width={300} md:width={600} height={200} md:height={300} data={students}>
                 <XAxis dataKey={'name'}></XAxis>
                 <YAxis></YAxis>
                <Line  dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'english'} stroke={'green'}></Line>
            </LineChart>
            </div>

            <LineChart width={300} md:width={600} height={200} md:height={300} data={bangladeshTopScorers}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
                <Line dataKey={'highestRuns'} stroke='blue'></Line>
                <Line dataKey={'name'} stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default MarkChart;