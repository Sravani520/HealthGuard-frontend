// import './Profile.css'

// export default function Profile() {
//   return (
//         <div className='home'>
//         <div className='heading'>
//             <h2>USER PROFILE</h2><br/> <br/>
//         </div>
//         <div className='Content'>
//               <p className='data'>Temperature: {temperature}97.5</p><br/>
//               <p className='data'>Heart Rate: 92</p><br/>
//               <p className='data'>SPO2:97</p><br/>
//               <p className='data'>Severity Level:0</p>
//         </div>
//         </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SensorList = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await axios.get('/api/sensors');
        setSensorData(response.data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorData();
  }, []);

  return (
    <div>
      <h2>Sensor Data</h2>
      <ul>
        {sensorData.map((sensor, index) => (
          <li key={index}>
            Temperature: {sensor.temperature}°F, Heartrate: {sensor.heartBeat}bpm, SPO2: {sensor.SPO2}%, fall detection: {sensor.fall_detection}, Timestamp: {new Date(sensor.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SensorList;
