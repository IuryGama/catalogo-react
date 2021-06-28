import {Link} from 'react-router-dom';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
;
import './styles.css';
import { CartContext } from '../../context/shop-context';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Carrinho(props){
  const [cart, setCart] = useContext(CartContext);
  const precoTotal = cart.reduce( (acumulador, valorAtual) => acumulador + valorAtual.preco, 0);

  return (
    <div className="cart-wrapper">
      <Link to='/cart'>
        <div className="basket">
          <FontAwesomeIcon icon={faShoppingCart} />
          {(cart.length > 0) ? (<span className="badge">{cart.length}</span>) : null}
        </div>
        <span className="cart">Carrinho</span>
        {/* <span className="price">{parseFloat(precoTotal).toFixed(2)}</span> */}
      </Link>
    </div>
  )
}

export default Carrinho;