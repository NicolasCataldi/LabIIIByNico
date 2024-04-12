import React from 'react'
import FamilyMember from './FamilyMember'

function Family({persons}) {
  return (
    <div>
      {persons.map((person) => (<FamilyMember name={person.name} age={person.age}/>))}
    </div>
  )
}

export default Family
