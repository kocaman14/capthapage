import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import photoAr from './Photo'
import { selectTrue,startButton } from '../feautres/cap'
import './Page.css'
import { useNavigate } from "react-router-dom";

const Captcha = () => {
const navigate=useNavigate()
const dispatch=useDispatch()
const {start,control}= useSelector((state)=>state.cap)
const randomIndex = Math.floor(Math.random() * photoAr.length)
useEffect(() => {
  if (control) {
    navigate("/project");
  }
}, [control, navigate]);

  return (
    <div className="container">
    {start ? (
      <>
        <label className="captcha-label">{randomIndex + 1} Numaralı Resmi Seçiniz?</label>
        <div  className="photo-container">

        {photoAr.map((photos, index) => (
            <img
            onClick={() => dispatch(selectTrue({ randomIndex, number: index }))}
            key={index}
            src={photos}
            style={{ width: '50px', height: '50px', marginBottom: '10px' }}
            />
        ))}
        </div>
      </>
    ) : (
      <button className="start-button" onClick={() => dispatch(startButton())}>Start Captcha</button>
    )}
  

    
  </div>
  )
}

export default Captcha