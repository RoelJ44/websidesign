export default function h1({ children, addClass }) {
  return (
    <h1
      className={`font-swiss font-bold mb-6 leading-[45px] text-3xl sm:text-4xl sm:leading-[55px] 2xl:text-6xl 2xl:leading-[75px] ${addClass}`}
    >
      {children}
    </h1>
  );
}
