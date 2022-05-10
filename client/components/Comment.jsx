import React from 'react'

function Comment (props) {
  return (
    <div className='bubble'>
      <div className='bubble-content'>
        <div className='bubble-title'>{props.name} • {props.dateCreated}</div>
        <p>{props.comment}</p>
      </div>
    </div>

  )
}

export default Comment
