import React from 'react'
import {Link } from "react-router-dom";

function LandingPage () {

    return (
        <div className="home-main-div">
    <h1>Nau mai, haere mai ki a Pātaka!</h1>
    <div className='home-container'></div>
    <div className='home-values'>
        <p>Our values go here</p>
    </div>
    <div className='home-facts'>
        <div className='fact1'>Fact 1</div>
        <div className='fact2'>Fact 2</div>
        <div className='fact3'>Fact 3</div>
    </div>
    
    <Link to="/AddListings"><button>
              Got food?
            </button>
            </Link>

            <Link to="/Listings"><button>
              Need food?
            </button>
            </Link>
        </div>
      )
}




export default LandingPage

