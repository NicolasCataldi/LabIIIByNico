import React from 'react'
import Person from './Person'

function Persons({names}) {
  return (
    <div>
      {names.filter((name) => name[0] === "P").map((name) => (<Person name={name}/>))}
    </div>
  )
}

export default Persons
