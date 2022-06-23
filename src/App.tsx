// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "./styles/style.scss";

// Components
import Nav from "./components/global/Nav";
import Footer from "./components/global/Footer";

// Pages
import Main from "./pages/Main";
import Events from "./pages/Events";
import Rating from "./pages/Rating";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="inner-body">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<Events />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
