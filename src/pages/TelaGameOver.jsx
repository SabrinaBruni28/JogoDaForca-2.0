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

  return (
    <Background>
      <div className="flex py-10 flex-col items-center justify-center space-y-8">
        <Texto>Game Over! Você perdeu!</Texto>
        <Title>💀</Title>
        <Texto>A palavra era:</Texto>
        <Texto>{localStorage.getItem("palavra")}</Texto>
        <div className="items-center justify-center space-x-4 p-4">
          <Button onClick={() => navigate(-1)}>
            Jogar Novamente
          </Button>
          <Button onClick={() => navigate("/", { replace: true })}>Menu</Button>
        </div>
      </div>
    </Background>
  );
}

export default TelaGameOver;
