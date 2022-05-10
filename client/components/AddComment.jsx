import React, { useState, useEffect } from 'react'
import { addComment } from '../apis/comments'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { thunkingAllComments } from '../actions/comments'

function AddComment () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const [newComment, setNewComment] = useState('')

  function changeHandler (e) {
    setNewComment(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const comment = { comment: newComment, userId: user.id, listingId: id }
    await addComment(comment)
    dispatch(thunkingAllComments(id))
    setNewComment('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <textarea id="comment" name="comment"onChange={changeHandler} value={newComment} placeholder='Comment' ></textarea>
        <br />
        <button>Add Comment!</button>
      </form>
    </div>
  )
}

export default AddComment
