import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
function Comment (props) {
  TimeAgo.addLocale(en)
  const timeAgo = new TimeAgo('en-US')
  const date = new Date(props.dateCreated + ' GMT+0000')
  const datewithout = new Date(props.dateCreated)
  console.log(props.dateCreated, date, datewithout)
  const timeSince = timeAgo.format(datewithout)
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
