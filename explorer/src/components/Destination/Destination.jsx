import Card from "../Card/Card";
import styles from "./Destination.module.scss";
import Loader from "../loader/Loader";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import { DESTINATION_CONSTANT } from "../../constants/DestinationConstants";
import PropTypes from "prop-types";
const Destination = ({ places = [], isLoading }) => {
  console.log(places);
  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={styles.destinationContainer}>
      <SectionHeading
        heading={DESTINATION_CONSTANT.heading}
        description={DESTINATION_CONSTANT.description}
      />
      <section className={styles.cardContainer}>
        {places.map((place, _idx) => {
          return (
            <Card
              key={_idx}
              city={place.city}
              place={place.place}
              shortDescription={place.shortDescription}
            />
          );
        })}
      </section>
    </div>
  );
};

// prop types for destination
Destination.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};

//default props
Destination.defaultProps = {
  places: [],
};

export default Destination;
