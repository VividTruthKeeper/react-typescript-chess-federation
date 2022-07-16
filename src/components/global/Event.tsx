// Modules
import { Link } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../context/LoaderContext";

// Components
import EventDate from "./EventDate";

// Types
import { eventProp } from "../../types/eventProps";

const Event = ({ image, time, date, title, content }: eventProp) => {
  const { setEventData } = useContext(EventContext);
  return (
    <Link
      to={"/event"}
      className="event"
      onClick={() => {
        localStorage.setItem(
          "event",
          JSON.stringify({
            image: image,
            time: time,
            date: date,
            title: title,
            content: content,
          })
        );
        setEventData({
          image: image,
          time: time,
          date: date,
          title: title,
          content: content,
        });
      }}
    >
      <div className="event-top">
        <div className="event-img">
          <img src={image} alt="" />
        </div>
        <EventDate time={time} date={date} />
      </div>
      <div className="event-bottom">
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Event;
