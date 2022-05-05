import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

function Nav () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(redux => redux.auth)

  // const [burgerVisible, setBurgerVisible] = useState(false)

  // const toggleBurger = () => {
  //   setBurgerVisible(currentBurgerState => !currentBurgerState)
  // }

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return <nav className="navbar">
    <div className="container">
      <div className="navbar-end">
        {auth.isAuthenticated ? (
          <div className="nav-container">
            <div className="pataka">Pātaka</div>
            <Link to='/' onClick={() => logout()}>Logout</Link>
            <Link className="clickies" to='listings'>Listings</Link>
            <Link className="clickies" to='addListing'>Add Food</Link>
          </div>
        )
          : (
            <div className="nav-container">
              <div className="pataka" >Pātaka</div>
              <Link className="clickies" to='login'>Login</Link>
              <Link className="clickies" to='listings'>Listings</Link>
            </div>
          )
        }
      </div>
    </div>
  </nav>
}

export default Nav
