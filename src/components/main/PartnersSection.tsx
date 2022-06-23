// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { v4 as uuidv4 } from "uuid";

// Components
import SectionTitle from "../global/SectionTitle";

// Images
import tps from "../../images/tps.jpg";
import samsung from "../../images/samsung.jpg";
import mi from "../../images/mi.jpg";
import dragon from "../../images/do.jpg";

// Icons
import arrowPrev from "../../icons/arrow-left-green.svg";
import arrowNext from "../../icons/arrow-right-green.svg";

const partnersData: string[] = [tps, samsung, mi, dragon];

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners-inner">
          <SectionTitle title={"Партнеры"} />
          <div className="partners-content">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              spaceBetween={0}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: ".slider-next",
                prevEl: ".slider-prev",
              }}
            >
              {partnersData.map((image) => {
                return (
                  <SwiperSlide key={uuidv4()}>
                    <div className="partners-slide">
                      <img src={image} alt="" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="slider-prev slider-next-white slider-next-white-prev">
              <img src={arrowPrev} alt="" />
            </div>
            <div className="slider-next slider-next-white slider-next-white-next">
              <img src={arrowNext} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
