import React from 'react';

import '../scss/_header_bottom.scss';
import downArrow from '../assets/logo_arrow.svg';
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <ul className="main-menu">
        <Link to="/tents">
          <li>Палатки</li>
        </Link>
        <Link to="/sleeping-bags">
          <li>Спальные мешки и коврики</li>
        </Link>
        <li>Рюкзаки и сумки</li>
        <li>Зонты и дождевики</li>
        <li>Средства для розжига</li>
        <li>Посуда</li>
        <li>Сопутствующие товары</li>
      </ul>

      <span className="sort">Сортировать по:</span>
      <img
        className="down-arrow"
        src={downArrow}
        width="20px"
        alt="icon-arrow"
        title="icon-arrow"></img>
    </div>
  );
};

export default HeaderBottom;
