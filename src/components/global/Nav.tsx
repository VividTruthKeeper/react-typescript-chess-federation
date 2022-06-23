// Modules
import { Link } from "react-router-dom";

// Icons
import mainLogo from "../../icons/main_logo.svg";
import arrow from "../../icons/arrow-down-black.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">
            <Link to={"/"}>
              <img src={mainLogo} alt="" />
            </Link>
          </div>
          <div className="nav-content">
            <ul className="nav-list">
              <li className="nav-non-link">
                <span>О нас</span>
                <div className="arrow">
                  <img src={arrow} alt="" />
                </div>
              </li>
              <li>
                <Link to={"/news"}>Новости и события</Link>
              </li>
              <li>
                <Link to={"/"}>Турниры</Link>
              </li>
              <li>
                <Link to={"/"}>Рейтинг</Link>
              </li>
              <li>
                <Link to={"/"}>Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
