import { Car } from "lucide-react";
import Card from "../Card/Card";
import styles from "./Recommendation.module.scss";
import { useEffect, useState } from "react";
import { fetchIndividualPlace } from "../../services/place.api";
const Recommendation = ({ recommended = [] }) => {
  const [relatedPlaces, setRelatedPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchAllRelatedPlace = async () => {
    try {
      setIsLoading(true);
      const results = await Promise.all(
        recommended.map((place) => fetchIndividualPlace(place)),
      );
      setRelatedPlaces(results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRelatedPlace()
  },[recommended])
  if (isLoading) {
    return <p>Loading...</p>;
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

export default Recommendation;
