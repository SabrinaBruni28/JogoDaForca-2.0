import Background from "../components/Background";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

function TelaInicial() {
  const navigate = useNavigate();
  const handleStartGame = () => {
    navigate("/categoria");
  };

  return (
    <Background>
      <div className="flex min-h-screen flex-col items-center justify-center space-y-40">
        <Title>Jogo da Forca</Title>
        <Button onClick={handleStartGame}>Iniciar Jogo</Button>
      </div>
    </Background>
  );
}

export default TelaInicial;
