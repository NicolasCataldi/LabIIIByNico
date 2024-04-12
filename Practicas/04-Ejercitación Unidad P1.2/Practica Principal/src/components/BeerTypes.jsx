import React from 'react'

function BeerTypes({beers}) {
    return (
        <div>
          {beers.map((beer) => 
          <div>
                <h3>Tipo {beer.beerStyle}</h3>
            </div>
          )}
        </div>
      )
}

export default BeerTypes
