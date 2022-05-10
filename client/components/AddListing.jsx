import React, { useState } from 'react'
import { addListing } from '../apis/food'
import { useNavigate } from 'react-router'

import { useSelector } from 'react-redux'

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

  function changeHandler (evt) {
    setNewItem({
      ...newItem,
      [evt.target.id]: evt.target.value
    })
  }

  function submitHandler (evt) {
    evt.preventDefault()
    addListing(newItem)
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
    <div className='add-form-container'>
      <form className='add-form' onSubmit={submitHandler}>
        <h1>What would you like to contribute?</h1>
        <div>
          <h2>Food</h2>
          <label>
            <input className='text-fields' type='text' id='title' name='title' value={newItem.title} onChange={changeHandler} placeholder='Food name'></input>
          </label>
        </div>
        <div>
          <h2>Category</h2>
          <label>
            <input className='text-fields' type='text' id='category' name='category' value={newItem.category} onChange={changeHandler} placeholder='Fruit, Meat, Veges...'></input>
          </label>
        </div>
        <div>
          <h2>Images</h2>
          <label>
            <input className='text-fields' type='text' id='image' name='image' value={newItem.image} onChange={changeHandler} placeholder='Add a link to a jpg, jpeg or png.'></input>
          </label>
        </div>
        <div>
          <h2>Expiry Date</h2>
          <label>
            <input className='text-fields' type='text' id='expiry_date' name='expiry_date' value={newItem.expiry_date} onChange={changeHandler} placeholder='dd/mm/yyyy'></input>
          </label>
        </div>
        <div>
          <h2>Location</h2>
          <label>
            <input className='text-fields' type='text' id='location' name='location' value={newItem.location} onChange={changeHandler} placeholder='Wellington, Auckland...'></input>
          </label>
        </div>
        <div>
          <h2>Description</h2>
          <label>
            <input className='text-fields' type='text' id='description' name='description' value={newItem.description} onChange={changeHandler} placeholder="Amount, type and/or availability times"></input>
          </label>
        </div>
        <br/>
        <input className='add-form-btn' type="submit" value='Share!' />
        <br/>
      </form>
    </div>
  )
}

export default CreateListing
