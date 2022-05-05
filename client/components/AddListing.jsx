import React, { useState } from 'react'
import { addListing } from '../apis/food'
import { addNewListing } from '../actions/listings'
import { useNavigate } from 'react-router'
const { useDispatch, useSelector } = require('react-redux')
// import action here

// Where users go to post food items the have

function CreateListing () {
  const navigateTo = useNavigate()
  const user = useSelector(state => state.auth.user)

  const [newItem, setNewItem] = useState({
    title: '',
    category: '',
    image: '',
    expiry_date: '',
    location: '',
    description: '',
    users_id: user.id
  })

  const dispatch = useDispatch()

  // need to add changeHandler functionality
  function changeHandler (evt) {
    setNewItem({
      ...newItem,
      [evt.target.id]: evt.target.value // double check these targets
    })
    // console.log(newItem)
  }

  // add submit functionality what to dispatch etc.
  function submitHandler (evt) {
    evt.preventDefault()

    // console.log(newItem)
    addListing(newItem) // api to write to db
    dispatch(addNewListing(newItem)) // we add the action here? --> redux - thunk so that it displays fast.
    setNewItem({
      title: '',
      category: '',
      image: '',
      expiry_date: '',
      location: '',
      description: '',
      users_id: user.id
    })
    navigateTo('/listings')
  }

  return (
    <>

      <form onSubmit={submitHandler}>

        <h3>What food do you have?</h3>

        <label>
          <input type='text' id='title' name='title' value={newItem.title} onChange={changeHandler} placeholder='Food item'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='category' name='category' value={newItem.category} onChange={changeHandler} placeholder='Category'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='image' name='image' value={newItem.quantity} onChange={changeHandler} placeholder='Please upload a link for an image of your food'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='expiry_date' name='expiry_date' value={newItem.expiry_date} onChange={changeHandler} placeholder='Expiry'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='location' name='location' value={newItem.location} onChange={changeHandler} placeholder='Location'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='description' name='description' value={newItem.description} onChange={changeHandler} placeholder="Description of food. Don't forget to add your number!"></input>
        </label>
        <br /> <br />
        <input type="submit" value='Submit' />

      </form>

    </>
  )
}

export default CreateListing
