import { PersonStanding } from "lucide-react";

function Background({ children }) {
  const people = Array.from({ length: 15 });
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="relative w-screen min-h-screen bg-yellow-300 overflow-hidden p-2">
      {/* Pessoas */}
      {people.map((_, i) => (
        <PersonStanding
          key={`person-${i}`}
          className={`absolute text-black opacity-20 select-none ${
            i % 2 === 0 ? "animate-float" : "animate-drift"
          }`}
          style={{
            width: `${80 + Math.random() * 80}px`,
            height: `${80 + Math.random() * 80}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Letras */}
      {letters.map((letter, i) => (
        <span
          key={`letter-${i}`}
          className={`absolute font-extrabold text-black opacity-20 select-none ${
            i % 2 === 0 ? "animate-float" : "animate-drift"
          }`}
          style={{
            fontSize: `${48 + Math.random() * 48}px`,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {letter}
        </span>
      ))}

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Background;
