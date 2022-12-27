import React from 'react';

import '../scss/_categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [classActiveIndexUL, setClassActiveIndexUL] = React.useState();

  const clickMainMenu = (index) => {
    setClassActiveIndexUL(index);
  };

  // console.log(activeIndexUL);

  // const mainMenuArray = [
  //   'Палатки',
  //   'Спальные мешки и коврики',
  //   'Рюкзаки и сумки',
  //   'Зонты и дождевики',
  //   'Средства для розжига',
  //   'Посуда',
  //   'Сопутствующие товары',
  //   'Сортировать по:',
  // ];

  return (
    <div className="header-bottom">
      <ul className="main-menu">
        {/* {mainMenuArray.map((value, i) => ( */}
        <Link to="/tents">
          <li
            // key={value}
            onClick={() => clickMainMenu(1)}
            // onClick={() => clickMainMenu(i)}
            className={classActiveIndexUL === 1 ? 'active-main-menu' : ''}>
            {/* className={classActiveIndexUL === i ? 'active-main-menu' : ''}> */}
            {/* {value} */} Палатки
          </li>
        </Link>
        {/* ))} */}

        <Link to="/sleeping-bags">
          <li
            onClick={() => clickMainMenu(2)}
            className={classActiveIndexUL === 2 ? 'active-main-menu' : ''}>
            Спальные мешки и коврики
          </li>
        </Link>

        <Link to="/backpacks">
          <li
            onClick={() => clickMainMenu(3)}
            className={classActiveIndexUL === 3 ? 'active-main-menu' : ''}>
            Рюкзаки и сумки
          </li>
        </Link>

        <Link to="/umbrellas">
          <li
            onClick={() => clickMainMenu(4)}
            className={classActiveIndexUL === 4 ? 'active-main-menu' : ''}>
            Зонты и дождевики
          </li>
        </Link>

        <Link to="/means-fire">
          <li
            onClick={() => clickMainMenu(5)}
            className={classActiveIndexUL === 5 ? 'active-main-menu' : ''}>
            Средства для розжига
          </li>
        </Link>

        <Link to="/crockery">
          <li
            onClick={() => clickMainMenu(6)}
            className={classActiveIndexUL === 6 ? 'active-main-menu' : ''}>
            Посуда
          </li>
        </Link>

        <Link to="/related-products">
          <li
            onClick={() => clickMainMenu(7)}
            className={classActiveIndexUL === 7 ? 'active-main-menu' : ''}>
            Сопутствующие товары
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Categories;
