import React from 'react';

function Hero({name}) {
    if(name ==="Moses"){
        throw new Error('Error In Your Codes')
    }
    return ( 
      <h1>{name}</h1>
     );
}

export default Hero;