import ButtonVoltar from "../components/ButtonVoltar";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";
import Texto from "../components/Texto";
import Input from "../components/Input";
import { useState } from "react";

function TelaDefinirForca() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState("");
  const [palavra, setPalavra] = useState("");

  function handleConfirmar() {
    if (!categoria.trim() || !palavra.trim()) return;

    localStorage.setItem("categoria", categoria);
    localStorage.setItem("palavra", palavra);

    navigate("/jogo");
  }

  return (
    <Background>
      <ButtonVoltar voltar="/" />

      <div className="flex flex-col items-center justify-center space-y-5 py-8">
        <Title>Definir Forca</Title>
        <Texto>Categoria</Texto>
        <Input
          placeholder="Digite a categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <Texto>Palavra</Texto>
        <Input
          placeholder="Digite a palavra"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
        />

        <Button onClick={handleConfirmar}>Confirmar</Button>
      </div>
    </Background>
  );
}

export default TelaDefinirForca;
