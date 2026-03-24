import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
import Loader from "../../components/Loader/Loader";
import { getTopHeadlines } from "../../services/newsApi";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [error, setError] = useState(null);

  const fetchNews = async (selectedCategory) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getTopHeadlines(selectedCategory);
      setArticles(data);
      setCategory(selectedCategory);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("No se pudieron cargar las noticias");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, []);

  return (
    <div>
      <Navbar
        onCategoryChange={fetchNews}
        activeCategory={category}
      />

      {loading && <Loader />}

      {error && <p style={{ textAlign: "center" }}>{error}</p>}

      {!loading && !error && (
        <NewsGrid articles={articles} />
      )}
    </div>
  );
};

export default Home;