import React from "react";
import "./NewsCard.css";

const NewsCard = ({ article }) => {
  const {
    title,
    description,
    urlToImage,
    source,
    url,
    publishedAt,
  } = article;

  const imageFallback =
    "https://via.placeholder.com/400x200?text=No+Image";

  return (
    <article className="news-card">
      <img
        src={urlToImage || imageFallback}
        alt={title}
        className="news-img"
      />

      <div className="news-content">
        <h3 className="news-title">{title}</h3>

        {description && (
          <p className="news-description">{description}</p>
        )}

        <div className="news-footer">
          <span className="news-source">
            {source?.name || "Unknown"}
          </span>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more"
          >
            Leer más →
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;