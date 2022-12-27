import React from 'react';
import objLogos from '../assets/logos.json';

import imgExpedition from '../assets/img_expedition.png';
import '../scss/_header_middle.scss';
import { Link } from 'react-router-dom';

const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <Link to="/">
        <img
          className="logo-expedition"
          width="200px"
          src={imgExpedition}
          alt="img-expedition"
          title="img-expedition"
        />
      </Link>

      <div className="title-search">
        <h1 className="another-family">Expedition online shop - camping and travel gear</h1>
        <h1>Интернет-магазин Expedition - снаряжение для туризма и кемпинга</h1>
        <input type="text" placeholder="поиск товаров" />
      </div>

      <ul className="telephone-communication">
        <img
          className="background-icon"
          width="15px"
          src={objLogos.logoPhone}
          alt="img.icon-phone"
          title="icon-phone"
        />

        <li>Для связи с нами:</li>
        <li className="size-numbers">(093) 333-44-99</li>
        <li className="size-numbers">(099) 333-44-99</li>
      </ul>
    </div>
  );
};

export default HeaderMiddle;
