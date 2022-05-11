import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from './Footer'

function LandingPage () {
  const auth = useSelector(redux => redux.auth)

  return (
    <>
      <div className="section">
        <div className='welcome-banner'>
          <div className="title-container">
            <img className='basket-img' src='images/basket-food-3278455.png' alt='Paataka Kai' />
            <h1 className="hometitle">Nau mai haere mai, ki te Pātaka kai!</h1>
            <h2 className="hero">Welcome to Pātaka, your local food pantry, connecting those who need with those who have.</h2>
          </div>
          <div className='buttonscontainer'>
            {
              auth.isAuthenticated
                ? <Link to="/AddListing">
                  <button className='button got-food'><img src='images/got-food.png'/>Add Food</button>
                </Link>
                : <Link to="/login">
                  <button className='button got-food'><img src='images/got-food.png'/>Add Food</button>
                </Link>
            }
            <Link to="/listings">
              <button className='button need-food'><img src='images/need-food.png'/>Search Food</button>
            </Link>
          </div>
        </div>
        <div className="section bg">
          <div className="values-container">
            <h1>- Kaupapa -</h1>
            <div className="col three bg nopad pointer">
              <div className="imgholder">
                <img src="images/Manaakitanga-social-image-on.2e16d0ba.fill-1200x628-c100.jpg"/>
              </div>
              <h1 className="feature">Manākitanga</h1>
              <p>Access to food is a basic human right. Pātaka looks to redistribute access to food, addressing food inequality.</p>
            </div>

            <div className="col three bg nopad pointer">
              <div className="imgholder">
                <img src="images/tomatoes.jpg"/>
              </div>
              <h1 className="feature">Whanaungatanga</h1>
              <p>Pātaka brings communities closer together in ensuring access to food and reducing food waste.</p>
            </div>

            <div className="col three bg nopad pointer">
              <div className="imgholder">
                <img src="images/markus-spiske-5sh24a7m0BU-unsplash.jpg"/>
              </div>
              <h1 className="feature">Kaitiakitanga</h1>
              <p>Pātaka reduces the impact of food wastage through redirecting food bound for the dump.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
