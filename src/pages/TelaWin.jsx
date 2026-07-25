import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useSound from "../hooks/useSound";
import Title from "../components/Title";
import Texto from "../components/Texto";
import { useEffect } from "react";

function TelaWin() {
  const winSound = useSound("winning");

  useEffect(() => {
    winSound.play();
  }, []);

  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate(-2);
  };

  return (
    <Background>
      <div className="flex p-12 flex-col items-center justify-center space-y-10">
        <Texto>Parabéns! Você venceu!</Texto>
        <Title>🎉🏆🎉</Title>
        <Texto>A palavra era:</Texto>
        <Texto>{localStorage.getItem("palavra")}</Texto>
        <Button onClick={handleStartGame}>Jogar Novamente</Button>
      </div>
    </Background>
  );
}

export default TelaWin;
