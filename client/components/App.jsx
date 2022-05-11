import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { checkAuth } from '../actions/auth'

import Nav from './Nav'
import LandingPage from './LandingPage'
import Login from './Login'
import Register from './Register'
import AddListing from './AddListing'
import Listings from './Listings'
import Details from './Details'
import Footer from './Footer'

function App () {
  const auth = useSelector(reduxState => reduxState.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />}/>
        {!auth.isAuthenticated && <Route path="/register" element={<Register />} />}
        <Route path="/AddListing" element={<AddListing />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listings/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
