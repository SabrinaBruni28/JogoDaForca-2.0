function Title(props) {
  return (
    <h1
      className="text-8xl font-extrabold text-white mb-8 p-4"
      style={{
        WebkitTextStroke: "2px black",
      }}
      {...props}
    >
      {props.children}
    </h1>
  );
}
export default Title;
