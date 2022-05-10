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

  return (
    <>
      {
        auth.isAuthenticated ? (
          <div className="nav-container">
            <div className='nav-items'>
              <Link to='/' className="pataka">Pātaka</Link>
              <div className='nav-menu-items'>
                <Link className="clickies" to='listings'>Listings</Link>
                <Link className="clickies" to='/' onClick={() => logout()}>Logout</Link>
              </div>
            </div>
          </div>
        )
          : (
            <div className="nav-container">
              <div className='nav-items'>
                <Link to='/' className="pataka">Pātaka</Link>
                <div className='nav-menu-items'>
                  <Link className="clickies" to="login">
                Login
                  </Link>
                  <Link className="clickies" to="listings">
                Listings
                  </Link>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}

export default Nav
