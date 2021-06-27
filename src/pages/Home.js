import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";

import api from '../services/api';

import '../styles/pages/home.css';
import Card from '../components/Produto/index';
import NavigationBar from "../components/NavigationBar";

function Home() {
  const [ produtos, setProdutos ] = useState([]);
  
  useEffect( async () => {
    await api.get('/produtos')
      .then( response => {
        setProdutos(...produtos, response.data);
      })
      .catch(err => {
        console.error(`Ocorreu um erro no processo: ${err}`)
      });
  }, []);

  return (
    <div>
      <NavigationBar titulo='Catalogo de produtos'/>
      <div className="wrapper">
        {produtos.map((elemt, index) => (
          <Card 
            key={index} 
            nome={elemt.nome} 
            quantidade={elemt.quantidade} 
            preco={elemt.preco} 
            codigo={elemt.codigo} 
          />
        ))}
      </div>

    </div>
  );
}

export default Home;