import { api } from "./api"

export const fetchAllPlaces = async () => {
    const response = await api.get();
    return response.data;
}

export const fetchIndividualPlace = async (place) => {
    const response = await api.get(`/places/${place.toLowerCase()}`);
    console.log(response.data)
    return response.data
}