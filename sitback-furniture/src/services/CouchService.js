export const fetchAllCouches = async () => {
    try {
        const response = await fetch("/couches.json");
        const data = await response.json();
        console.log(data)
        return data.products
    } catch (err) {
        console.error(err);
        return null;
    }
}