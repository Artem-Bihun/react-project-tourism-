import React from 'react';

import '../scss/_sort.scss';
import objLogos from '../assets/logos.json';

const Sort = () => {
  const [openSort, setOpenSort] = React.useState(false);

  return (
    <div>
            
      <span onClick={() => setOpenSort(!openSort)} className= { ` ${'sort'} ${openSort === true ? 'active-sort' : ''} ` } >
        Сортировать по:
        <img className="down-arrow" src={objLogos.logoArrow} width="20px" alt="icon-arrow" />
      </span>

      {openSort && (
        <ul className="sort-list">
          <li>По цене, начиная c низких</li>
          <li>По цене, начиная c высоких</li>
          <li>По рейтингу / По популярности</li>
          <li>По алфавиту</li>
          <li>По бренду</li>
        </ul>
      )}
    </div>
  );
};
export default Sort;
