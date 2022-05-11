import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { loginError, registerUserRequest } from '../actions/auth'

function Register () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    e.target.reset()
    const { username, password, confirmPassword, name, email, phone } = formData

    if (confirmPassword !== password) return dispatch(loginError("Passwords don't match"))

    const confirmSuccess = () => navigateTo('/')
    dispatch(registerUserRequest({ username, password, confirmPassword, name, email, phone }, confirmSuccess))
  }

  return (
    <form className="form" onSubmit={handleRegister}>
      <h1>Register</h1>
      <div className='input-container'>
        <div className='single-container'>
          <label className="input">
              Username
            <br/>
            <input
              required
              className="input-field"
              placeholder="Smithjohn..."
              type="text"
              name="username"
              autoComplete="username"
              onChange={handleChange}
              value={formData.username}
            />
          </label>
        </div>
        <div className='single-container'>
          <label className="input">
            Name
            <br/>
            <input
              required
              className="input-field"
              placeholder="John Smith..."
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
        </div>
      </div>
      <br />
      <div className='input-container'>
        <div className='single-container'>
          <label className="input">
          Email
            <br/>
            <input
              required
              className="input-field"
              placeholder="john_smith@email.com..."
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
        </div>
        <div className='single-container'>
          <label className="input">
          Phone
            <br/>
            <input
              required
              className="input-field"
              placeholder="027..."
              type="text"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
          </label>
        </div>
      </div>
      <br />
      <div className='input-container'>
        <div className='single-container'>
          <label className="input">
          Password
            <br/>
            <input
              required
              className="input-field"
              placeholder=""
              type="password"
              name="password"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>
        </div>
        <div className='single-container'>
          <label className="input">
          Confirm Password
            <br/>
            <input
              required
              className="input-field"
              placeholder=""
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </label>
        </div>
        <div className='submit-container single-container'>
          <button className="submit-button" value="Register" type="submit">Register</button>
        </div>
      </div>
    </form>
  )
}

export default Register
