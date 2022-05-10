import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { loginError, registerUserRequest } from '../actions/auth'

function Register () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(redux => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: ''
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    console.log('form submitted!')
    e.preventDefault()
    e.target.reset()
    const { username, password, confirm_password, name, email, phone } = formData
    if (confirm_password != password) return dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => navigateTo('/')
    dispatch(registerUserRequest({ username, password, confirm_password, name, email, phone }, confirmSuccess))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="">Register</h1>
      <hr />
      
      {auth.errorMessage && (
        <span className="">{auth.errorMessage}</span>
      )}

      <div className='register-full-container'>
        <div className='register-2-container'>
          

        <label className="register-input">
          Username
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
        <label className="register-input">
          Name
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

        <br />

        <div className='register-2-container'>
        <label className="register-input">
          Email
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
        <label className="register-input">
          Phone
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
        <input className="register-submit-button" value="Register" type="submit" />
        </div>

        <br />

        <div className='register-2-container'>
        <label className="register-input">
          Password
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
        <label className="register-input">
          Confirm Password
          <input
            required
            className="input-field"
            placeholder=""
            type="password"
            name="confirm_password"
            autoComplete="new-password"
            onChange={handleChange}
            value={formData.confirm_password}
          />
        </label>
        </div>

      </div>
    </form>
  )
}

export default Register
