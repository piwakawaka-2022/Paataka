import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
function Comment (props) {
  TimeAgo.addLocale(en)
  const timeAgo = new TimeAgo('en-US')
 console.log(props.dateCreated)
  const date = new Date(props.dateCreated)
  console.log(new Date())
  console.log(date)
  const timeSince = timeAgo.format(date)
  return (
    <div className='bubble'>
      <div className='bubble-content'>
        <div className='bubble-title'>
          {props.name} • {timeSince}
        </div>
        <p>{props.comment}</p>
      </div>
    </div>

  )
}

export default Comment
