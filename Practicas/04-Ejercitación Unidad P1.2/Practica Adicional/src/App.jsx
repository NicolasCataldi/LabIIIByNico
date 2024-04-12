import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Persons from './components/Persons'
import Family from './components/Family'

function App() {

  //Primer ejercicio
  const products = ["table","couch","chair1","chair2"]

  //Segundo ejercicio
  const names = ["Parker","Simmons","Lewis","Poe"];

  //Tercer ejercicio
  const persons = [
    { name: "Juan", age: 26 },
    { name: "Gabriel", age: 27 },
    { name: "Valentina", age: 22 },
    { name: "Paula", age: 25 },
    { name: "Andrés", age: 20 }
  ];

  return (
    <>
     <p style={{ color: "orange", fontSize: "1.6rem"}}>Primer Ejercicio</p>
     <Products products={products}/>
     <hr />

     <p style={{ color: "crimson", fontSize: "1.6rem"}}>Segundo Ejercicio</p>
     <Persons names={names}/>
     <hr />

     <p style={{ color: "violet", fontSize: "1.6rem"}}>Tercer Ejercicio</p>
     <Family persons={persons.sort((a, b) => a.age - b.age)}/>
     <hr />
    </>
  )
}

export default App
