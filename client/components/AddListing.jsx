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
      <form className='form' onSubmit={submitHandler}>
        <h1>What would you like to contribute?</h1>
        <hr />
        <div className='input-container'> 
          <div className='single-container'>
            <label className='input'>
              Food
              <br/>
              <input required className='input-field' type='text' id='title' name='title' value={newItem.title} onChange={changeHandler} placeholder='Food name' />
            </label>
          </div>
          <div className='single-container'>
            <label className='input'>
              Category
              <br/>
              <input className='input-field' type='text' id='category' name='category' value={newItem.category} onChange={changeHandler} placeholder='Fruit, Meat, Veges...' />
            </label>
          </div>
        </div>
        <br />
        <div className='input-container'>
          <div className='single-container'>
            <label className='input'>
              Image
              <br />
              <input className='input-field' type='text' id='image' name='image' value={newItem.image} onChange={changeHandler} placeholder='Add a link to a jpg, jpeg or png.' />
            </label>
          </div>
          <div className='single-container'>
            <label className='input'>
              Expiry Date
              <br />
              <input className='input-field' type='text' id='expiry_date' name='expiry_date' value={newItem.expiry_date} onChange={changeHandler} placeholder='dd/mm/yyyy' />
            </label>
          </div>
        </div>
        <br />
        <div className='input-container'>
          <div className='single-container'>
            <label className='input'>
              Location
              <br />
              <input className='input-field' type='text' id='location' name='location' value={newItem.location} onChange={changeHandler} placeholder='Wellington, Auckland...' />
            </label>
          </div>
          <div className='single-container'>
            <label className='input'>
              Description
              <br />
                <input className='input-field' type='text' id='description' name='description' value={newItem.description} onChange={changeHandler} placeholder="Amount, type and/or availability times" />
            </label>
              </div>
            <div className='submit-container single-container'>
              <button className='submit-button' type="submit" value='Share!'>Share</button>
          </div>
        </div>
      </form>
  )
}

export default CreateListing
