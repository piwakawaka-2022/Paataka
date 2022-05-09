import React, { useState } from 'react'
import { getOnelisting } from '../apis/food'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginError } from '../actions/auth'
import Comments from './Comments'

function Details () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [food, setFood] = useState(undefined)
  getOnelisting(id)
    .then(food => setFood(food))
    .catch(err => {
      dispatch(loginError(err))
    })

  return (

    <div className='details-main'>
      <div className='go-back'>
        {/* redirect back to listings */}
        <Link to="/listings"><button>Back to Listings</button></Link>
      </div>
      <div className='details-container'>
        <div>
          <img className="details-image" src={food?.image}/>
        </div>
        <div className='details-content'>
          {/* <img>user info</img> */}
          <h1 className='details-title'> {food?.title} </h1>
          <p className='details-description'> {food?.description} </p>
          <p className='details-expiry'> {food?.expiry_date} </p>
          <p className='details-phone'> {food?.phone} </p>
          {/* <Comments /> */}
        </div>
      </div>
    </div>

  )
}
// }

export default Details
