import Background from "../components/Background";
import LetterBox from "../components/LetterBox";
import OptionBox from "../components/OptionBox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Texto from "../components/Texto";
import useSound from "../hooks/useSound";
import Forca from "../components/Forca";
import Button from "../components/Button";

function TelaJogo() {
  const acertoSound = useSound("acerto");
  const erroSound = useSound("error");

  const rawWord = localStorage.getItem("palavra");
  const word = rawWord.split("");
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [lettersInWord, setLettersInWord] = useState([]);
  const [errors, setErrors] = useState(0);

  function normalizeText(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }

  const normalizedWord = normalizeText(rawWord);

  const navigate = useNavigate();

  const handleWinGame = () => {
    navigate("/win");
  };

  function handleLoseGame() {
    navigate("/gameover");
  }

  function handleSelectLetter(letter) {
    if (lettersInWord.includes(letter)) return;
    setLettersInWord((prev) => [...prev, letter]);
    if (letterInWord(letter)) {
      acertoSound.play();
    } else {
      setErrors((prev) => prev + 1);
      erroSound.play();
    }
  }

  function letterInWord(letter) {
    return normalizedWord.includes(letter);
  }

  function allLettersRevealed() {
    return word
      .filter((letter) => /[A-Za-zÀ-ÿ]/.test(letter))
      .every((letter) => lettersInWord.includes(normalizeText(letter)));
  }

  function allLetterSelected() {
    return alfabeto.every((letter) => lettersInWord.includes(letter));
  }

  useEffect(() => {
    if (allLettersRevealed()) {
      handleWinGame();
    }
    if (errors > 6) {
      handleLoseGame();
    }
  }, [lettersInWord]);

  return (
    <Background>
      {/* Botão voltar no canto */}
      <Button
        onClick={() => navigate(-1)}
        className="absolute w-20 h-10 p-0 bg-blue-500 text-white text-xl font-bold border-2 border-black flex items-center justify-center"
      >
        ←
      </Button>

      <div className="flex flex-col items-center justify-center">
        <Texto>{localStorage.getItem("categoria")}</Texto>
        <Forca errors={errors} />

        {/* Palavra */}
        <div className="flex flex-wrap justify- items-center gap-x-6 gap-y-4 mt-5">
          {rawWord.split(/(\s|-)/).map((part, index) => {
            // espaço ou traço → quebra de grupo
            if (part === " " || part === "-") {
              return <div key={index} className="w-12" />;
            }

            return (
              <div key={index} className="flex gap-2">
                {part.split("").map((letter, i) => (
                  <LetterBox
                    key={i}
                    letter={letter}
                    isRevealed={lettersInWord.includes(normalizeText(letter))}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Alfabeto */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {alfabeto.map((letter, i) => {
            const wasSelected = lettersInWord.includes(letter);
            const isCorrect = letterInWord(letter);

            return (
              <OptionBox
                key={i}
                optionText={letter}
                onSelect={handleSelectLetter}
                disabled={wasSelected}
                status={
                  wasSelected ? (isCorrect ? "correct" : "wrong") : "default"
                }
              />
            );
          })}
        </div>
      </div>
    </Background>
  );
}

export default TelaJogo;
