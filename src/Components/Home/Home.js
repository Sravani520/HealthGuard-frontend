import React, { useEffect } from 'react'
import './Home.css'
import { useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate =useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[navigate])
  return (
        <div className='home'>
        {/* <div className='image'> 
            <img width="100%" height="100%" className='homepage_image' src="" alt="homepage"/>
        </div> */}
        <div className='heading'>
            <h2>WELCOME TO HEALTHGUARD!!!</h2><br/> <br/>
        </div>
        <div className='Content'>
              <p className='data'>Temperature: 97.5</p><br/>
              <p className='data'>Heart Rate: 92</p><br/>
              <p className='data'>SPO2:97</p><br/>
              <p className='data'>Severity Level:0</p>
        </div>
        </div>
  )
}
