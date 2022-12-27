import React from 'react';

import '../scss/_footer.scss';

import objLogos from '../assets/logos.json';

import imgExpeditionDownstairs from '../assets/img_expedition_downstairs.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="header-image">
        <img
          width="250px"
          src={imgExpeditionDownstairs}
          alt="img-expedition"
          title="img-expedition"
        />
        <h1>
          Expedition online shop - <br /> camping and travel gear
        </h1>
        <h4>
          The online shop since 2000 <br /> Интернет-магазин с 2000 года
        </h4>
        <div className="empty"></div>
      </div>

      <div>
        <ul className="we">
          <h4>Мы</h4>
          <li>О компании</li>
          <li>Наши контакты</li>
          <li>Оплата и доставка товара</li>
          <li>Обмен и возврат товара</li>
          <li>Акции и дисконтные программы</li>
          <li>Отзывы о магазине</li>
          <li>Новости</li>
          <li>Вакансии</li>
          <li>Договор публичной оферты</li>

          <li>
            {' '}
            <img
              width="15px"
              src={objLogos.logoPhone}
              alt="img.icon-phone"
              title="icon-phone"
            />{' '}
            Для связи с нами:
          </li>
          <li className="size-numbers">(093) 333-44-99</li>
          <li className="size-numbers">(099) 333-44-99</li>
          <img
            width="25px"
            src={objLogos.logoTwitter}
            alt="img.icon-twitter"
            title="icon-twitter"></img>
          <img
            width="25px"
            src={objLogos.logoInstagram}
            alt="img.icon-instagram"
            title="icon-instagram"></img>
          <img
            width="25px"
            src={objLogos.logoFacebook}
            alt="img.icon-facebook"
            title="icon-facebook"></img>
          <img
            width="25px"
            src={objLogos.logoTelegram}
            alt="img.icon-telegram"
            title="icon-telegram"></img>
          <div className="empty-two"></div>
        </ul>
      </div>

      <div>
        <ul className="catalogue">
          <h4>Каталог</h4>
          <div className="heart-wishes">
            <img height="20px" src={objLogos.logoHeart} alt="img.icon-heart" title="icon-heart" />
            <li>Мои желания</li>
          </div>
          <div className="tent-signIn">
            <img height="25px" src={objLogos.logoTent} alt="img.icon-person" title="icon-person" />
            <li>Войти в личный кабинет</li>
          </div>
          <li>Палатки</li>
          <li>Спальные мешки и коврики</li>
          <li>Рюкзаки и сумки</li>
          <li>Зонты и дождевики</li>
          <li>Средства для розжига</li>
          <li>Посуда</li>
          <li className="marg-bott">Сопутствующие товары</li>
          <div className="empty"></div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
