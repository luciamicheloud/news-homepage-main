import React from "react";
import "./Loader.css";

const Loader = ({ text = "Cargando noticias..." }) => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
};

export default Loader;