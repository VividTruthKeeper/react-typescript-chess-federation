// Modules
import { v4 as uuidv4 } from "uuid";

// Components
import Event from "../global/Event";

// Images
import competition from "../../images/competition.jpg";
import competition2 from "../../images/competition2.jpg";
import competition3 from "../../images/competition3.jpg";

// Types
import { eventProps } from "../../types/eventProps";

const eventsData: eventProps[] = [
  {
    image: competition,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "02:58",
    date: "16.12.2021",
  },
  {
    image: competition2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "02:58",
    date: "16.12.2021",
  },
  {
    image: competition3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "02:58",
    date: "16.12.2021",
  },
  {
    image: competition,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "02:58",
    date: "16.12.2021",
  },
];

const EventAside = () => {
  return (
    <aside className="latest">
      <h2 className="latest-title">Последние новости</h2>
      <div className="latest-content">
        {eventsData.map((evnt) => {
          return (
            <Event
              key={uuidv4()}
              image={evnt.image}
              text={evnt.text}
              time={evnt.time}
              date={evnt.date}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default EventAside;
