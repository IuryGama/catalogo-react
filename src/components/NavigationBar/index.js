import React from 'react';
import './styles.css';

import Carrinho from '../Carrinho';

export default function NavigationBar(props){
  return (
    <header>
      <img className="logo" src='' alt='logo'/>
      <h1>Petdo - Catalogo</h1>
      <nav>
        <ul className="nav__links">
          <li><Carrinho /></li>
        </ul>
      </nav>
    </header>
  )
}

