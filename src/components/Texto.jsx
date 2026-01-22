function Texto(props) {
  return (
    <h2
      className="text-4xl font-extrabold text-white"
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
