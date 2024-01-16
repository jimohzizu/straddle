import React from 'react'
import './jobs.css'
import rafiki from '../../assets/rafiki.png'
import { Link } from 'react-router-dom'

const Jobs = () => {
  return (
    <div className='Jobs section__padding'>
        <div className="Jobs-text">
        <p>Oops.... </p>
        <h1>There are currently no open roles, please check back later</h1>
       <Link to="/"><button className='Jobs-text__image'> &larr; Back to home</button></Link> 
        </div>
        <div className="Jobs-image">
            <img src={rafiki} alt="jobs image" />
        </div>
        


    </div>
  )
}

export default Jobs