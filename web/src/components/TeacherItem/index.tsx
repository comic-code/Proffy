import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

export default function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/50683117?s=460&u=6309d686373e0c23d26b7f3783e77a4f2b79b34c&v=4" alt="Fábio José"/>
        <div>
          <strong>Fábio José</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias do mercado de desenvolvimento Front-end.
        <br /><br />
        React, React Native e Gatsby.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}