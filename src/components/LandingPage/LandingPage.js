import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory, useLocation, useParams } from 'react-router-dom'
import '../Welcome.css'

const landing = () => {
    return (
        <div>
            <div className="background" >
                <span className="title" >Habitually Good</span>
            </div>
            <div className="about">
                <h5 className="shade"><span>ABOUT THE APP</span></h5>
                <p>I created this app because I am currently in an intense bootcamp, and time is precious, so let's make the most of it!  Also, during COVID, the world has changed: it only takes 3 weeks to create a new habit, so let's start new routines, quit bad routines, and do things that make us feel good!!  This app is chock full of suggestions to help better our lives!!</p>
                <p>Click below and start your new habits!</p>
              <Link to ="/landing"> <button>Add Habits</button></Link> 
            </div>
        </div>
    )
}

export default landing