import React from "react"

function BeersList({beers}) {
  return (
    <div>
      {beers.map((beer) => 
        <div>
            <h2>Cerveza {beer.beerName}</h2>
            <h3>Tipo {beer.beerStyle}</h3>
            <h3>Precio: ARS ${(beer.price * 865.76).toFixed(2)}</h3>
            {beer.available === true ? (<h3>Disponible</h3>) : (<h3>No disponible</h3>)}
            <hr />
        </div>
      )}
    </div>
  )
}

export default BeersList
