import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Register from './Register'
import { loginUser } from '../actions/auth'

function Login () {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(redux => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = formData
    const confirmSuccess = () => navigateTo('/')
    dispatch(loginUser({ username, password }, confirmSuccess))
  }

  return (
    <div className='login-register-container'>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <hr />

        {auth.errorMessage && (
          <span className="">{auth.errorMessage}</span>
        )}

        <div className='input-container'>
          <div className='username-container single-container'>
            <label className="input">
            Username
              <br />
              <input
                required
                className="input-field"
                placeholder="John Smith..."
                type="text"
                name="username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className='password-container single-container'>
            <label className="input">
            Password
              <br />
              <input
                required
                className="input-field"
                placeholder=""
                type="password"
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          
          <div className='submit-container single-container'>
            <input
              className="submit-button"
              value="Login"
              type="submit"
            />
          </div>

        </div>

      </form>
      {!auth.isAuthenticated && <Register />}
    </div>
  )
}

export default Login
