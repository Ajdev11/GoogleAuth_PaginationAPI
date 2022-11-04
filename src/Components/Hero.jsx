import React from 'react';

function Hero(props) {
    if(props.name ==="Moses"){
        throw new Error('')
    }
    return ( 
      <h1>{props.name}</h1>
     );
}

export default Hero;