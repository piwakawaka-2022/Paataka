import React, { useState } from "react"
const { useDispatch } = require("react-redux")
// import action here


// Where users go to post food items the have

function CreateListing () {

  const [newItem, setNewItem] = useState ({
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

  }

  // add submit functionality what to dispatch etc.
  function submitHandler (evt) {

  }

  return (
    <>
    
    <form onSubmit={submitHandler}>

      <h3>What food do you have?</h3>

      <label>
        <input type='text' id='name' name='name' value={newItem.name} onChange={changeHandler}></input>
      </label>

      <label>
        <input type='text' id='category' name='category' value={newItem.category} onChange={changeHandler}></input>
      </label>

      <label>
        <input type='text' id='quantity' name='quantity' value={newItem.quantity} onChange={changeHandler}></input>
      </label>

      <label>
        <input type='text' id='expiry' name='expiry' value={newItem.expiry} onChange={changeHandler}></input>
      </label>

      <label>
        <input type='text' id='location' name='location' value={newItem.location} onChange={changeHandler}></input>
      </label>

      <label>
        <input type='text' id='contact' name='contact' value={newItem.contact} onChange={changeHandler}></input>
      </label>

      <input type="submit" value='Submit' />

    </form>

    </>
  )

}

export default CreateListing