// Modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import EventAside from "../components/event_item/EventAside";
import EventDate from "../components/global/EventDate";
import EventContentSkeleton from "../components/event_item/EventContentSkeleton";

// Helpers
import { getEvent } from "../helpers/apiRequests";

// Link

const EventItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loader, setLoader] = useState(true);
  const [eventData, setEventData]: any = useState();
  const { eventId } = useParams();
  useEffect(() => {
    setLoader(true);
    getEvent(eventId, setEventData, setLoader);
  }, [eventId]);

  return (
    <main className="eventitem">
      <div className="container">
        <div className="eventitem-inner">
          <div className="eventitem-content">
            {eventData && !loader ? (
              <div className="eventitem-top">
                <EventDate time={"00:00"} date={eventData.published_at} />
                <h2>{eventData.title}</h2>
              </div>
            ) : (
              <EventContentSkeleton />
            )}
            {eventData && !loader ? (
              <div className="eventitem-bottom">
                <div className="eventitem-img">
                  <img src={eventData.featured_images[0].path} alt="" />
                </div>
                <div
                  className="eventitem-content"
                  dangerouslySetInnerHTML={{ __html: eventData.content_html }}
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
