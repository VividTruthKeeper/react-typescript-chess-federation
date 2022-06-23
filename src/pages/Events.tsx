// Modules
import { v4 as uuidv4 } from "uuid";

// Images
import competition from "../images/competition.jpg";
import competition2 from "../images/competition2.jpg";
import competition3 from "../images/competition3.jpg";

// Components
import Event from "../components/global/Event";

// Types
import { eventProps } from "../types/eventProps";

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
];

const Events = () => {
  return (
    <main className="events-page">
      <div className="container">
        <div className="events-page-inner">
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
      </div>
    </main>
  );
};

export default Events;
