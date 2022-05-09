import React, { useState } from 'react'
import { getOnelisting } from '../apis/food'
import { useParams } from 'react-router-dom'
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
    <>
      <div>
        {/* redirect back to listings */}
        <button>GO BACK</button>
      </div>
      <div>
        <img src={food?.image}/>
        <div>
          {/* <img>user info</img> */}
          <h1> {food?.title} </h1>
          <p> {food?.description} </p>
          <p> {food?.expiry_date} </p>
          <p> {food?.phone} </p>
          {/* <Comments /> */}
        </div>
      </div>
    </>

  )
}
// }

export default Details
