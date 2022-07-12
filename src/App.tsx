// Modules
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Styles
import "./styles/style.scss";

// Components
import Nav from "./components/global/Nav";
import Footer from "./components/global/Footer";

// Pages
import Main from "./pages/Main";
import Events from "./pages/Events";
import Rating from "./pages/Rating";
import Profile from "./pages/Profile";
import EventItem from "./pages/EventItem";
import Structure from "./pages/Structure";
import Contacts from "./pages/Contact";
import Calendar from "./components/global/Calendar";

const App = () => {
  // Types
  type drop = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

  // State
  const [dropdown, setDropdown]: drop = useState(false);

  return (
    <div className="App">
      <Nav dropdown={dropdown} setDropdown={setDropdown} />
      <div className="inner-body">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<Events />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/event" element={<EventItem />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
      <Footer dropdown={dropdown} setDropdown={setDropdown} />
    </div>
  );
};

export default App;
