import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";
import { useEffect } from "react";

function TelaInicial() {
  const navigate = useNavigate();
  const handleStartGame = () => {
    navigate("/categoria");
  };

  useEffect(() => {
    if (localStorage.getItem("idioma")) return;
    localStorage.setItem("idioma", "portugues");
  }, []);

  return (
    <Background>
      <div className="flex p-12 flex-col items-center justify-center space-y-10">
        <Title>Jogo da Forca</Title>
        <Button onClick={handleStartGame}>Iniciar Jogo</Button>
        <Button onClick={() => navigate("/idioma")}>Definir Idioma</Button>
        <Button onClick={() => navigate("/escolhapalavra")}>
          Escolher Palavra
        </Button>
      </div>
    </Background>
  );
}

export default TelaInicial;
