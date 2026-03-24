const API_KEY = process.env.REACT_APP_API_KEY;

export const getTopHeadlines = async (category = "general") => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );

  const data = await res.json();

  // Manejo real de errores de NewsAPI
  if (data.status !== "ok") {
    throw new Error(data.message || "Error al obtener noticias");
  }

  return data.articles || [];
};