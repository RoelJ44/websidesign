export default function h3({ children, addClass }) {
  return (
    <h3
      className={`font-swiss font-bold mb-2 leading-[45px] text-2xl md:leading-[55px] xl:text-3xl xl:leading-[45px] ${addClass}`}
    >
      {children}
    </h3>
  );
}
