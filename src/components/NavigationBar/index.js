import React from 'react';
import './styles.css';

export default function NavigationBar(props){
  return (
    <nav className="navigation">
      <div className="navLogo">
        <img className="image" src={props.imgPath} alt={props.imgDesc} />
      </div>
      
      <div>
        <h1>{props.titulo}</h1>
      </div>
      
      <div className="navItens" >
        <ul>
          <a> <li> WhatsApp </li> </a>
          <a> <li> Carrinho </li> </a>
        </ul>
      </div>

    </nav>
  )
}

