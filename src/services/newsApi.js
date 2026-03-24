const API_KEY = "b4edce6360504887a42e1f53db21e885";

export const getTopHeadlines = async (category = "general") => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
  );

  const data = await res.json();

  // 🔥 Manejo real de errores de NewsAPI
  if (data.status !== "ok") {
    throw new Error(data.message || "Error al obtener noticias");
  }

  return data.articles || [];
};