import React from 'react';

import arrayMeansFire from '../../assets/meansfire.json';

const MeansFire = () => {
  return (
    <div className="general">
      {arrayMeansFire.map((obj) => (
        <div className="each" key={obj.id}>
          <img height="269" src={obj.imageUrl} alt="img_means-fire" />
          <h4>
            {obj.title} <br /> Цена: {obj.price} грн.
          </h4>
          <ul>
            <li>Купить</li>
            <li>
              <img width="24px" src={obj.logoCart} alt="img.icon-cart" /> Добавить в "Мои покупки"
            </li>
            <li>
              <img width="20px" src={obj.logoHeart} alt="img.icon-heart" /> Добавить в "Мои желания"
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MeansFire;
