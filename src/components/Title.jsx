function Title({ children, ...props }) {
  return (
    <h1
      className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white mb-8 p-4 text-center break-words"
      style={{
        textShadow: `
          -2px -2px 0 #000,
           2px -2px 0 #000,
          -2px  2px 0 #000,
           2px  2px 0 #000
        `,
      }}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Title;
