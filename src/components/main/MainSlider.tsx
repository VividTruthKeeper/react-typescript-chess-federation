// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "react-loading-skeleton";

// Icons
import arrowPrev from "../../icons/arrow-left-white.svg";
import arrowNext from "../../icons/arrow-right-white.svg";

// Components
import MainSliderSlide from "./MainSliderSlide";

// Types
import { SlideProps } from "../../types/mainSliderSlide";

// Helpers
import { getMainSliderData } from "../../helpers/apiRequests";
import { highlightColor } from "../../helpers/otherVariables";

const MainSlider = () => {
  // State
  const [slideData, setSlideData]: [
    SlideProps[],
    React.Dispatch<React.SetStateAction<SlideProps[]>>
  ] = useState([{ id: -1, header: "", txt: "", img: "" }]);

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
        {slideData[0].id > -1 ? (
          slideData.map((slide: SlideProps) => {
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
        ) : (
          <Skeleton height={"85rem"} highlightColor={highlightColor} />
        )}
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
