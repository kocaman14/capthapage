import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
const HomePage = () => {

  return (
    <div className="container">
        
    <h1>Welcome to home page</h1>
    
<Link to="/captcha"><button className="start-button">Go To captcha</button></Link>
    </div>
  )
}

export default HomePage