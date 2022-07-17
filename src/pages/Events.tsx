// Modules
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Icons
import left from "../icons/arrow-left-white.svg";
import right from "../icons/arrow-right-white.svg";

// Components
import Event from "../components/global/Event";
import SectionTitle from "../components/global/SectionTitle";
import EventSkeleton from "../components/global/EventSkeleton";

// Types
import { eventType } from "../types/eventProps";

// Helpers
import { getAllPosts } from "../helpers/apiRequests";

const Events = () => {
  // State
  const [events, setEvents]: eventType = useState({
    data: [
      {
        id: -1,
        title: "",
        published_at: "",
        featured_images: [
          {
            id: -1,
            path: "",
          },
        ],
        content_html: "",
      },
    ],
    links: {
      prev: null,
      next: null,
    },
    meta: {
      current_page: -1,
      total: -1,
    },
    loaded: false,
  });

  useEffect(() => {
    getAllPosts(setEvents);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="events-page">
      <div className="container">
        <div className="event-page-wrapper">
          <SectionTitle title={"События и новости"} />
          <div className="events-page-inner">
            {events.loaded
              ? events.data.map((evnt) => {
                  return (
                    <Event
                      key={uuidv4()}
                      id={evnt.id}
                      image={evnt.featured_images[0].path}
                      title={evnt.title}
                      time={"00:00"}
                      date={evnt.published_at}
                    />
                  );
                })
              : [
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ].map(() => <EventSkeleton key={uuidv4()} />)}
          </div>
          <div className="events-page-bottom">
            <div className="events-page-nav">
              <div className="events-page-nav-left">
                <button
                  type="button"
                  className="events-page-btn"
                  disabled={events.meta.current_page < 2 ? true : false}
                >
                  <img src={left} alt="" />
                </button>
                <span className="event-page-number">
                  {events.meta.current_page}
                </span>
                <button
                  type="button"
                  className="events-page-btn"
                  disabled={
                    events.meta.current_page === events.meta.total - 1
                      ? true
                      : false
                  }
                >
                  <img src={right} alt="" />
                </button>
              </div>
              <div className="events-page-nav-right">
                <span>{`Всего ${events.meta.total - 1} ${
                  events.meta.total - 1 === 1
                    ? "страница"
                    : events.meta.total - 1 < 5
                    ? "страницы"
                    : "страниц"
                }`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Events;
