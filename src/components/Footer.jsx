import Logo from "./Logo";

import appleStore from "../assets/images/appleStore.png";
import googlePlay from "../assets/images/googlePlay.png";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__info">
        <div className="footer__info__left">
          <Logo />
          <p>
            Our motto to fulfill customer demand by making them satisfied with
            growing their business.
          </p>
        </div>
        <div className="footer__info__right">
          <div className="info__right--item">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Features</li>
              <li>News</li>
              <li>Careers</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="info__right--item">
            <h4>Support</h4>
            <ul>
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Contact Us</li>
              <li>Accesbility</li>
            </ul>
          </div>
          <div className="info__right--item">
            <h4>Get our app</h4>
            <div className="info__right--item__img">
              <img src={googlePlay} />
              <img src={appleStore} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright Besnik 2021 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
