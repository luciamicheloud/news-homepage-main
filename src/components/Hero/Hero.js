import React from "react";
import "./Hero.css";

const Hero = ({ article }) => {
  if (!article) return null;

  const {
    title,
    description,
    urlToImage,
    url,
  } = article;

  const imageFallback =
    "https://via.placeholder.com/800x400?text=No+Image";

  return (
    <section className="hero">
      <img
        src={urlToImage || imageFallback}
        alt={title}
        className="hero-img"
      />

      <div className="hero-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Leer noticia →
        </a>
      </div>
    </section>
  );
};

export default Hero;