import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

function Nav () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(redux => redux.auth)

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (<nav className="navbar">
    <div className="container">
      <div className="navbar-end">
        {auth.isAuthenticated
          ? (
            <div className="nav-container">
              <Link to='/' className="pataka">Pātaka</Link>
              <div className='space'></div>
              <Link className="clickies" to='listings'>Listings</Link>
              <Link className="clickies" to='AddListing'>Add Food</Link>
              <Link className="clickies" to='/' onClick={() => logout()}>Logout</Link>
            </div>
          )
          : (
            <div className="nav-container">
              <Link to='/' className="pataka">Pātaka</Link>
              <div className='space'></div>
              <Link className="clickies" to="login">
                Login
              </Link>
              <Link className="clickies" to="listings">
                Listings
              </Link>
              {/* <Link className="clickies" to='register'>Register</Link> */}
            </div>
          )
        }
      </div>
    </div>
  </nav>
  )
}

export default Nav
