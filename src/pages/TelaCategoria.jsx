import Background from "../components/Background";
import Button from "../components/Button";
import ButtonVoltar from "../components/ButtonVoltar";
import Title from "../components/Title";
import useWord from "../hooks/useWordFetcher";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_API = `https://sabrinabruni28.github.io/forca-api/${localStorage.getItem("linguagem")}/`;

function TelaCategoria() {
  const { fetchWord, loading } = useWord();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const res = await fetch(`${BASE_API}index.json`);
      const data = await res.json();
      setCategories(data.categorias);
    }

    loadCategories();
  }, []);

  async function handleSelectCategory(category) {
    const word = await fetchWord(`${BASE_API}${category.file}`);

    if (!word) return;

    localStorage.setItem("categoria", category.name);
    localStorage.setItem("palavra", word);

    navigate("/jogo");
  }

  return (
    <Background>
      <ButtonVoltar voltar="/" />

      <div className="flex flex-col items-center justify-center space-y-10">
        <Title>Categoria</Title>

        {/* Lista de categorias */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              onClick={() => handleSelectCategory(cat)}
              disabled={loading}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {loading && <p>Carregando palavra...</p>}
      </div>
    </Background>
  );
}

export default TelaCategoria;
