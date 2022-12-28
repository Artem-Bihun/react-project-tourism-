import React from 'react';

import objLogos from '../assets/logos.json';
import '../scss/_sort.scss';

const Sort = () => {
  const [openSort, setOpenSort] = React.useState(false);
  const [choice, setChoice] = React.useState(2);

  const arraySort = [
    'Цене, начиная c низких',
    'Цене, начиная c высоких',
    'Популярности',
    'Алфавиту',
    'Бренду'
  ];

  const clickSortList = (i) => {
    setChoice(i);
    setOpenSort(false);
  };

  return (
    <div>
      <span
        onClick={() => setOpenSort(!openSort)}
        className={` ${'sort'} ${openSort === true ? 'active-sort' : ''} `}>
        Сортировать по:
        <img className="down-arrow" src={objLogos.logoArrow} width="20px" alt="icon-arrow" />
        <span className="active-selection">{arraySort[choice]}</span>
      </span>

      {openSort ? (
        <ul className="sort-list">
          {arraySort.map((value, i) => (
            <li
              key={i}
              onClick={() => clickSortList(i)}
              className={choice === i ? 'active-selection' : ''}> {value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Sort;
