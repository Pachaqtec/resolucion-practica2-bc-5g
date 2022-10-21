import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header__container">
      <nav className="header__nav">
        <Logo />
        <ul className="header__nav__items">
          <li className="nav__item">
            <a href="#" className="nav__item--first">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#">Profile</a>
          </li>
          <li className="nav__item">
            <a href="#">Courses</a>
          </li>
          <li className="nav__item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="header__nav__btn">Sign In</button>
      </nav>
      <div className="header__presentation">
        <div className="header__presentation__left">
          <h1>Discover best classes for the best learning</h1>
          <p>
            We designed Connections Academy to give students all across the
            nation a tuition-free online public school that lets them learn.
          </p>
          <button className="btn-get-started">Get Started</button>
          <p>
            Not sure when to start? <a href="#">Learn more</a>
          </p>
        </div>
        <div className="header__presentation__right"></div>
      </div>
    </header>
  );
};

export default Header;
