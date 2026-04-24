import { useParams } from "react-router-dom";
import PlaceHero from "../../components/PlaceHero/PlaceHero";
import Recommendation from "../../components/Recommendation/Recommendation";
import styles from "./Detail.module.scss";
import { useEffect, useState } from "react";
import { fetchIndividualPlace } from "../../services/place.api";
import toast from "react-hot-toast";
import { images } from "../../constants/Images";
import Loader from "../../components/loader/Loader";
const Detail = () => {
  const { place } = useParams();
  console.log(place);
  const [placeDetail, setPlaceDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fetchPlace = async () => {
    try {
      setIsLoading(true);
      const response = await fetchIndividualPlace(place);
      console.log(response);
      setPlaceDetails(response);
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("Inside useEffect");
    fetchPlace();
  }, [place]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <PlaceHero
        title={placeDetail.place}
        image={images[placeDetail.city?.toLowerCase()]}
        city={placeDetail.city}
      />
      <section className={styles.descriptionWrapper}>
        <p className={styles.description}>
          {placeDetail.fullDescription?.replace(/\\n/g, "\n")}
        </p>
        <section className={styles.similarDestinationWrapper}>
          <p className={styles.similarDestinationHeading}>
            Similar Destinations
          </p>
          <p className={styles.similarDestinationSubheading}>
            Because you liked {placeDetail.city}
          </p>
        </section>
        <Recommendation recommended={placeDetail.relatedPlaces} />
      </section>
    </div>
  );
};

export default Detail;
