function Texto({ children, ...props }) {
  return (
    <h2
      className="text-2xl md:text-4xl font-extrabold text-white"
      style={{
        textShadow: `
          -1px -1px 0 #000,
           1px -1px 0 #000,
          -1px  1px 0 #000,
           1px  1px 0 #000
        `,
      }}
      {...props}
    >
      {children}
    </h2>
  );
}

export default Texto;
