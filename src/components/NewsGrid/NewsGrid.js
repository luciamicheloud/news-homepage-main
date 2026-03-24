import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsGrid.css";

const NewsGrid = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p className="no-results">No hay noticias disponibles</p>;
  }

  return (
    <section className="news-grid">
      {articles.map((article) => (
        <NewsCard
          key={article.url} // 🔥 mejor que index
          article={article}
        />
      ))}
    </section>
  );
};

export default NewsGrid;