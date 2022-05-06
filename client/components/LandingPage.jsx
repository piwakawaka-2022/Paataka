import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage () {
  return (
    <div className="homemaindiv">
      <div className="section">
        <div className="slider">
          <div className="container slidercontent">
            <h1 className="hometitle">Nau mai haere mai, ki a Pātaka kai! </h1>
            <h2 className="hero">Welcome to the local food pantry</h2>
          </div>
        </div>
      </div>

      <div className="section bg">
        <div className="container">
          <h1>Access to healthy food is a basic human right</h1>
          <h2>Pātaka helps redistribute access to healthy food</h2>
          <div className="col three bg nopad pointer">
            <div className="imgholder"></div>
            <h1 className="feature">Whakawhanaungatanga</h1>
            <p>
                Bringing communities together through the redistribution of kai
            </p>
          </div>
          <div className="col three bg nopad pointer">
            <div className="imgholder"></div>
            <h1 className="feature">Manaakitanga</h1>
            <p>Sharing is caring</p>
          </div>
          <div className="col three bg nopad pointer">
            <div className="imgholder"></div>
            <h1 className="feature">Kaitiakitanga</h1>
            <p>Reducing food waste and the impact this has on our climate</p>
          </div>
        </div>
      </div>

      {/* <h1>Nau mai, haere mai ki a Pātaka!</h1>
    <div className='homecontainer'></div>
    <div className='homevalues'>
        <p>Main home value greeting</p>
      </div>
      <div className='homefacts'>
        <div className='fact1'>There is enough food produced in the world to feed every living human.</div>
        <div className='fact2'>New Zealand households throw away 157,389 tonnes of food a year. </div>
        <div className='fact3'>We throw away 29 million loaves of bread a year! Nearly one-third of the food we waste is vegetables.</div>
    </div> */}

      <div className="buttonscontainer">
        <Link to="/AddListing">
          <button className="gotfood">Got food?</button>
        </Link>

        <Link to="/Listings">
          <button className="needfood">Need food?</button>
        </Link>
      </div>

      <div className="footer">
        <div className="container white">
          <div className="col four left">
            <h1>What?</h1>
            <p>
                Food always tastes better when you share it with someone - Josh
                Connecting communities (whanaungitanga) through tackling food
                inequality Reducing waste/environmental impact of wasted food
                (Kaitiakitanga) - Luke{' '}
            </p>
          </div>
          <div className="col four left">
            <h1>How?</h1>
            <p></p>
          </div>
          <div className="col four left"></div>
          <div className="col four left">
            <h1>Who?</h1>
          </div>

          <div className="col four left">
            <h1>Wtf?</h1>
          </div>

          <div className="group"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
