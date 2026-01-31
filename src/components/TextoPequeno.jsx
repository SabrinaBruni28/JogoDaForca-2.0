import Texto from "./Texto";

function TextoPequeno({ children, ...props }) {
  return (
    <Texto className="text-xl md:text-2xl font-extrabold text-white" {...props}>
      {children}
    </Texto>
  );
}

export default TextoPequeno;
