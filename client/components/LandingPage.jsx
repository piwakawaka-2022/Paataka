import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function LandingPage () {
  const auth = useSelector(redux => redux.auth)

  return (
    <>
      <div className="section">
        <div className='welcome-banner'>
          <div className="title-container">
            <h1 className="hometitle">Nau mai haere mai, ki te Pātaka kai!</h1>
            <h2>Welcome to Pātaka, your local food pantry, connecting those who need with those who have.</h2>
          </div>
          <div className='buttonscontainer'>
            {
              auth.isAuthenticated
                ? <Link to="/AddListing">
                  <button className='button'><img src='images/got-food.png'/>Add Food</button>
                </Link>
                : <Link to="/login">
                  <button className='button'><img src='images/got-food.png'/>Add Food</button>
                </Link>
            }
            <Link to="/listings">
              <button className='button'><img src='images/need-food.png'/>Search Food</button>
            </Link>
          </div>
        </div>
        <div className="values-section">
          <h1>- Kaupapa -</h1>
          <div className="values-container">
            <div className="col three">
              <div className="imgholder">
                <img src="images/Manaakitanga-social-image-on.2e16d0ba.fill-1200x628-c100.jpg"/>
              </div>
              <h1 className="feature">Manākitanga</h1>
              <p>Access to food is a basic human right. Pātaka looks to redistribute access to food, addressing food inequality.</p>
            </div>

            <div className="col three">
              <div className="imgholder">
                <img src="images/tomatoes.jpg"/>
              </div>
              <h1 className="feature">Whanaungatanga</h1>
              <p>Pātaka brings communities closer together in ensuring access to food and reducing food waste.</p>
            </div>

            <div className="col three">
              <div className="imgholder">
                <img src="images/markus-spiske-5sh24a7m0BU-unsplash.jpg"/>
              </div>
              <h1 className="feature">Kaitiakitanga</h1>
              <p>Pātaka reduces the impact of food wastage through redirecting food bound for the dump.</p>
            </div>
          </div>
        </div>

        <div className='footer'>
          <h1 className="bottom-txt">Naku te rourou nau te rourou ka ora ai te iwi</h1>
          <h2>With your basket and my basket the people will live</h2>
        </div>
      </div>
    </>
  )
}

export default LandingPage
