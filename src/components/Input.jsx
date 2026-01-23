function Input(props) {
  return (
    <input
      className="w-50 p-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      {... props}
    />
  );
}

export default Input;