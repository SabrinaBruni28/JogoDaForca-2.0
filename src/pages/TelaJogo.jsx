import Background from "../components/Background";
import Title from "../components/Title";

function TelaJogo() {
  return (
    <Background>
      <div className="flex min-h-screen flex-col items-center justify-center space-y-40">
        <Title>{localStorage.getItem("categoria")}</Title>
        <p>{localStorage.getItem("palavra")}</p>
      </div>
    </Background>
  );
}
export default TelaJogo;