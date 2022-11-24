import React from 'react';

import '../scss/_header_bottom.scss';
import downArrow from '../assets/logo_arrow.svg';

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <ul className="main-menu">
        <li>Палатки</li>
        <li>Спальные мешки и коврики</li>
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
