import useSound from "../hooks/useSound";

function Button({ onClick, children, ...props }) {
  const clickSound = useSound("mouse_click");
  const hoverSound = useSound("mouse_hover");

  return (
    <button
      className="p-2 w-60 h-20 bg-blue-500 text-white text-2xl font-bold rounded hover:bg-blue-600 border-2 border-black"
      {...props}
      onClick={(e) => {
        clickSound.play();
        onClick?.(e);
      }}
      onMouseEnter={() => hoverSound.play()}
    >
      {children}
    </button>
  );
}

export default Button;
