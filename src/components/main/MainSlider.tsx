// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import { v4 as uuidv4 } from "uuid";

// Images
import game from "../../images/slider-img.jpg";

// Icons
import arrowPrev from "../../icons/arrow-left-white.svg";
import arrowNext from "../../icons/arrow-right-white.svg";

// Components
import MainSliderSlide from "./MainSliderSlide";

// Types
import { SlideProps } from "../../types/mainSliderSlide";

const sliderData: SlideProps[] = [
  {
    slideTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    slideText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis auctor penatibus nunc leo rhoncus auctor pellentesque in.",
    slideLink: "/",
    slideImg: game,
  },
];

const MainSlider = () => {
  return (
    <section className="main-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        loop={true}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
      >
        {sliderData.map((slide) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <MainSliderSlide
                slideImg={slide.slideImg}
                slideLink={slide.slideLink}
                slideText={slide.slideText}
                slideTitle={slide.slideTitle}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="slider-prev">
        <img src={arrowPrev} alt="" />
      </div>
      <div className="slider-next">
        <img src={arrowNext} alt="" />
      </div>
    </section>
  );
};

export default MainSlider;
