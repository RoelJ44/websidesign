export default function h6({ children, addClass }) {
  return (
    <h6 className={`font-swiss font-bold text-base xl:text-lg ${addClass}`}>
      {children}
    </h6>
  );
}
