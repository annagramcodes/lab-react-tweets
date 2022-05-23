import React from 'react'

function Timestamps(props) {
  const { time } = props;

  return (
    <span className="timestamp">{time}</span>
  )
}

export default Timestamps