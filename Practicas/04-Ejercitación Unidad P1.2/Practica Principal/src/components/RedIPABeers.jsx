import React from 'react'

function RedIPABeers({beers}) {

    var redCount = 0
    var ipaCount = 0
    
    beers.map((beer) => {
      if(beer.beerStyle === "Red"){
        redCount++
      }else if(beer.beerStyle === "IPA"){
        ipaCount++
      }
    })
    
    return (
      <div>
        <h3>Hay un total de {redCount} Cervezas Red y {ipaCount} IPA</h3>
      </div>
    );
    }
export default RedIPABeers
