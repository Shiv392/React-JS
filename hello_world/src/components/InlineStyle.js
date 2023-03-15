import React from 'react'

function InlineStyle() {
    let x={
        color:'Blue',
        backgroundColor:'Red'
    }
  return (
    <div>
      <h1 style={x}>this is inline styling</h1>
    </div>
  )
}

export default InlineStyle
