import React from "react";
import { useContext } from "react";
import PlaceContext from "../context/PlaceContext";
const usePlaces = () => {
  const ctx = useContext(PlaceContext);
  if (!ctx) {
    throw new Error("Place Context is not Found");
  }
  return ctx;
};

export default usePlaces;
