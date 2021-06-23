import React from "react";
import './styles.css';

export default function Card(props){
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={props.imgPath} alt="produto"/>
        <p className="card__title">{props.nome}</p>
        <div className="card__description">
          <p className="priceDescription"> R$ {props.preco} </p>
          <p className="stockDescription"> Em estoque: {props.quantidade} </p>
        </div>  
        <button className="card__btn">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}