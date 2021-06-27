import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.css';
import Routes from './routes';
import CartContextProvider from './context/shop-context';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
