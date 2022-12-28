

import objLogos from '../assets/logos.json';
import '../scss/_header_top.scss';

function HeaderTop() {
  return (
    <div className="header-top">
      <ul className="about-company">
        <li>О компании</li>
        <li>Наши контакты</li>
        <li>Оплата и доставка товара</li>
        <li>Обмен и возврат товара</li>
        <li>Акции и дисконтные программы</li>
      </ul>

      <ul className="languages">
        <li>UKR</li>
        <li>RUS</li>
        <li>ENG</li>
      </ul>

      <ul className="wishes-signIn">
        <div className="logo-heart">
          <img height={30} src={objLogos.logoHeart} alt="img.icon-heart" />
          <li>Мои желания</li>
        </div>
        <div className="logo-tent">
          <img height={40} src={objLogos.logoTent} alt="img.icon-person" />
          <li>Войти в личный кабинет</li>
        </div>
      </ul>
    </div>
  );
}

export default HeaderTop;
