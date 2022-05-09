import React, { useState, useEffect } from 'react'
import { getOnelisting } from '../apis/food'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginError } from '../actions/auth'
import Comment from './Comment'
import { getListingComments } from '../apis/comments'
import AddComment from './AddComment'

function Details () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [food, setFood] = useState(undefined)
  const [comments, setComments] = useState([])
  const navigateTo = useNavigate()

  getOnelisting(id)
    .then(food => setFood(food))
    .catch(err => {
      dispatch(loginError(err))
    })

  const commentsOnLoad = async (id) => {
    const comments = await getListingComments(id)
    setComments(comments)
  }

  useEffect(() => {
    commentsOnLoad(id)
  }, [])

  function handleClick () {
    // runs a functino that naviagtes to listing/props.id
    // console.log(props.listingId)
    navigateTo(`/comment/${id}`)
  }

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

         
          {comments.map((comment, index) => <Comment {...comment} key={index}/>)}
          <button onClick={handleClick}>Add Comment</button>
        </div>
      </div>
    </div>

  )
}
// }

export default Details
