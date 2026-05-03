import Card from "../Card/Card";
import styles from "./Recommendation.module.scss";
import Loader from "../loader/Loader";
import PropTypes from "prop-types";
import { useMemo } from "react";
import usePlaces from "../../hooks/usePlaces";
const Recommendation = ({ recommended = [] }) => {
  const { places, isLoading } = usePlaces();
  const relatedPlaces = useMemo(() => {
    return recommended.map((place) =>
      places.find((data) => data.city === place),
    );
  }, [places, recommended]);
  
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className={styles.recommendationWrapper}>
      {relatedPlaces.map((place, idx) => {
        return (
          <Card
            key={idx}
            city={place.city}
            place={place.place}
            shortDescription={place.shortDescription}
          />
        );
      })}
    </section>
  );
};

//prop types for recommendation
Recommendation.propTypes = {
  recommended: PropTypes.arrayOf(PropTypes.string),
};

//default prop types for recommendation
Recommendation.defaultProps = {
  recommended: [],
};

export default Recommendation;
