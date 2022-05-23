import React from 'react'

function User(props) {
    console.log(props.userData)
  return (
      <div>
           <span className="name">{props.userData.name}</span>
            <span className="handle">{props.userData.handle}</span>
    </div>
  )
}

export default User