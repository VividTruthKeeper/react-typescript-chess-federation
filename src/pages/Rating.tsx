// Modules
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Components
import SectionTitle from "../components/global/SectionTitle";
import SearchTable from "../components/global/SearchTable";

// Images
import magnus from "../images/magnus.jpg";
import hou from "../images/hou.jpg";
import firouzja from "../images/firouzja.jpg";
import zhu from "../images/zhu.jpg";

const Rating = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="rating">
      <div className="container">
        <div className="rating-inner">
          <SectionTitle title={"Лучшие игроки"} />
          <div className="rating-content">
            <div className="rating-banner">
              <Link className="rating-banner-block" to={"/"}>
                <div className="rating-banner-img">
                  <img src={magnus} alt="" />
                </div>
                <div className="rating-banner-text">
                  <h4>Carlsen, Magnus</h4>
                  <h5>2864</h5>
                </div>
              </Link>
              <Link className="rating-banner-block" to={"/"}>
                <div className="rating-banner-img">
                  <img src={hou} alt="" />
                </div>
                <div className="rating-banner-text">
                  <h4>Hou, Yifan</h4>
                  <h5>2650</h5>
                </div>
              </Link>
              <Link className="rating-banner-block" to={"/"}>
                <div className="rating-banner-img">
                  <img src={firouzja} alt="" />
                </div>
                <div className="rating-banner-text">
                  <h4>Firouzja, Alireza</h4>
                  <h5>2804</h5>
                </div>
              </Link>
              <Link className="rating-banner-block" to={"/"}>
                <div className="rating-banner-img">
                  <img src={zhu} alt="" />
                </div>
                <div className="rating-banner-text">
                  <h4>Zhu, Jiner</h4>
                  <h5>2464</h5>
                </div>
              </Link>
            </div>
            <SearchTable />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rating;
