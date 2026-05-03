import { api } from "./api"
/**
 * to get places from the server
 * @returns list of places
 */
export const fetchAllPlaces = async () => {
    const response = await api.get();
    return response.data;
}

/**
 * to get the details of the particular place
 * @param {*} place is which detail need to fetch 
 * @returns data of the particular place
 */
export const fetchIndividualPlace = async (place) => {
    const response = await api.get(`/places/${place.toLowerCase()}`);
    return response.data
}

export const fetchWeather = async (place) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
    const data = await response.json();
    return data;
}