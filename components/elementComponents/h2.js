export default function h2({ children, addClass }) {
  return (
    <h2
      className={`font-swiss font-bold mb-6 leading-[45px] text-3xl md:text-4xl md:leading-[55px] ${addClass}`}
    >
      {children}
    </h2>
  );
}
