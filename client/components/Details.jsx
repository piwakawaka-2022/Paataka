import React, { useState, useEffect } from 'react'
import { getOnelisting } from '../apis/food'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loginError } from '../actions/auth'
import Comment from './Comment'
import { getListingComments } from '../apis/comments'
import AddComment from './AddComment'
import { thunkingAllComments } from '../actions/comments'

function Details () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)
  const [food, setFood] = useState(undefined)
  // const [comments, setComments] = useState([])
  const navigateTo = useNavigate()

  getOnelisting(id)
    .then(food => setFood(food))
    .catch(err => {
      dispatch(loginError(err))
    })

  // const commentsOnLoad = async (id) => {
  //   const comments = await getListingComments(id)
  //   setComments(comments)
  // }

  const getComments = (id) => {
    dispatch(thunkingAllComments(id))
  }

  useEffect(() => {
    getComments(id)
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
        <Link to="/listings">
          <button className='go-back-button'>Back to Listings</button>
        </Link>

      </div>
      <div className='details-container'>
        <div>
          <img className="details-image" src={food?.image}/>
        </div>
        <div className='details-content'>
          {/* <img>user info</img> */}
          <h1 className='details-title'> {food?.title} </h1>
          <p className='details-description'> {food?.description} </p>
          <p className='details-expiry'> <em>Expiry:</em> {food?.expiry_date} </p>
          <p className='details-phone'> <em>{food?.username} :</em> {food?.phone} </p>
          {/* <Comments /> */}

          {comments.map((comment, index) => <Comment {...comment} key={index}/>)}
          <AddComment />
        </div>
      </div>
    </div>

  )
}
// }

export default Details
