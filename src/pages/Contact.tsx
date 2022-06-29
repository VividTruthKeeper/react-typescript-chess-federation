// Modules

// Icons
import bg from "../icons/green-bg.svg";

// Components
import ContactForm from "../components/contact/ContactForm";

const Contacts = () => {
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
