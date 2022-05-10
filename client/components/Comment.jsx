import React from 'react'
// import TimeAgo from 'javascript-time-ago'
// import en from 'javascript-time-ago/locale/en.json'

function Comment (props) {
  // TimeAgo.addDefaultLocale(en)
  // const timeAgo = new TimeAgo('en-US')
  // timeAgo.format(props.dateCreated)

  const date = new Date(props.dateCreated)
  console.log(date)
  return (
    <div className='bubble'>
      <div className='bubble-content'>
        <div className='bubble-title'>{props.name} • {date}</div>
        <p>{props.comment}</p>
      </div>
    </div>

  )
}

export default Comment
