import Image from "next/image";

import H2 from "./elementComponents/h2";
import H3 from "./elementComponents/h3";
import H4 from "./elementComponents/h4";
import P from "./elementComponents/p";
import SmallLine from "./elementComponents/smallLine";
import Button from "./elementComponents/button";

export default function CardLeft({ title, paragraph, iconLink, addClass }) {
  return (
    <div
      className={`relative w-full mx-auto mb-16 lg:mb-0 lg:mx-8 bg-white shadow-2xl px-8 pt-8 lg:w-96 max-w-sm ${addClass}`}
    >
      <H3 addClass="text-blue max-w-[70%] lg:max-w-[125px] lg:leading-[40px]">
        {title}
      </H3>
      <SmallLine addClass="bg-blue mb-4" />
      <P addClass="text-darkblue mb-0">{paragraph}</P>
      <div className="absolute flex items-center justify-center text-blue top-0 right-0 w-32 h-32">
        <Image src={iconLink} alt="sad" width={50} height={50} />
      </div>
    </div>
  );
}
