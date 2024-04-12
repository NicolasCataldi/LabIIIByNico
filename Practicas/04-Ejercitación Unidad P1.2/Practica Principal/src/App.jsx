import { useState } from 'react'
import BeersList from './components/BeersList'
import beers from './components/Beers'
import './App.css'
import AvailableBeersList from './components/AvailableBeersList'
import RedIPABeers from './components/RedIPABeers'
import BeerTypes from './components/BeerTypes'

function App() {


  return (
    <>
      <p style={{ color: "orange", fontSize: "1.6rem"}}>Primer Componente</p>
      <BeersList beers={beers}/>
      <p style={{color: "cyan", fontSize: "1.6rem"}}>Segundo Componente solo si esta disponible</p>
      <AvailableBeersList beers={beers}/>
      <p style={{color: "violet", fontSize: "1.6rem"}}>Tercer Componente conteo</p>
      <RedIPABeers beers={beers}/>
      <p style={{color: "crimson", fontSize: "1.6rem"}}>Cuarto Componente tipos</p>
      <BeerTypes beers={beers}/>
    </>
  )
}

export default App
