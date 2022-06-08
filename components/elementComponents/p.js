export default function p({ children, addClass }) {
  return <p className={`font-regular text-lg mb-8 ${addClass}`}>{children}</p>;
}
