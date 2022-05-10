import React, { useState, useEffect } from 'react'
import { addComment } from '../apis/comments'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { thunkingAllComments } from '../actions/comments'

function AddComment () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
<<<<<<< HEAD
  const [newComment, setNewComment] = useState({ comment: '', userId: user.id, listingId: id })

  useEffect(() => {
    setNewComment({ comment: '', userId: user.id, listingId: id })
  }, [user])

||||||| 2547479
  const [newComment, setNewComment] = useState({ comment: '', userId: user.id, listingId: id })
  

  useEffect(() => {
    setNewComment({ comment: '', userId: user.id, listingId: id })
  }, [user])

  console.log(newComment)

=======
  const [newComment, setNewComment] = useState('')

>>>>>>> 949537741a94c25c652b3eaea9ee8f0fe14971a7
  function changeHandler (e) {
    setNewComment(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
<<<<<<< HEAD
    addComment(newComment)
    console.log(newComment)
    dispatch(thunkingAllComments(id))
    setNewComment({ comment: '', userId: user.userId, listingId: id })
||||||| 2547479
    addComment(newComment)
    console.log(newComment)
    setNewComment({ comment: '', userId: user.userId, listingId: id })
=======
    const comment = { comment: newComment, userId: user.id, listingId: id }
    await addComment(comment)
    dispatch(thunkingAllComments(id))
    setNewComment('')
>>>>>>> 949537741a94c25c652b3eaea9ee8f0fe14971a7
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
