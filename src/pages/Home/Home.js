import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchNews } from "../../services/newsApi";
import Hero from "../../components/Hero/Hero";
import NewsGrid from "../../components/NewsGrid/NewsGrid";
import SkeletonGrid from "../../components/SkeletonGrid/SkeletonGrid";
import Loader from "../../components/Loader/Loader";
import { getTopHeadlines } from "../../services/newsApi";


const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (query) => {
  setLoading(true);
  setError(null);
  setSearchTerm(query);

  try {
    const results = await searchNews(query);
    setArticles(results);
  } catch (err) {
    setError("Error al buscar noticias");
  } finally {
    setLoading(false);
  }
};

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
  <div className="container">
    <Navbar
      onCategoryChange={fetchNews}
      activeCategory={category}
    />
    <SearchBar onSearch={handleSearch} />
    {searchTerm && (
  <p>Resultados para: "{searchTerm}"</p>
)}

    {loading && articles.length === 0 && <SkeletonGrid />}

    {error && <p style={{ textAlign: "center" }}>{error}</p>}

    {!loading && !error && (
      <>
        {/* 🔥 HERO */}
        <Hero article={articles[0]} />

        {/* 🔥 GRID SIN LA PRIMERA */}
        <NewsGrid articles={articles.slice(1)} />
      </>
    )}
  </div>
);
};

export default Home;