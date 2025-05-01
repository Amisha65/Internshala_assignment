import css from "./Home.module.css";
import profilePic from "../assets/profile.png";
import { FaCamera } from "react-icons/fa";

const Home = () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const name = userData.fullName || "Marry Doe";
  const email = userData.email || "Marry@Gmail.Com";

  return (
    <div
      className={`${css.mainContainer} d-flex justify-content-center align-items-center bg-light`}
    >
      <div className={`${css.subContainer} border shadow-lg `}>
        <div className={css.accountCard}>
          <h3 className={css.cardTitle}>Account Settings</h3>
          <div className={css.profile}>
            <div className={css.profilePicWrapper}>
              <img src={profilePic} alt="Profile" className={css.profilePic} />
              <div className={css.cameraIcon}>
                <FaCamera />
              </div>
            </div>
            <div className={css.profileInfo}>
              <div className={css.name}>{name}</div>
              <div className={css.email}>{email}</div>
            </div>
          </div>
          <p className={css.description}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <hr className={css.customdivider} />
        </div>
      </div>
    </div>
  );
};

export default Home;
