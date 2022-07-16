// Modules
import { useContext, useEffect } from "react";
import { EventContext } from "../context/LoaderContext";

// Components
import EventAside from "../components/event_item/EventAside";
import EventDate from "../components/global/EventDate";

// Link

const EventItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { eventData } = useContext(EventContext);
  return (
    <main className="eventitem">
      <div className="container">
        <div className="eventitem-inner">
          <div className="eventitem-content">
            {eventData ? (
              <div className="eventitem-top">
                <EventDate time={eventData.time} date={eventData.date} />
                <h2>{eventData.title}</h2>
              </div>
            ) : (
              ""
            )}
            {eventData ? (
              <div className="eventitem-bottom">
                <div className="eventitem-img">
                  <img src={eventData.image} alt="" />
                </div>
                <div
                  className="eventitem-content"
                  dangerouslySetInnerHTML={{ __html: eventData.content }}
                ></div>
              </div>
            ) : (
              ""
            )}
          </div>
          <EventAside />
        </div>
      </div>
    </main>
  );
};

export default EventItem;
