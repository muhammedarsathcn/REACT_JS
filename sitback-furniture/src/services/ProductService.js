export const fetchProductsByCategory = async (category) => {
  try {
    const url = import.meta.env.VITE_PRODUCT_URL;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    const products = data || [];
    const filtered = products.filter(
      (item) =>
        item.category?.toLowerCase() === category?.toLowerCase()
    );
    return filtered;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};