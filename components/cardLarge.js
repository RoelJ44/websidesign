import Image from "next/image";

import H2 from "./elementComponents/h2";
import H3 from "./elementComponents/h3";
import H4 from "./elementComponents/h4";
import P from "./elementComponents/p";
import SmallLine from "./elementComponents/smallLine";
import Button from "./elementComponents/button";

export default function CardLeft({ title, paragraph, imageLink, addClass }) {
  return (
    <div
      className={`relative mx-auto max-w-sm md:max-w-3xl lg:max-w-none ${addClass}`}
    >
      <div className="relative shadow-lg z-10 p-8 bg-white w-10/12 mx-auto -mb-12 md:mb-0 md:w-5/12 md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 lg:p-12 lg:w-4/12 lg:right-[6.5rem] xl:w-[calc(100%/12*3.5)] xl:right-60 2xl:w-3/12 2xl:right-[21rem]">
        <H3 addClass="text-blue">{title}</H3>
        <SmallLine addClass="bg-blue mb-4" />
        <P addClass="text-darkblue mb-0">{paragraph}</P>
      </div>
      <div className="w-full mx-auto md:h-full md:w-8/12 md:float-left lg:w-6/12 lg:ml-[6.5rem] xl:w-[calc(100%/12*4.5)] xl:ml-60 2xl:w-4/12 2xl:ml-[21rem]">
        <Image
          src={imageLink}
          alt="sdadf"
          width={800}
          height={1000}
          objectFit="cover"
        />
      </div>
      <div className="clear-both"></div>
    </div>
  );
}
