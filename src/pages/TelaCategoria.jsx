import Background from "../components/Background";
import Button from "../components/Button";
import Title from "../components/Title";
import API from "../data/API";
import useWord from "../functions/useWordFetcher";
import { useNavigate } from "react-router-dom";

function TelaCategoria() {
  const { fetchWord, loading } = useWord();
  const navigate = useNavigate();

  async function handleSelectCategory(categoryKey) {
    const { name, url, extractor } = API[categoryKey];

    const word = await fetchWord(url, extractor);

    if (!word) return;

    // salva no localStorage
    localStorage.setItem("categoria", name);
    localStorage.setItem("palavra", word);
    console.log("Palavra selecionada:", word);

    // navega para a tela do jogo
    navigate("/jogo");
  }

  return (
    <Background>
      <div className="flex min-h-screen flex-col items-center justify-center space-y-10">
        <Title>Categoria</Title>

        <div className="grid grid-cols-4 gap-6">
          {Object.keys(API).map((category) => (
            <Button
              key={category}
              onClick={() => handleSelectCategory(category)}
              disabled={loading}
            >
              {API[category].name}
            </Button>
          ))}
        </div>

        {loading && <p>Carregando palavra...</p>}
      </div>
    </Background>
  );
}

export default TelaCategoria;
