// Modules
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Components
import Event from "../global/Event";
import EventSkeleton from "../global/EventSkeleton";

// Helpers
import { getAsidePosts } from "../../helpers/apiRequests";

// Types
import { eventType } from "../../types/eventProps";

const EventAside = () => {
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
    getAsidePosts(setEvents);
  }, []);
  return (
    <aside className="latest">
      <h2 className="latest-title">Последние новости</h2>
      <div className="latest-content">
        {events.loaded
          ? events.data.map((evnt) => {
              return (
                <Event
                  key={uuidv4()}
                  image={evnt.featured_images[0].path}
                  title={evnt.title}
                  time={"00:00"}
                  date={evnt.published_at}
                  content={evnt.content_html}
                />
              );
            })
          : ["", "", "", ""].map(() => <EventSkeleton key={uuidv4()} />)}
      </div>
    </aside>
  );
};

export default EventAside;
