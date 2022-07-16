// Modules
import { useEffect } from "react";

// Icons
import bg from "../icons/green-bg.svg";

// Components
import ContactForm from "../components/contact/ContactForm";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contact">
      <div className="contact-bg">
        <img src={bg} alt="" />
      </div>
      <div className="container">
        <div className="contact-inner">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contacts;
