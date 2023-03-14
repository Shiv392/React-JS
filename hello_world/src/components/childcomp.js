import React from 'react'

function childcomp(props) {
  return (
    <div>
      <button onClick={()=>{props.greetHandler('child text')}}>Greet Parent</button>
    </div>
  )
}

export default childcomp

