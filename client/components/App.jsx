import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import LandingPage from './LandingPage'
import AddListing from './AddListing'

import { checkAuth } from '../actions/auth'
import Listings from './Listings'

function App () {
  const auth = useSelector(reduxState => reduxState.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <div className="container has-text-centered">

      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">Pātaka</h1>
          </Link>
          <Nav />
          {/* <LandingPage/> */}
          {/* <AddListing /> */}
        </div>
      </div>

      <div className=''>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />}/>
          {!auth.isAuthenticated && <Route path="/register" element={<Register />} />}
          <Route path="/AddListing" element={<AddListing />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
