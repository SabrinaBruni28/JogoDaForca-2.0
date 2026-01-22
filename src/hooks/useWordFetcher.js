import { useState } from "react";

function useWordFetcher() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWord(categoryUrl) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(categoryUrl);
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data.palavras)) {
        throw new Error("Formato inválido da API");
      }

      // palavra aleatória
      const randomIndex = Math.floor(Math.random() * data.palavras.length);
      return data.palavras[randomIndex];
    } catch (err) {
      console.error(err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { fetchWord, loading, error };
}

export default useWordFetcher;
