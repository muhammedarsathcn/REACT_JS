import Hero from "../../components/Hero/Hero";
import Destination from "../../components/Destination/Destination";
import { useEffect, useState } from "react";
import { fetchAllPlaces } from "../../services/place.api";
import toast from "react-hot-toast";
const Home = () => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchPlace = async () => {
      try {
        setIsLoading(true);
        const response = await fetchAllPlaces();
        setPlaces(response);
      } catch (err) {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlace();
  }, []);

  return (
    <>
      <Hero places={places} />
      <Destination places={places} isLoading={isLoading} />
    </>
  );
};

export default Home;
