// Modules
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Icons
import mainLogo from "../../icons/main_logo.svg";
// import arrow from "../../icons/arrow-down-black.svg";
import { ReactComponent as Arrow } from "../../icons/arrow-down-black.svg";

// Types
import { dropdown } from "../../types/dropdown";

const Nav = ({ dropdown, setDropdown }: dropdown) => {
  const location = useLocation();

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
                <span className={dropdown ? "active" : ""}>О нас</span>
                <div className={dropdown ? "arrow active" : "arrow"}>
                  <Arrow className="arrow" />
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
