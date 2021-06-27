import React, { useContext } from "react";
import './styles.css';

import { CartContext } from "../../context/shop-context";

export default function Card(props){
  const [cart, setCart] = useContext(CartContext);

  const adicionarProduto = () => {
    const produto = {nome: props.nome, preco: props.preco, quantidade: props.quantidade, codigo: props.codigo}
    setCart(produtos => [...produtos, produto]);    
  }

  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={props.imgPath} alt="produto"/>
        <p className="card__title">{props.nome}</p>
        <div className="card__description">
          <p className="priceDescription"> R$ {props.preco} </p>
          <p className="stockDescription"> Em estoque: {props.quantidade} </p>
        </div>  

        <button className="card__btn">Detalhes</button>
        <button className="card__btn" onClick={adicionarProduto}>Adicionar ao carrinho</button>

      </div>
    </div>
  );
}
