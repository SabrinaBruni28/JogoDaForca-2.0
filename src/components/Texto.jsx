function Texto(props) {
  return (
    <h2
      className="text-4xl font-extrabold text-white mb-8 p-2"
      style={{
        WebkitTextStroke: "2px black",
      }}
      {...props}
    >
      {props.children}
    </h2>
  );
}
export default Texto;
