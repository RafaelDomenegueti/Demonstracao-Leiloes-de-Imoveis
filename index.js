import './index.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { DatePicker } from 'antd';

import Home from './Rotas/Home/Home';
import Contato from './Rotas/Contato/Contato';
import Leiloes from './Rotas/Leiloes/Leiloes'
import Leilao from './Rotas/Leilao/Leilao'

ReactDOM.render(
  <div>
    <header className='folderBackGround'>
      <div className='digitacao-frase'>
        As melhores oportunidades para adquirir sua nova casa!
      </div>
    </header>
    
    <nav className='navBar'>
      <div>
        <h1>Jonas C. V. D. T.</h1>
      </div>
      <div className='navBarProps'>
        <a href="/" className='propsNav'>Home</a>
        <a href="/leiloes" className='propsNav'>Leilões</a>
        <a href="/Contato" className='propsNav'>Contato</a>
      </div>
      
    </nav>

    <BrowserRouter>
      <Routes>

        <Route path="/leiloes" element={<Leiloes />} />
        <Route path="/leiloes/:idLeilao" element={<Leilao />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>

    <footer className='footer'>

      <div className='socialIcons'>
        <BsFacebook size={50}/>
        <BsInstagram size={50}/>
        <BsLinkedin size={50}/>
      </div>
      
      <div>
        <a className='linksFooter' href='https://jonasdellatonia.com.br/'>Info</a> - <a className='linksFooter' href="/Contato">Support</a>
      </div>

      © 2022 | Todos os Direitos Reservados
    </footer>
    
  </div>,
  document.getElementById('root')
);

reportWebVitals();
