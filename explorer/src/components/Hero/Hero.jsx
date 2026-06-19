import styles from "./Hero.module.scss";
import HeroImg from "../../assets/HeroImg.png";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { getPlaceOptions } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { HERO_CONSTANTS } from "../../constants/HeroConstants";
import PropTypes from "prop-types";
const Hero = ({ places }) => {
  const navigate = useNavigate();
  const fieldOption = getPlaceOptions(places);
  const [explore, setExplore] = useState(null);
  const handleExploreChange = (e) => {
    setExplore(e.target.value);
  };
  const handleExploreClick = (e) => {
    e.preventDefault();
    if (!explore) {
      toast.error("Choose a place first");
      return;
    }
    navigate(`/detail/${explore}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.heroContainer}>
      <section className={styles.leftSection}>
        <p className={styles.greetingText}>{HERO_CONSTANTS.greeting}</p>
        <p className={styles.heroText}>
          {HERO_CONSTANTS.description}
          <strong>{HERO_CONSTANTS.descriptionHighLight} </strong>
        </p>
        <form onSubmit={handleExploreClick}>
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
            <Button type={"submit"}>EXPLORE</Button>
          </div>
        </form>
      </section>
      <section className={styles.rightSection}>
        <figure className={styles.heroImageContainer}>
          <img src={HeroImg} alt="Person Riding Bike" />
        </figure>
      </section>
    </div>
  );
};

//prop types for Hero
Hero.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      place: PropTypes.string,
      shortDescription: PropTypes.string,
    })
  ),
};

//default prop types for hero
Hero.defaultProps = {
  places: [],
};

export default Hero;
