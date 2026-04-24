import Card from "../Card/Card";
import styles from "./Destination.module.scss";
import Loader from "../loader/Loader";
const Destination = ({ places = [], isLoading }) => {
  
  console.log(places);
  if (isLoading) {
    return (
      <div className = {styles.loaderWrapper}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={styles.destinationContainer}>
      <p className={styles.destinationHeading}>Destinations</p>
      <p className={styles.destinationDescription}>
        Just for you. Because you and your bike are special to us!
      </p>
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

export default Destination;
