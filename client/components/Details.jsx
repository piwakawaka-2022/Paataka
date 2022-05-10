import React, { useEffect } from 'react'
// import { getOnelisting } from '../apis/food'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
// import { loginError } from '../actions/auth'
import { thunkingAllComments } from '../actions/comments'
import { deleteListing } from '../apis/deleteListing'

import Comment from './Comment'
import AddComment from './AddComment'

function Details () {
  const { id } = useParams()
  const dispatch = useDispatch()
  // const [food, setFood] = useState(undefined)
  const comments = useSelector(state => state.comments)
  // const [food, setFood] = useState(undefined)
  const user = useSelector(state => state.auth.user)
  const navigateTo = useNavigate()
  // const [comments, setComments] = useState([])
  const { state } = useLocation()
  const food = state?.food

  useEffect(() => {
    // getOnelisting(id)
    //   .then(food => setFood(food))
    //   .catch(err => {
    //     dispatch(loginError(err))
    //   })
    dispatch(thunkingAllComments(id))
  }, [])

  // const commentsOnLoad = async (id) => {
  //   const comments = await getListingComments(id)
  //   setComments(comments)
  // }

  const reversedComments = [...comments].reverse()

  // useEffect(() => {

  // }, [])

  // comments

  const clickHandler = (e) => {
    e.preventDefault()
    navigateTo('/listings')
    deleteListing(food)
  }

  return (
    <>

      <div className='details-main'>

        {/* redirect back to listings */}

        {
          food?.userId === user.id
            ? <div className='go-back'>
              <Link to="/listings">
                <button className='go-back-button'>Back to Listings</button>
              </Link>
              <button onClick={clickHandler}>Delete</button>
            </div>
            : <div className='go-back'>
              <Link to="/listings">
                <button className='go-back-button'>Back to Listings</button>
              </Link>
            </div>
        }

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
          </div>
        </div>

        <div className='bubble-container'>
          <AddComment/>
          {reversedComments.map((comment, index) => <Comment {...comment} key={index}/>)}
        </div>

      </div>

    </>
  )
}

export default Details
