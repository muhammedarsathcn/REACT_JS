import styles from "./Card.module.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants/Images";
import PropTypes from "prop-types";
const Card = ({ place, city, shortDescription }) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(`/detail/${city.toLowerCase()}`);
    window.scrollTo(0, 0);
  };

  return (
    <article className={styles.cardContainer}>
      <div>
        <figure className={styles.cardImgContainer}>
          <img src={images[city.toLowerCase()]} alt={city} />
        </figure>
        <p className={styles.cardTitle}>{place}</p>
        <p className={styles.cardDistrict}>{city}</p>
        <p className={styles.cardDescription}>{shortDescription}</p>
      </div>
      <span className={styles.cardBtnContainer}>
        <Button variant={"small"} handleClick={handleBtnClick}>
          READ MORE
        </Button>
      </span>
    </article>
  );
};

Card.propTypes = {
  place: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default Card;
