import React from 'react';

import imgExpedition from '../assets/img_expedition.png';
import logoPhone from '../assets/logo_phone.svg';
import logoCart from '../assets/logo_cart.svg';
import '../scss/_header_middle.scss';
import { Link } from 'react-router-dom';

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <Link to="/">
        <img
          className="expedition"
          width="200px"
          src={imgExpedition}
          alt="img-expedition"
          title="img-expedition"></img>
      </Link>
      <div className="title-search">
        <h1 className="another-family">Expedition online shop - camping and travel gear</h1>
        <h1>Интернет-магазин Expedition - снаряжение для туризма и кемпинга</h1>
        <input type="text" placeholder="поиск товаров"></input>
      </div>
      <ul className="telephone-communication">
        <img
          className="background-icon"
          width="15px"
          src={logoPhone}
          alt="img.icon-phone"
          title="icon-phone"></img>

        <li>Для связи с нами:</li>
        <li className="size-numbers">(093) 333-44-99</li>
        <li className="size-numbers">(099) 333-44-99</li>
      </ul>
      <ul>
        <li className="shopping">Мои покупки:</li>
        <Link to="/trolley">
          <li className="cart">
            <img width="70px" src={logoCart} alt="img.icon-cart" title="icon-cart"></img>
          </li>
        </Link>
        <span className="counter">1</span>
      </ul>
    </div>
  );
};

export default HeaderMiddle;
