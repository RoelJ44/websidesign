export default function h4({ children, addClass }) {
  return (
    <h4
      className={`font-swiss font-bold mb-2 text-xl xl:text-2xl xl:leading-[45px] ${addClass}`}
    >
      {children}
    </h4>
  );
}
