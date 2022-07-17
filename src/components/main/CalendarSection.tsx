// Modules
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import { v4 as uuidv4 } from "uuid";

// Icons
import arrowPrev from "../../icons/arrow-left-white.svg";
import arrowNext from "../../icons/arrow-right-white.svg";

// Components
import VideoPlayer from "../global/VideoPlayer";

// Types
import { playerType } from "../../types/playerType";

// Helpers
import { getVideos } from "../../helpers/apiRequests";
import { hosting } from "../../links";

const CalendarSection = () => {
  const [video, setVideo]: playerType = useState("");
  const [videoData, setVideoData]: any = useState();
  const [placeholder, setPlaceholder]: any = useState();
  useEffect(() => {
    getVideos((res: any) => {
      setVideoData(res);
      setPlaceholder(res[0].poster);
      setVideo(res[0].video);
    });
  }, []);
  return (
    <section className="calendars-outer">
      <div className="container">
        <div className="calendars">
          <div className="calendars-left">
            <VideoPlayer videoUrl={video} placeholder={placeholder} />
            <div className="slider-video">
              <Swiper
                modules={[]}
                spaceBetween={24}
                slidesPerView={3}
                loop={false}
              >
                {videoData
                  ? videoData.map((vid: any) => {
                      return (
                        <SwiperSlide key={uuidv4()}>
                          <div
                            className="video-slide"
                            onClick={() => {
                              setVideo(vid.video);
                              setPlaceholder(vid.poster);
                            }}
                          >
                            <img src={hosting + vid.poster} alt="" />
                          </div>
                        </SwiperSlide>
                      );
                    })
                  : ["", "", ""].map(() => {
                      return (
                        <SwiperSlide key={uuidv4()}>
                          <div className="video-slide skeleton"></div>
                        </SwiperSlide>
                      );
                    })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
