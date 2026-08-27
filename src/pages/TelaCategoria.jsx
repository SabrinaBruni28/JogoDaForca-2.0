import ButtonVoltar from "../components/ButtonVoltar";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import useWord from "../hooks/useWordFetcher";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import Texto from "../components/Texto";

function TelaCategoria() {
  const { fetchWord, loading } = useWord();
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState(null);
  const [idioma] = useState(localStorage.getItem("idioma"));

  const BASE_API = `https://sabrinabruni28.github.io/forca-api/${idioma}/`;

  useEffect(() => {
    async function loadCategorias() {
      const res = await fetch(`${BASE_API}index.json`);
      const data = await res.json();
      setCategorias(data.categorias);
    }

    loadCategorias();
  }, [BASE_API]);

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

        {categorias === null ? (
          <Texto>Carregando...</Texto>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categorias?.length > 0 ? (
              categorias.map((cat) => (
                <Button
                  key={cat.key}
                  onClick={() => handleSelectCategory(cat)}
                  disabled={loading}
                >
                  {cat.name}
                </Button>
              ))
            ) : (
              <p>Nenhuma opção de categoria</p>
            )}
          </div>
        )}
        {loading && <Texto>Carregando palavra...</Texto>}
      </div>
    </Background>
  );
}

export default TelaCategoria;
