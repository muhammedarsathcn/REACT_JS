import { useParams } from "react-router-dom";
import PlaceHero from "../../components/PlaceHero/PlaceHero";
import Recommendation from "../../components/Recommendation/Recommendation";
import styles from "./Detail.module.scss";
import { images } from "../../constants/Images";
import Loader from "../../components/loader/Loader";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { DETAIL_CONSTANTS } from "../../constants/DetailConstant";
import { useEffect } from "react";
import { fetchIndividualPlace, fetchWeather } from "../../services/place.api";
import { toast } from "react-hot-toast";
import { useState } from "react";
const Detail = () => {
  const { place } = useParams();

  const [placeDetail, setPlaceDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [temperature, setTemperature] = useState(0);
  useEffect(() => {
    const fetchPlaceDetail = async () => {
      try {
        setIsLoading(true);
        const response = await fetchIndividualPlace(place);
        const weatherResponse = await fetchWeather(place);
        setTemperature(weatherResponse.main.temp)
        setPlaceDetail(response);
      } catch (err) {
        console.error(err);
        toast.error("something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlaceDetail();
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
        temp={temperature}
      />
      <section className={styles.descriptionWrapper}>
        <p className={styles.description}>
          {placeDetail.fullDescription?.replace(/\\n/g, "\n\n")}
        </p>
        <SectionHeading
          heading={DETAIL_CONSTANTS.heading}
          description={`${DETAIL_CONSTANTS.description} ${place}`}
        />
        <Recommendation recommended={placeDetail.relatedPlaces} />
      </section>
    </div>
  );
};

export default Detail;
