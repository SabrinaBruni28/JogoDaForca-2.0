import ButtonVoltar from "../components/ButtonVoltar";
import Background from "../components/Background";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { Check } from "lucide-react";

const BASE_API = "https://sabrinabruni28.github.io/forca-api/";

function TelaIdioma() {
  const [idiomas, setIdiomas] = useState([]);
  const [idiomaSelecionada, setIdiomaSelecionada] = useState(null);

  useEffect(() => {
    async function loadIdiomas() {
      const res = await fetch(`${BASE_API}index.json`);
      const data = await res.json();
      setIdiomas(data.idiomas);
    }

    const idiomaSalva = localStorage.getItem("idioma");
    if (idiomaSalva) {
      setIdiomaSelecionada(idiomaSalva);
    }

    loadIdiomas();
  }, []);

  function handleSelectIdioma(idioma) {
    localStorage.setItem("idioma", idioma.key);
    setIdiomaSelecionada(idioma.key);
  }

  return (
    <Background>
      <ButtonVoltar voltar="/" />

      <div className="flex flex-col items-center justify-center space-y-10">
        <Title>Idiomas</Title>

        {/* Lista de idiomas */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {idiomas?.length > 0 ? (
            idiomas.map((idioma) => (
              <Button
                key={idioma.key}
                onClick={() => handleSelectIdioma(idioma)}
              >
                {idioma.name}
                {idiomaSelecionada === idioma.key && <Check />}
              </Button>
            ))
          ) : (
            <p>Nenhuma opção de idioma</p>
          )}
        </div>
      </div>
    </Background>
  );
}

export default TelaIdioma;
