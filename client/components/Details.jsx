import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { thunkingAllComments } from '../actions/comments'
import { deleteListing } from '../apis/deleteListing'

import Comment from './Comment'
import AddComment from './AddComment'
import  Map from './Map'



function Details () {
  const { id } = useParams()
  const { state } = useLocation()
  const food = state.food
  const [button, setButton] = useState(false)

  const dispatch = useDispatch()
  const navigateTo = useNavigate()

  const user = useSelector(state => state.auth.user)
  const comments = useSelector(state => state.comments)
  const reversedComments = [...comments].reverse()

  useEffect(() => {
    dispatch(thunkingAllComments(id))
  }, [])

  useEffect(() => {
    (food?.userId === user?.id) ? setButton(true) : setButton(false)
  }, [])

  const clickHandler = (e) => {
    e.preventDefault()
    navigateTo('/listings')
    deleteListing(food)
  }

  return (
    <>
      <div className='details-main'>
        <div className='details-container'>
          <div>
            <img className="details-image" src={food?.image}/>
            <Map/>
          </div>
          <div className='details-content'>
            <h1 className='details-title'>{food?.title}</h1>
            <p className='details-description'>{food?.description}</p>
            <p className='details-expiry'>{food?.expiry_date}</p>
            <p className='details-phone'>{food?.phone}</p>
          </div>
         
        </div>

        <div className='bubble-container'>
          <AddComment/>
          {reversedComments.map((comment, index) => <Comment {...comment} key={index}/>)}
        </div>
      </div>

      {
          food?.userId === user.id
            ? <div className='del-but-cont' >
              <button className="delete-button"onClick={clickHandler}>Delete Listing</button>
            </div>
            : <div className='go-back'>
              
            </div>
        }

    </>
  )
}

export default Details
