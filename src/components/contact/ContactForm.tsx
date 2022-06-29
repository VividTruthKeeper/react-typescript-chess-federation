// Modules

// Images
import board from "../../images/board.jpg";

// Icons
import forward from "../../icons/arrow-forward.svg";
import email from "../../icons/email-black.svg";
import phone from "../../icons/phone-gray.svg";
import pin from "../../icons/pin.svg";
import fb from "../../icons/facebook-gray.svg";
import yt from "../../icons/youtube-gray.svg";
import ig from "../../icons/instagram-grey.svg";
import twitter from "../../icons/twitter-gray.svg";

const ContactForm = () => {
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="contact-form-left">
        <div className="contact-img">
          <img src={board} alt="" />
        </div>
      </div>
      <div className="contact-form-right">
        <div className="contact-form-right-top">
          <div className="contact-title">
            <div className="contact-title-inner">
              <div className="contact-icon">
                <img src={forward} alt="" />
              </div>
              <h3>Свяжитесь с нами</h3>
            </div>
            <div className="contact-icon">
              <img src={email} alt="" />
            </div>
          </div>
        </div>
        <div className="contact-form-right-middle">
          <div className="contact-form-link">
            <a
              className="contact-form-link-left"
              target="_blank"
              rel="noreferrer"
              href="tel:+99312468787"
            >
              <div className="link-icon">
                <img src={phone} alt="" />
              </div>
              <span>+993 12 46-87-87</span>
            </a>
            <div className="contact-form-link-right">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <img src={ig} alt="" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
          <div className="contact-form-link">
            <div className="contact-form-link-left">
              <div className="link-icon">
                <img src={pin} alt="" />
              </div>
              <span>Atatürk köçesi 80, Aşgabat 744000, Туркменистан</span>
            </div>
            <div className="contact-form-link-right">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <img src={yt} alt="" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <img src={fb} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-right-bottom">
          <div className="input-blocks-wrapper">
            <div className="input-block">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Аман Аманов"
              />
            </div>
            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="aman@gmail.com"
              />
            </div>
            <div className="input-block">
              <label htmlFor="text">Чем мы можем помочь вам?</label>
              <textarea
                name="text"
                id="text"
                rows={15}
                placeholder="Расскажите нам о вашей проблеме..."
              ></textarea>
            </div>
          </div>
          <button type="button">Отправить сообщение</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
