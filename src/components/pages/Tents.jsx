import React from 'react';

import '../../scss/_for_all_goods.scss';

import arrayTents from '../../assets/tents.json';

function Tents() {
  return (
    <div className="general">

      {arrayTents.map( (obj) => (
    
        <div className="each" key={obj.id}>
    
          <img width="269px" src={obj.imageUrl} alt="img.tent" />

          <h4>
            Палатка {obj.title} <br /> Цена: {obj.price} грн.
          </h4>

          <ul>
            <li>Купить</li>

            <li>
              <img width="24px" src={obj.logoCart} alt="icon-heart" /> Добавить в "Мои покупки"
            </li>

            <li>
              <img width="20px" src={obj.logoHeart} alt="icon-heart" /> Добавить в "Мои желания"
            </li>
          </ul>

        </div>

      ))}

    </div>
  );
}

export default Tents;
