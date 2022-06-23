// Modules

// Components
import MainSlider from "../components/main/MainSlider";
import EventsSection from "../components/main/EventsSection";
import PlayerRating from "../components/main/PlayerRatingSection";
import Partners from "../components/main/PartnersSection";

const Main = () => {
  return (
    <section className="main">
      <MainSlider />
      <EventsSection />
      <PlayerRating />
      <Partners />
    </section>
  );
};

export default Main;
