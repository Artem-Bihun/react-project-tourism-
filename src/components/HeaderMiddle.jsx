import React from 'react';

import logoExpedition from '../assets/logo_expedition.jpg';
import logoPhone from '../assets/phone_icon.svg';
import logoCart from '../assets/cart_icon.svg';
import '../scss/_header_middle.scss';

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <img
        width="300px"
        src={logoExpedition}
        alt="img.icon-expedition"
        title="icon-expedition"></img>
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
        <li className="cart">
          <img width="70px" src={logoCart} alt="img.icon-cart" title="icon-cart"></img>
        </li>
        <span className="counter">1</span>
      </ul>
    </div>
  );
};

export default HeaderMiddle;
