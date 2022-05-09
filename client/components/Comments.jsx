import React from 'react'

import Comment from './Comment'

function Comments () {
  return (
    <div>
      {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
    </div>
  )
}

export default Comments
