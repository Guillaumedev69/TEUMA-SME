import "../styles/Header.scss";
import LogoBanner from "../assets/BannerLogo.webp";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={LogoBanner} alt="" />
        <nav className="header__nav nav">
          <button>Menu</button>
          <ul className="nav__ul">
            <li className="nav__link">Accueil</li>
            <li className="nav__link">À propos</li>
            <li className="nav__link">Tarifs</li>
            <li className="nav__link">Porfotlio</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
