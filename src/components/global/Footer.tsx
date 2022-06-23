// Modules
import { Link } from "react-router-dom";

// Icons
import youtube from "../../icons/youtube.svg";
import vk from "../../icons/vk.svg";
import twitter from "../../icons/twitter.svg";
import classmates from "../../icons/odnoklassniki.svg";
import linkedin from "../../icons/linkedin.svg";
import instagram from "../../icons/instagram.svg";
import facebook from "../../icons/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-inner">
            <ul>
              <li>
                <Link to={"/"}>О нас</Link>
              </li>
              <li>
                <Link to={"/"}>События</Link>
              </li>
              <li>
                <Link to={"/"}>Новости</Link>
              </li>
              <li>
                <Link to={"/"}>Рейтинг</Link>
              </li>
              <li>
                <Link to={"/"}>Партнеры</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-bottom-left">
              <p>
                Copyright 2012-2022 Шахматная федерация Туркменистана |{" "}
                <a href="/">Пользовательское соглашение</a>
              </p>
            </div>
            <div className="footer-bottom-right">
              <ul>
                <li>
                  <a href="/">
                    <img src={youtube} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={vk} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={classmates} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={facebook} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
