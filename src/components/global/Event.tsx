// Modules
import { Link } from "react-router-dom";

// Components
import EventDate from "./EventDate";

// Types
import { eventProps } from "../../types/eventProps";

const Event = ({ image, time, date, text }: eventProps) => {
  return (
    <Link to={"/"} className="event">
      <div className="event-top">
        <div className="event-img">
          <img src={image} alt="" />
        </div>
        <EventDate time={time} date={date} />
      </div>
      <div className="event-bottom">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Event;
