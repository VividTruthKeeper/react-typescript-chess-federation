// Modules

// Components
import SectionTitle from "../global/SectionTitle";
import Event from "./Event";

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

const EventsSection = () => {
  return (
    <section className="events">
      <div className="container">
        <div className="events-inner">
          <SectionTitle title="События и новости" />
          <div className="events-content">
            {eventsData.map((evnt, id) => {
              return (
                <Event
                  key={id}
                  image={evnt.image}
                  text={evnt.text}
                  time={evnt.time}
                  date={evnt.date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
