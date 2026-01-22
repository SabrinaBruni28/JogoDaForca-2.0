function OptionBox({ optionText, onSelect, disabled, status }) {
  const base =
    "text-2xl font-semibold py-4 px-8 rounded-lg shadow-md transition";

  const styles = {
    default: "bg-white hover:bg-black hover:text-white cursor-pointer",
    correct: "bg-green-500 text-white cursor-not-allowed",
    wrong: "bg-gray-400 text-white cursor-not-allowed",
  };

  return (
    <button
      className={`${base} ${styles[status]}`}
      style={{
        WebkitTextStroke: status === "default" ? "1px black" : "0",
      }}
      disabled={disabled}
      onClick={() => onSelect(optionText)}
    >
      {optionText}
    </button>
  );
}

export default OptionBox;
