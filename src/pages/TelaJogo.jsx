import Background from "../components/Background";
import LetterBox from "../components/LetterBox";
import OptionBox from "../components/OptionBox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Texto from "../components/Texto";
import useSound from "../hooks/useSound";

function TelaJogo() {
  const acertoSound = useSound("acerto");
  const erroSound = useSound("error");

  const rawWord = localStorage.getItem("palavra");
  const word = rawWord.split("");
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [lettersInWord, setLettersInWord] = useState([]);

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
    } else if (allLetterSelected()) {
      handleLoseGame();
    }
  }, [lettersInWord]);

  return (
    <Background>
      <div className="flex flex-col items-center justify-center space-y-20">
        <Texto>{localStorage.getItem("categoria")}</Texto>

        {/* Palavra */}
        <div className="flex gap-2">
          {word.map((letter, i) => {
            // espaço ou traço vira "gap" visual
            if (letter === " " || letter === "-") {
              return <div key={i} className="w-6" />;
            }

            return (
              <LetterBox
                key={i}
                letter={letter}
                isRevealed={lettersInWord.includes(normalizeText(letter))}
              />
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
