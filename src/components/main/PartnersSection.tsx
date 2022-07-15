// Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

// Components
import SectionTitle from "../global/SectionTitle";

// Icons
import arrowPrev from "../../icons/arrow-left-green.svg";
import arrowNext from "../../icons/arrow-right-green.svg";

// URL
import { hosting } from "../../links";

// Types
import { partnersType } from "../../types/partnersType";

// Helpers
import { getPartnerSliderData } from "../../helpers/apiRequests";

// const partnersData: string[] = [tps, samsung, mi, dragon];

const Partners = () => {
  // State
  const [partnerData, setPartnerData]: [
    partnersType[],
    React.Dispatch<React.SetStateAction<partnersType[]>>
  ] = useState([{ id: 0, note: "", partner: "" }]);

  // Effect
  useEffect(() => {
    getPartnerSliderData(setPartnerData);
  }, []);

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
              {partnerData
                ? partnerData.map((image: partnersType) => {
                    return (
                      <SwiperSlide key={uuidv4()}>
                        <div className="partners-slide">
                          <img src={hosting + image.partner} alt="" />
                        </div>
                      </SwiperSlide>
                    );
                  })
                : ""}
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
