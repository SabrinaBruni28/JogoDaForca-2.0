import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useSound from "../hooks/useSound";
import Title from "../components/Title";
import Texto from "../components/Texto";
import { useEffect } from "react";

function TelaGameOver() {
  const gameOverSound = useSound("game_over");

  useEffect(() => {
    gameOverSound.play();
  }, []);

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate(-2);
  };

  return (
    <Background>
      <div className="flex p-12 flex-col items-center justify-center space-y-10">
        <Texto>Game Over! Você perdeu!</Texto>
        <Title>💀</Title>
        <Texto>A palavra era:</Texto>
        <Texto>{localStorage.getItem("palavra")}</Texto>
        <Button onClick={handleStartGame}>Jogar Novamente</Button>
      </div>
    </Background>
  );
}

export default TelaGameOver;
