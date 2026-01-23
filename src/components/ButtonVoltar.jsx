import Button from "./Button";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ButtonVoltar({ voltar = -1 }) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(voltar)}
      className="absolute top-4 left-4 w-14 h-10 p-0 bg-blue-500 text-white border-2 border-black flex items-center justify-center"
    >
      <MoveLeft size={24} />
    </Button>
  );
}

export default ButtonVoltar;
