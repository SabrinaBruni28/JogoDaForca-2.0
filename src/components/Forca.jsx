function Forca({ errors = 0 }) {
  return (
    <svg width="220" height="260" viewBox="0 0 220 260">
      {/* Forca (estrutura) */}
      <line x1="20" y1="240" x2="200" y2="240" stroke="black" strokeWidth="6" />
      <line x1="60" y1="240" x2="60" y2="30" stroke="black" strokeWidth="6" />
      <line x1="60" y1="30" x2="150" y2="30" stroke="black" strokeWidth="6" />
      <line x1="150" y1="30" x2="150" y2="60" stroke="black" strokeWidth="6" />

      {/* Cabeça */}
      {errors >= 1 && (
        <circle cx="150" cy="85" r="25" stroke="black" strokeWidth="6" fill="none" />
      )}

      {/* Corpo */}
      {errors >= 2 && (
        <line x1="150" y1="110" x2="150" y2="170" stroke="black" strokeWidth="6" />
      )}

      {/* Braço esquerdo */}
      {errors >= 3 && (
        <line x1="150" y1="125" x2="120" y2="150" stroke="black" strokeWidth="6" />
      )}

      {/* Braço direito */}
      {errors >= 4 && (
        <line x1="150" y1="125" x2="180" y2="150" stroke="black" strokeWidth="6" />
      )}

      {/* Perna esquerda */}
      {errors >= 5 && (
        <line x1="150" y1="170" x2="125" y2="210" stroke="black" strokeWidth="6" />
      )}

      {/* Perna direita */}
      {errors >= 6 && (
        <line x1="150" y1="170" x2="175" y2="210" stroke="black" strokeWidth="6" />
      )}
    </svg>
  );
}

export default Forca;
