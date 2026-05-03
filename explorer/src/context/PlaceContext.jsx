import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { fetchAllPlaces } from "../services/place.api";
const PlaceContext = createContext();
const PlaceProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchPlaces = async () => {
    try {
      setIsLoading(true);
      const response = await fetchAllPlaces();
      console.log(response);
      setPlaces(response);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPlaces();
  }, []);
  return (
    <PlaceContext.Provider value={{ places, isLoading, fetchPlaces }}>
      {children}
    </PlaceContext.Provider>
  );
};

export { PlaceProvider };
export default PlaceContext;
