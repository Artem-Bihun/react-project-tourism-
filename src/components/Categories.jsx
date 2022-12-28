import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/_categories.scss';


const Categories = () => {
  const [active, setActive] = React.useState();

  const arrayCategories = [
    <Link to="/tents">Палатки</Link>,
    <Link to="/sleeping-bags">Спальные мешки и коврики</Link>,
    <Link to="/backpacks">Рюкзаки</Link>,
    <Link to="/umbrellas">Зонты и дождевики</Link>,
    <Link to="/means-fire">Средства для розжига</Link>,
    <Link to="/crockery">Посуда</Link>,
    <Link to="/related-products">Сопутствующие товары</Link>
  ]      

  return (
    <div className="categories">

      <ul className="categories-list">
        {arrayCategories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActive(i)}
            className={active === i ? 'active-categories-list' : ''} > {value} 
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Categories;
