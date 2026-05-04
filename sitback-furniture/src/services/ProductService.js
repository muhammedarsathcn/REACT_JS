// src/services/ProductService.js
export const fetchProductsByCategory = async (category) => {
    try {
      console.log(category)
    const response = await fetch("/products.json");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

        const data = await response.json();
        console.log(data)
    const filtered = data.products.filter(
      (item) => item.category === category
    );
console.log(filtered)
    return filtered;
  } catch (error) {
    console.error(error);
    return [];
  }
};