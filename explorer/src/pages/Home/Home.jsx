import Hero from "../../components/Hero/Hero";
import Destination from "../../components/Destination/Destination";
import usePlaces from "../../hooks/usePlaces";

const Home = () => {
  
  
  const { places} = usePlaces();
  return (
    <>
      <Hero places={places} />
      <Destination />
    </>
  );
};

export default Home;
