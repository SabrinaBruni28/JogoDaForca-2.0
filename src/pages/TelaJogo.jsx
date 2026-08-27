import ButtonVoltar from "../components/ButtonVoltar";
import Background from "../components/Background";
import OptionBox from "../components/OptionBox";
import LetterBox from "../components/LetterBox";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useSound from "../hooks/useSound";
import Texto from "../components/Texto";
import Forca from "../components/Forca";

function TelaJogo() {
  const acertoSound = useSound("acerto");
  const erroSound = useSound("error");

  const rawWord = localStorage.getItem("palavra");
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");

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
    navigate("/win", { replace: true });
  };

  function handleLoseGame() {
    navigate("/gameover", { replace: true });
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

  function isLetterOrNumber(char) {
    return /\p{L}|\p{N}/u.test(char);
  }

  function allLettersRevealed() {
    return rawWord
      .split("")
      .filter((char) => isLetterOrNumber(char))
      .every((char) => lettersInWord.includes(normalizeText(char)));
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
      <ButtonVoltar />

      <div className="flex flex-col items-center justify-center">
        <Texto>{localStorage.getItem("categoria")}</Texto>
        <Forca errors={errors} />

        {/* Palavra */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-5 max-w-full">
          {rawWord.split(/(\s)/).map((part, index) => {
            // espaço → só espaçamento
            if (part === " ") {
              return <div key={index} className="w-6" />;
            }

            return (
              <div key={index} className="flex gap-2">
                {part.split("").map((char, i) => {
                  const isCharLetter = isLetterOrNumber(char);

                  return (
                    <LetterBox
                      key={i}
                      letter={char}
                      isRevealed={
                        !isCharLetter ||
                        lettersInWord.includes(normalizeText(char))
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Alfabeto */}
        <div className="flex flex-wrap justify-center p-4 gap-4 mt-10">
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
