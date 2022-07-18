// Modules
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "react-loading-skeleton";

// Components
import VideoPlayer from "../global/VideoPlayer";
import Calendar from "../global/Calendar";

// Types
import { playerType } from "../../types/playerType";

// Helpers
import { getVideos } from "../../helpers/apiRequests";
import { hosting } from "../../links";
import { highlightColor } from "../../helpers/otherVariables";

const CalendarSection = () => {
  const [video, setVideo]: playerType = useState("");
  const [videoData, setVideoData]: any = useState();
  useEffect(() => {
    getVideos((res: any) => {
      setVideoData(res);
      setVideo(res[0].video);
    });
  }, []);
  return (
    <section className="calendars-outer">
      <div className="container">
        <div className="calendars">
          <div className="calendars-left">
            {video.length > 1 ? (
              <VideoPlayer videoUrl={video} />
            ) : (
              <Skeleton
                highlightColor={highlightColor}
                height={"51.2rem"}
                style={{ borderRadius: "0.5rem" }}
              />
            )}
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
                          <Skeleton
                            highlightColor={highlightColor}
                            height={"16rem"}
                            style={{ borderRadius: "0.5rem" }}
                          />
                        </SwiperSlide>
                      );
                    })}
              </Swiper>
            </div>
          </div>
          <div className="calendars-right">
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
