// Modules
import { useEffect } from "react";

// Images
import magnus from "../images/magnus.jpg";

// Link: /profile

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="profile">
      <div className="container">
        <div className="profile-inner">
          <div className="profile-container">
            <div className="profile-left">
              <div className="profile-img">
                <img src={magnus} alt="" />
              </div>
            </div>
            <div className="profile-right">
              <div className="profile-data">
                <h3 className="profile-name">Carlsen, Magnus</h3>
                <div className="profile-data-wrapper">
                  <div className="profile-item">
                    <span>ID</span>
                    <p>1503014</p>
                  </div>
                  <div className="profile-item">
                    <span>ID</span>
                    <p>1503014</p>
                  </div>
                  <div className="profile-item">
                    <span>ID</span>
                    <p>1503014</p>
                  </div>
                </div>
              </div>
              <div className="profile-rating">
                <h3 className="profile-name profile-rating">Rating</h3>
                <div className="profile-data-wrapper">
                  <div className="profile-item">
                    <span>ID</span>
                    <p>1503014</p>
                  </div>
                  <div className="profile-item">
                    <span>ID</span>
                    <p>1503014</p>
                  </div>
                  <div className="profile-item">
                    <span>ID</span>
                    <p>1503014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
