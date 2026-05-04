import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./Products.module.css";
import toast from "react-hot-toast";

// services
import {fetchProductsByCategory} from '../../services/ProductService'
// import { fetchAllPremium } from "../../services/PremiumService"; (if needed)


const Products = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();


useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsByCategory(category);
        setProducts(data);
      } catch (err) {
        console.error(err)
        toast.error("Something went wrong");
      }
    };

    loadProducts();
  }, [category]);

  

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