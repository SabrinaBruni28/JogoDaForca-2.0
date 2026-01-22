import { useState } from "react";
import extractors from "./extractors";

function useWordFetcher() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchWord(apiUrl, extractorName) {
    try {
      setLoading(true);
      setError(null);

      const extractor = extractors[extractorName];
      if (typeof extractor !== "function") {
        throw new Error(`Extractor inválido: ${extractorName}`);
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }

      const data = await response.json();
      return extractor(data);
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
