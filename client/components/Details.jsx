import React, { useState, useEffect } from 'react'
import { getOnelisting } from '../apis/food'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { loginError } from '../actions/auth'
import { thunkingAllComments } from '../actions/comments'
import { deleteListing } from '../apis/deleteListing'

import Comment from './Comment'
import AddComment from './AddComment'

function Details () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [food, setFood] = useState(undefined)
  const comments = useSelector(state => state.comments)
  const navigateTo = useNavigate()
  // const [comments, setComments] = useState([])

  useEffect(() => {
    getOnelisting(id)
      .then(food => setFood(food))
      .catch(err => {
        dispatch(loginError(err))
      })
  }, [])

  // const commentsOnLoad = async (id) => {
  //   const comments = await getListingComments(id)
  //   setComments(comments)
  // }

  useEffect(() => {
    dispatch(thunkingAllComments(id))
  }, [])

  // comments

  const clickHandler = (e) => {
    e.preventDefault()
    navigateTo('/listings')
    deleteListing(food)
  }

  return (

    <div className='details-main'>
      <div className='go-back'>
        {/* redirect back to listings */}
        <Link to="/listings">
          <button className='go-back-button'>Back to Listings</button>
        </Link>
        <button onClick={clickHandler}>Delete</button>
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

          <p className='details-expiry'> {food?.expiry_date} </p>
          <p className='details-phone'> {food?.phone} </p>

          {comments.map((comment, index) => <Comment {...comment} key={index}/>)}
          <AddComment/>
        </div>
      </div>
    </div>

  )
}

export default Details
