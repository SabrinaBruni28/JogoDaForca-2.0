import { Check } from "lucide-react";
import Background from "../components/Background";
import Button from "../components/Button";
import ButtonVoltar from "../components/ButtonVoltar";
import Title from "../components/Title";
import { useEffect, useState } from "react";

const BASE_API = "https://sabrinabruni28.github.io/forca-api/";

function TelaLinguagem() {
  const [linguagens, setLinguagens] = useState([]);

  useEffect(() => {
    async function loadLinguagens() {
      const res = await fetch(`${BASE_API}index.json`);
      const data = await res.json();
      setLinguagens(data.linguagens);
    }

    loadLinguagens();
  }, []);

  async function handleSelectLinguagem(linguagem) {
    localStorage.setItem("linguagem", linguagem.key);
  }

  return (
    <Background>
      <ButtonVoltar voltar="/" />

      <div className="flex flex-col items-center justify-center space-y-10">
        <Title>Linguagem</Title>

        {/* Lista de linguagens */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {linguagens.map((linguagem) => (
            <Button
              key={linguagem.key}
              onClick={() => handleSelectLinguagem(linguagem)}
            >
              {linguagem.name}
              {localStorage.getItem("linguagem") === linguagem.key && <Check />}
            </Button>
          ))}
        </div>
      </div>
    </Background>
  );
}

export default TelaLinguagem;
