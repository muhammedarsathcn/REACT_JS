import Card from "../Card/Card";
import styles from "./Recommendation.module.scss";
import { useEffect, useState } from "react";
import { fetchIndividualPlace } from "../../services/place.api";
import Loader from "../loader/Loader";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
const Recommendation = ({ recommended = [] }) => {
  const [relatedPlaces, setRelatedPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllRelatedPlace = async () => {
      try {
        setIsLoading(true);
        const results = await Promise.all(
          recommended.map((place) => fetchIndividualPlace(place)),
        );
        setRelatedPlaces(results);
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong")
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllRelatedPlace();
  }, [recommended]);
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
