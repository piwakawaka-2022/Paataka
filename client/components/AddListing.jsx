import React, { useState } from 'react'
import { addListing } from '../apis/food'
const { useDispatch } = require('react-redux')
// import action here

// Where users go to post food items the have

function CreateListing () {
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    quantity: '',
    expiry: '',
    location: '',
    contact: ''
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
    addListing(newItem) // api to write to db
    dispatch() // we add the action here? --> redux - thunk so that it displays fast.
    setNewItem
  }

  return (
    <>

      <form onSubmit={submitHandler}>

        <h3>What food do you have?</h3>

        <label>
          <input type='text' id='name' name='name' value={newItem.name} onChange={changeHandler} placeholder='Food item'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='category' name='category' value={newItem.category} onChange={changeHandler} placeholder='Category'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='quantity' name='quantity' value={newItem.quantity} onChange={changeHandler} placeholder='Quantity'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='expiry' name='expiry' value={newItem.expiry} onChange={changeHandler} placeholder='Expiry'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='location' name='location' value={newItem.location} onChange={changeHandler} placeholder='Location'></input>
        </label>
        <br /> <br />
        <label>
          <input type='text' id='contact' name='contact' value={newItem.contact} onChange={changeHandler} placeholder='Contact Number'></input>
        </label>
        <br /> <br />
        <input type="submit" value='Submit' />

      </form>

    </>
  )
}

export default CreateListing
