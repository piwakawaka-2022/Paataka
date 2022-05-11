import React, { useState } from 'react'
import { addComment } from '../apis/comments'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { thunkingAllComments } from '../actions/comments'

function AddComment () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const user = useSelector(state => state.auth.user)
  const [newComment, setNewComment] = useState('')

  function changeHandler (e) {
    setNewComment(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const comment = { comment: newComment, userId: user.id ? user.id : 2, listingId: id }
    await addComment(comment)
    dispatch(thunkingAllComments(id))
    setNewComment('')
  }

  return (
    <div className='addcom' >
      <form onSubmit={submitHandler}>
        <textarea id="comment" name="comment"onChange={changeHandler} value={newComment} placeholder=' Comment'></textarea>
        <button className='addcombtn'>Add Comment!</button>
      </form>
    </div>
  )
}

export default AddComment
