// Modules

// Components
import MainSlider from "../components/main/MainSlider";
import EventsSection from "../components/main/EventsSection";
import Partners from "../components/main/PartnersSection";

const Main = () => {
  return (
    <section className="main">
      <MainSlider />
      <EventsSection />
      <Partners />
    </section>
  );
};

export default Main;
