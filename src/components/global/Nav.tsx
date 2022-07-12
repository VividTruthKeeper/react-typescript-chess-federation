// Modules
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

// Icons
import mainLogo from "../../icons/main_logo.svg";
import arrow from "../../icons/arrow-down-black.svg";

const Nav = () => {
  // Types
  type drop = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  const location = useLocation();
  const [dropdown, setDropdown]: drop = useState(false);
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
              <li
                className="nav-non-link"
                onClick={() => {
                  setDropdown((initial) => !initial);
                }}
              >
                <span>О нас</span>
                <div className="arrow">
                  <img src={arrow} alt="" />
                </div>
                <ul
                  className={
                    dropdown ? "nav-dropdown" : "nav-dropdown disabled"
                  }
                >
                  <li>
                    <Link to={"/"}>О федерации</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Структура федерации</Link>
                  </li>
                  <li>
                    <Link to={"/"}>О федерации</Link>
                  </li>
                </ul>
              </li>
              <li
                className={location.pathname.includes("news") ? "active" : ""}
              >
                <Link to={"/news"}>Новости и события</Link>
              </li>
              <li>
                <Link to={"/"}>Турниры</Link>
              </li>
              <li
                className={location.pathname.includes("rating") ? "active" : ""}
              >
                <Link to={"/rating"}>Рейтинг</Link>
              </li>
              <li
                className={
                  location.pathname.includes("contact") ? "active" : ""
                }
              >
                <Link to={"/contact"}>Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
