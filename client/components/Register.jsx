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
    confirmPassword: ''
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
    const { username, password, confirmPassword, name, email, phone } = formData
    if (confirmPassword !== password) return dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => navigateTo('/')
    dispatch(registerUserRequest({ username, password, confirmPassword, name, email, phone }, confirmSuccess))
  }

  return (
    <form className="Register form box" onSubmit={handleSubmit}>
      <h1 className="title is-2">Register</h1>
      <hr />
      {auth.errorMessage && (
        <span className="has-text-danger is-large">{auth.errorMessage}</span>
      )}
      <label>
        Username
        <input
          required
          placeholder="User Name"
          type="text"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          value={formData.username}
        />
      </label>
      <label>
        Name
        <input
          required
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <label>
        Email
        <input
          required
          placeholder="Email"
          type="text"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>
      <label>
        Phone
        <input
          required
          placeholder="Phone"
          type="text"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
      </label>
      <label>
        Password
        <input
          required
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={handleChange}
          value={formData.password}
        />
      </label>
      <label>
        Confirm Password
        <input
          required
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
      </label>
      <input value="Register" type="submit" />
    </form>
  )
}

export default Register
