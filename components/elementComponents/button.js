import Link from "next/link";
import Image from "next/image";

export default function Button({ addClass, pageLink, children }) {
  return (
    <Link href={pageLink}>
      <a
        href={pageLink}
        className={`relative w-auto px-6 py-2.5 h-0.5 md:h-1 bg-white text-blue font-swiss font-bold ${addClass}`}
      >
        <div className="absolute w-4 h-4 bottom-0 right-0 -rotate-90">
          <Image
            src="/driehoek-blauw.svg"
            alt="Decoratieve driehoek"
            width={100}
            height={100}
          />
        </div>
        {children}
      </a>
    </Link>
  );
}
