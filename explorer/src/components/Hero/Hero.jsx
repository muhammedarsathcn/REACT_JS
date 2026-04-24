import styles from "./Hero.module.scss";
import HeroImg from "../../assets/HeroImg.png";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { getPlaceOptions } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
const Hero = ({ places }) => {
  const navigate = useNavigate();
  const fieldOption = getPlaceOptions(places);
  const [explore, setExplore] = useState(null);
  const handleExploreChange = (e) => {
    setExplore(e.target.value);
  };
  const handleExploreClick = () => {
    if (!explore) {
      toast.error("Choose a place first");
      return;
    }
    navigate(`/detail/${explore}`);
    window.scrollTo(0,0)
  };
  return (
    <div className={styles.heroContainer}>
      <section className={styles.leftSection}>
        <p className={styles.greetingText}>WELCOME TO EXPLORER</p>
        <p className={styles.heroText}>
          Your Adventure Travel Expert in the <strong>SOUTH</strong>
        </p>
        <section>
          <div className={styles.chooseContainer}>
            <InputField
              type={"select"}
              name={"places"}
              placeholder={"Choose"}
              value={explore}
              onChange={handleExploreChange}
              options={fieldOption}
              className={styles.overflowInputField}
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button handleClick={handleExploreClick}>EXPLORE</Button>
          </div>
        </section>
      </section>
      <section className={styles.rightSection}>
        <figure className={styles.heroImageContainer}>
          <img src={HeroImg} alt="Person Riding Bike" />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
