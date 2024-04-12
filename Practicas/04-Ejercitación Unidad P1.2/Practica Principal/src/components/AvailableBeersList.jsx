import React from 'react';

function AvailableBeersList({ beers }) {

  return (
    <div>
      {beers.map((beer) => (
        beer.available === true ? (
          <div>
            <h2>Cerveza {beer.beerName}</h2>
            <h3>Tipo {beer.beerStyle}</h3>
            <h3>Precio: ARS ${(beer.price * 865.76).toFixed(2)}</h3>
            <hr />
          </div>
        ) : (
          ""
        )
    ))}
    </div>
  );
}


export default AvailableBeersList;

