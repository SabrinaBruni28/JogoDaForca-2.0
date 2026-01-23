import { use, useEffect } from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

function TelaInicial() {
  const navigate = useNavigate();
  const handleStartGame = () => {
    navigate("/categoria");
  };

  useEffect(() => {
    if (localStorage.getItem("linguagem")) return;
    localStorage.setItem("linguagem", "portugues");
  }, []);

  return (
    <Background>
      <div className="flex p-12 flex-col items-center justify-center space-y-10">
        <Title>Jogo da Forca</Title>
        <Button onClick={handleStartGame}>Iniciar Jogo</Button>
        <Button onClick={() => navigate("/linguagem")}>
          Definir Linguagem
        </Button>
      </div>
    </Background>
  );
}

export default TelaInicial;
