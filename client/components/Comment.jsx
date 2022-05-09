import React from 'react'

function Comment (props) {
  return (
    <div>
      <p>Name: {props.name}</p> <br /><p>{props.comment}</p>
    </div>
  )
}

export default Comment
