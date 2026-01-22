function LetterBox({ letter, isRevealed }) {
  return (
    <div
      className={`w-12 h-16 border-b-4 border-black flex items-center justify-center mx-1 bg-white ${
        isRevealed ? "text-black" : "text-white"
      } font-extrabold text-4xl select-none`}
    >
      {isRevealed ? letter : ""}
    </div>
  );
}

export default LetterBox;