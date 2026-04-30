import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import styles from "./Couches.module.css";
import toast from "react-hot-toast";
import { fetchAllCouches } from "../../services/CouchService";
const Couches = () => {
  const [couches, setCouches] = useState([]);
  useEffect(() => {
    const fetchCouches = async () => {
      try {
        const response = await fetchAllCouches();
        setCouches(response);
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
      }
    };
    fetchCouches();
  }, []);
  
  return (
    <div className={styles.cardContainer}>
      {couches.map((couch, _idx) => {
        return <Card key={_idx} name={couch.name} id={couch.id} price={couch.price} description={couch.description} guarantee={couch.guarantee} image={couch.image} />;
      })}
    </div>
  );
};

export default Couches;
