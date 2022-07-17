// Modules
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import SectionTitle from "../global/SectionTitle";
import Event from "../global/Event";
import EventSkeleton from "../global/EventSkeleton";

// Helpers
import { getMainPosts } from "../../helpers/apiRequests";

// Types
import { eventType } from "../../types/eventProps";

const EventsSection = () => {
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
    getMainPosts(setEvents);
  }, []);

  return (
    <section className="events">
      <div className="container">
        <div className="events-inner">
          <SectionTitle title="События и новости" />
          <div className="events-content">
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
              : ["", "", "", "", "", ""].map(() => (
                  <EventSkeleton key={uuidv4()} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
