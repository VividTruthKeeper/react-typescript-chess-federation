// Modules
import { useEffect } from "react";

// Components
import MainSlider from "../components/main/MainSlider";
import EventsSection from "../components/main/EventsSection";
import PlayerRating from "../components/main/PlayerRatingSection";
import Partners from "../components/main/PartnersSection";

const Main = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <main className="main">
      <MainSlider />
      <EventsSection />
      <PlayerRating />
      <Partners />
    </main>
  );
};

export default Main;
