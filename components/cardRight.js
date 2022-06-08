import Image from "next/image";

import H2 from "./elementComponents/h2";
import H3 from "./elementComponents/h3";
import P from "./elementComponents/p";
import SmallLine from "./elementComponents/smallLine";
import Button from "./elementComponents/button";

export default function CardRight({
  title,
  paragraph,
  imageLink,
  addClass,
  children,
  buttonLink,
}) {
  return (
    <div className={`relative mx-auto max-w-sm md:max-w-3xl ${addClass}`}>
      <div className="w-full h-full mx-auto md:w-7/12 md:mr-[calc(100%/24)] md:float-right lg:mr-[calc(100%/24)]">
        <Image
          src={imageLink}
          alt="sdadf"
          width={1080}
          height={1080}
          objectFit="cover"
        />
        <div className="absolute top-0 left-0 rotate-90 w-20 h-20 md:hidden">
          <Image src="/driehoek.svg" alt="asdf" width={500} height={500} />
        </div>
        <div className="hidden md:block absolute bottom-0 right-0 w-32 h-32 -rotate-90">
          <Image src="/driehoek.svg" alt="asdf" width={500} height={500} />
        </div>
      </div>
      <div className="relative -mt-36 sm:-mt-28 bg-blue text-white w-[calc(100%-50px)] mx-auto p-10 md:pl-12 md:pr-8 md:w-[calc(100%/12*5.5)] md:mt-0 md:float-right md:absolute md:top-1/2 md:right-1/2 lg:w-5/12 lg:right-[calc(100%/2+(100%/24))] md:-translate-y-1/2">
        <H3>{title}</H3>
        <SmallLine />
        <P>{paragraph}</P>
        <Button pageLink={buttonLink}>meer lezen</Button>
        <div className="absolute w-16 h-16 bottom-0 right-0 md:top-0 md:left-0 -rotate-90 md:rotate-90">
          <Image
            className="w-full h-full"
            alt="decoratieve driehoek"
            src="/driehoek.svg"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}
