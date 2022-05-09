import React from 'react'
import { Link } from 'react-router-dom'
import { getAllComments } from '../apis/comments'
import { useSelector } from 'react-redux'

function LandingPage () {
  const auth = useSelector(redux => redux.auth)

  return (
    <>
      <div className="homemaindiv">
        <div className="section">
          <div className="slider">
            <div className="container slidercontent">
              <h1 className="hometitle">Nau mai haere mai, ki a Pātaka kai! </h1>
              <h2 className="hero">Welcome to the local food pantry</h2>
            </div>
          </div>

        </div>
      </div>

      <div className='buttonscontainer'>
        {auth.isAuthenticated
          ? <Link to="/AddListing">
            <button className='gotfood'>Got food?</button>
          </Link>
          : <Link to="/login">
            <button className='gotfood'>Got food?</button>
          </Link>
        }
        <Link to="/Listings">
          <button className='needfood'>Need food?</button>
        </Link>
      </div>

      <div className="section bg">
        <div className="container">

          <div className="col three bg nopad pointer">
            <div className="imgholder">
              <img className="imgholder" src="community.jpg"/>
            </div>
            <h1 className="feature">Pātaka is bringing communities together through the redistribution of kai</h1>
            <p></p>
          </div>

          <div className="col three bg nopad pointer">
            <div className="imgholder">
              <img className="imgholder" src="tomatoes.jpg"/>
            </div>
            <h1 className="feature">There is enough food in the world to feed every single fucking person</h1>
            <p></p>
          </div>

          <div className="col three bg nopad pointer">
            <div className="imgholder">
              <img className="imgholder" src="food-waste.jpg"/>
            </div>
            <h1 className="feature">Reducing food waste and the impact this has on our climate</h1>
            <p></p>
          </div>

        </div>
      </div>

      <div>
        <h1>Naku te rourou nau te rourou ka ora ai te iwi</h1>
        <h2>With your basket and my basket the people will live</h2>

      </div>
    </>
  )
}

export default LandingPage
