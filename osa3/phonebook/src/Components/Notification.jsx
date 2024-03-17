import React from 'react'

const Notification = ({notification, notificationType}) => {
  if(notification === null) {
    return null
  }
  return (
    <div className={notificationType}>
      <p>{notification}</p>
    </div>
  )
}

export default Notification
