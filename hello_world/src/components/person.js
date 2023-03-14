import React from 'react'

function person({person}) {
  return (
    <div>
      <h3>I m {person.name} and age: {person.age} i know {person.skills}</h3>
    </div>
  )
}

export default person
