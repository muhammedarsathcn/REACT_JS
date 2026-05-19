import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./Products.module.css";
import toast from "react-hot-toast";
import { fetchProductsByCategory } from "../../services/ProductService";
import Loader from "../../components/loader/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProductsByCategory(category);
        setProducts(data);
      } catch (err) {
        console.error(err);
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, [category]);

  console.log("Products page rendered");

  if (isLoading) {
    return <div className={styles.loaderContainer}><Loader /></div>;
  }
  return (
    <div className={styles.cardContainer}>
      {products.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          id={item.id}
          price={item.price}
          description={item.description}
          guarantee={item.guarantee}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Products;
