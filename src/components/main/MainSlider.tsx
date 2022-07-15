// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { useState, useEffect, useMemo } from "react";
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

// Helpers
import { getMainSliderData } from "../../helpers/apiRequests";

const MainSlider = () => {
  // State
  const [slideData, setSlideData]: [
    SlideProps[],
    React.Dispatch<React.SetStateAction<SlideProps[]>>
  ] = useState([{ id: 0, header: "", txt: "", img: "" }]);

  // Effect
  useEffect(() => {
    getMainSliderData(setSlideData);
  }, []);

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
        {slideData
          ? slideData.map((slide: SlideProps) => {
              return (
                <SwiperSlide key={uuidv4()}>
                  <MainSliderSlide
                    id={slide.id}
                    img={slide.img}
                    txt={slide.txt}
                    header={slide.header}
                  />
                </SwiperSlide>
              );
            })
          : ""}
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
