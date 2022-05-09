import React, { useState, useEffect } from 'react'
import { getOnelisting } from '../apis/food'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginError } from '../actions/auth'
import Comments from './Comments'
import { getListingComments } from '../apis/comments'

function Details () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [food, setFood] = useState(undefined)
<<<<<<< HEAD

||||||| 14512d3
=======
  const [comments, setComments] = useState([])

>>>>>>> a8a2ab4934bc288cbb7cd8facf6d41546ad3dc8b
  getOnelisting(id)
    .then(food => setFood(food))
    .catch(err => {
      dispatch(loginError(err))
    })

<<<<<<< HEAD
  useEffect(() => {
    getListingComments(id)
  }, [])
||||||| 14512d3
  // console.log(food)
=======
  const commentsOnLoad = async (id) => {
    const comments = await getListingComments(id)
    setComments(comments)
  }

  useEffect(() => {
    commentsOnLoad(id)
  }, [])
>>>>>>> a8a2ab4934bc288cbb7cd8facf6d41546ad3dc8b

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
<<<<<<< HEAD
          <h1> {food?.title} </h1>
          <p> {food?.description} </p>
          <p> {food?.expiry_date} </p>
          <p> {food?.phone} </p>
          <Comments />
||||||| 14512d3
          <h1> {food?.title} </h1>
          <p> {food?.description} </p>
          <p> {food?.expiry_date} </p>
          <p> {food?.phone} </p>
          {/* <Comments /> */}
=======
          <h1 className='details-title'> {food?.title} </h1>
          <p className='details-description'> {food?.description} </p>
          <p className='details-expiry'> {food?.expiry_date} </p>
          <p className='details-phone'> {food?.phone} </p>
          {/* <Comments /> */}
>>>>>>> a8a2ab4934bc288cbb7cd8facf6d41546ad3dc8b
        </div>
      </div>
    </div>

  )
}
// }

export default Details
