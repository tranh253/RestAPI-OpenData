import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import {Bar} from 'react-chartjs-2';

function App() {
  const [data, setData] = useState();
  const [chartData, setChartData] = useState();
  const token = process.env.REACT_APP_API_KEY
  
  useEffect(() => {
    const fetchData = async () => {
   await axios.get('https://opendata.hopefully.works/api/events', {
      headers: {"Authorization" : `Bearer ${token}`}})
      .then(res => {
          setData(res.data);
          setChartData({
            labels: ['sensor1', 'sensor2', 'sensor3', 'sensor4'],
            datasets: [
              { 
                label: 'data',
                data: [ parseInt(res.data.sensor1), parseInt(res.data.sensor2), parseInt(res.data.sensor3), parseInt(res.data.sensor4)],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }
            ]
          })
      })
      .catch((error) => console.log(error));
  }
  fetchData();
  }, [data, token])
  return(
    <>
    {data && (
      <>
        <h2>Recorded at: {moment.utc(data.date).format('MMMM Do YYYY, h:mm:ss a')}</h2>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Open Data"
              },
              legend: {
                display: false
              }
            }
          }} 
        />
      </>
      )}
    </>
  )
}

export default App;
