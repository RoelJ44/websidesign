export default function h5({ children, addClass }) {
  return (
    <h5 className={`font-swiss font-bold mb-2 text-lg xl:text-xl ${addClass}`}>
      {children}
    </h5>
  );
}
