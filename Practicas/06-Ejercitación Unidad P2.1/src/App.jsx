import { useState, useEffect } from 'react'
import './App.css'
import { beers } from './components/Beers'
import NewBeer from './components/NewBeer'

function App() {

  const [dollarValue, setDollarValue] = useState(900)
  const [showInput, setShowInput] = useState(false)


  return (
    <>

      {showInput === true ? (
        <div>
          <input type='number' id='dollar' placeholder='Dolar en ARS'/>
        <button onClick={() => setDollarValue(parseInt(document.getElementById("dollar").value))}>Actualizar Dolar</button>
        <br />
        <button onClick={() => setShowInput(false)}>Ocultar Input</button>
        </div>
      ) : (<button onClick={() => setShowInput(true)}>Mostrar Input</button>)}
      
      <NewBeer beers={beers}/>

      {beers.map((beer) => 
        <div>
          <h3>{beer.beerName}</h3>
          <p>Tipo: {beer.beerStyle}</p>
          <p>Precio: ${beer.price * dollarValue} ARS</p>
          <hr />
        </div>
      )}
    </>
  )
}

export default App
