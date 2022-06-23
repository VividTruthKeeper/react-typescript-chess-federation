// Modules
import { Link } from "react-router-dom";

// Icons
import divider from "../../icons/divider.svg";

// Types
import { eventProps } from "../../types/eventProps";

const Event = ({ image, time, date, text }: eventProps) => {
  return (
    <Link to={"/"} className="event">
      <div className="event-top">
        <div className="event-img">
          <img src={image} alt="" />
        </div>
        <div className="event-date">
          <span className="event-time">{time}</span>
          <span className="event-divider">
            <img src={divider} alt="" />
          </span>
          <span className="event-day">{date}</span>
        </div>
      </div>
      <div className="event-bottom">
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Event;
