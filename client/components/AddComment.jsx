import React, { useState } from 'react'
import { addComment } from '../apis/comments'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function AddComment () {
  const { id } = useParams()
  const user = useSelector(state => state.auth.user)
  console.log(user)
  const [newComment, setNewComment] = useState({ comment: '', userId: user.id, listingId: id })

  console.log(newComment)

  function changeHandler (e) {
    setNewComment({
      ...newComment,
      [e.target.id]: e.target.value
    })
  }

  function submitHandler (e) {
    e.preventDefault()
    addComment(newComment)
    console.log(newComment)
    setNewComment({ comment: '', userId: user.userId, listingId: id })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <textarea id="comment" name="comment"onChange={changeHandler} value={newComment.comment} placeholder='Comments' ></textarea>
        <button>Add Comment!</button>
      </form>
    </div>
  )
}

export default AddComment
