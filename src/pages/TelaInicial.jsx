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
      <div className="flex py-8 flex-col items-center justify-center space-y-8">
        <Title>Jogo da Forca</Title>
        <Button onClick={handleStartGame}>Iniciar Jogo</Button>
        <Button onClick={() => navigate("/idioma")}>Selecionar Idioma</Button>
        <Button onClick={() => navigate("/definirforca")}>
          Definir Forca
        </Button>
      </div>
    </Background>
  );
}

export default TelaInicial;
