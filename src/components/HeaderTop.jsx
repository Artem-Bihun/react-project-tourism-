import logoHeart from '../assets/logo_heart.svg';
import logoPerson from '../assets/logo_person.svg';
import logoInstagram from '../assets/logo_instagram.svg';
import logoFacebook from '../assets/logo_facebook.svg';
import logoTwitter from '../assets/logo_twitter.svg';
import logoTelegram from '../assets/logo_telegram.svg';

import '../scss/_header_top.scss';

function HeaderTop() {
  return (
    <div className="header-top">
      <ul className="company">
        <li>О компании</li>
        <li>Наши контакты</li>
        <li>Оплата и доставка товара</li>
        <li>Обмен и возврат товара</li>
        <li>Акции и дисконтные программы</li>
      </ul>

      <ul className="social-media">
          <img width="22px" src={logoTelegram} alt="img.icon-telegram" title="icon-telegram"></img>
        
          <img width="25px" src={logoFacebook} alt="img.icon-facebook" title="icon-facebook"></img>
        
        
          <img
            width="26px"
            src={logoInstagram}
            alt="img.icon-instagram"
            title="icon-instagram"></img>
        
        
          <img width="27px" src={logoTwitter} alt="img.icon-twitter" title="icon-twitter"></img>
        
      </ul>

      <ul className="languages">
        <li>UKR</li>
        <li>RUS</li>
        <li>ENG</li>
      </ul>

      <ul className="wishes-login">
        <li className="wishes">
          <img width="13px" src={logoHeart} alt="img.icon-heart" title="icon-heart"></img>Мои
          желания
        </li>
        <li className="login">
          <img width="16px" src={logoPerson} alt="img.icon-person" title="icon-person"></img>Вход в
          личный кабинет
        </li>
      </ul>
    </div>
  );
}

export default HeaderTop;
