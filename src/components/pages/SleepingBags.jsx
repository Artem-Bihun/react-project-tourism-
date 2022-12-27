import React from 'react';

import arraySleepingBags from '../../assets/sleepingbags.json';

const SleepingBags = () => {
  return (
    <div className="general">

      {arraySleepingBags.map( ( {imageUrl, title, price, logoCart, logoHeart} ) => (

        <div className="each" key={imageUrl}>

          <img src={imageUrl} alt="img_sleeping-bag" />
          <h4>
            Спальный мешок {title} <br /> Цена: {price} грн.
          </h4>

          <ul>
            <li>Купить</li>
            <li>
              <img width="24px" src={logoCart} alt="img.icon-cart" /> Добавить в "Мои покупки"
            </li>
            <li>
              <img width="20px" src={logoHeart} alt="img.icon-heart" /> Добавить в "Мои желания"
            </li>
          </ul>

        </div>
      
      ))}

    </div>
  );
};

export default SleepingBags;
