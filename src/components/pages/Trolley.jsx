import React from 'react';
import objLogos from '../../assets/logos.json';

import '../../scss/_trolley.scss';

const Trolley = () => {
  const [openTrolley, setOpenTrolley] = React.useState(false);

  return (
    <div>
      <div className="block-cart">
        <h4 className={openTrolley === true ? 'active-header' : ''}>Мои покупки:</h4>
        <img
          onClick={() => setOpenTrolley(!openTrolley)}
          className={` ${'cart'} ${openTrolley === true ? 'active-cart' : ''} `}
          width="70px"
          src={objLogos.logoCart}
          alt="img.icon-cart"
        />
        <span className={` ${'counter'} ${openTrolley === true ? 'active-cart' : ''} `}>0</span>
      </div>

      {openTrolley && (
        <div className="shopping-list">
        
          <div className="triangle"></div>
          <h3>Мои покупки</h3>
          <img width="70px" src={objLogos.logoCart} alt="img.icon-cart" />

          <ol>
            <li>
              {' '}
              _____________ <span>_____ шт.</span>{' '}
            </li>
            <li>
              {' '}
              _____________ <span>_____ шт.</span>{' '}
            </li>
            <li>
              {' '}
              _____________ <span>_____ шт.</span>{' '}
            </li>
            <li>
              {' '}
              _____________ <span>_____ шт.</span>{' '}
            </li>
          </ol>

          <ul className="total">
            <li>
              Выбрано наименований: <span>_____ шт.</span>{' '}
            </li>
            <li>
              Общая сумма: <span>_____ грн.</span>{' '}
            </li>
            <button>Оплатить</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Trolley;
