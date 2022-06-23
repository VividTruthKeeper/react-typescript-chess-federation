// Modules
import { Link } from "react-router-dom";

// Icons
import arrowNext from "../../icons/arrow-right-white.svg";

// Types
import { SlideProps } from "../../types/mainSliderSlide";

const MainSliderSlide = ({
  slideImg,
  slideTitle,
  slideText,
  slideLink,
}: SlideProps) => {
  return (
    <div className="swiper-slide-inner">
      <div className="swiper-bg">
        <img src={slideImg} alt="" />
      </div>
      <div className="swiper-slide-content">
        <div className="container">
          <div className="swiper-slider-content-inner">
            <h3>{slideTitle}</h3>
            <p>{slideText}</p>
            <Link to={slideLink}>
              <span>Click the button</span>
              <div>
                <img src={arrowNext} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSliderSlide;
