import React, { useState } from 'react'
import { addComment } from '../apis/comments'
import {useSelector} from 'react-redux'

function Comment () {
  const user = useSelector(state => state.listings)
  console.log(user)
  const [newComment, setNewComment] = useState({ comment: '', user: user.name })

  function changeHandler (e) {
    setNewComment({
      ...newComment,
      [e.target.id]: e.target.value
    })
  }

  function submitHandler (e) {
    e.preventDefault()
    addComment(newComment)
    setNewComment()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <textarea id="commentText" onChange={changeHandler} value={newComment.comment} placeholder='Comments' ></textarea>
      </form>
    </div>
  )
}

export default Comment