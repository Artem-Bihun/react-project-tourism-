import React from 'react';

import arrayHome from '../../assets/home.json';

const Home = () => {

  return (
    <div className="general">

      {arrayHome.map((obj) => (

        <div className="each" key={obj.id}>

          <img src={obj.imageUrl} alt="img.tent" />
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

export default Home;
