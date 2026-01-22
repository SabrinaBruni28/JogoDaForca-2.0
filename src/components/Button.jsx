import { useRef } from "react";

function Button({ onClick, children, ...props }) {
  const base = import.meta.env.BASE_URL;

  const clickSound = useRef(new Audio(`${base}assets/sounds/mouse_click.mp3`));
  const hoverSound = useRef(new Audio(`${base}assets/sounds/mouse_hover.mp3`));

  function play(sound) {
    sound.currentTime = 0;
    sound.play();
  }

  return (
    <button
      className="p-4 w-60 h-20 bg-blue-500 text-white text-2xl font-bold rounded hover:bg-blue-600 border-2 border-black"
      {...props}
      onClick={(e) => {
        play(clickSound.current);
        onClick?.(e);
      }}
      onMouseEnter={() => play(hoverSound.current)}
    >
      {children}
    </button>
  );
}

export default Button;
