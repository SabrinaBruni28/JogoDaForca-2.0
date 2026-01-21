function Button(props) {
  return (
    <button
      className="p-4 px-4 py-2 w-60 h-20 bg-blue-500 text-white text-2xl font-bold rounded hover:bg-blue-600 border-2 border-black"
      {...props}
    >
      {props.children}
    </button>
  );
}
export default Button;
