import Image from "next/image";

import H2 from "../components/elementComponents/h2";
import H3 from "../components/elementComponents/h3";
import P from "../components/elementComponents/p";
import SmallLine from "../components/elementComponents/smallLine";
import Button from "../components/elementComponents/button";

export default function Card({
  title,
  paragraph,
  imageLink,
  addClass,
  children,
}) {
  return (
    <div
      className={`relative mx-auto max-w-sm ${addClass}`}
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="300"
      data-sal-easing="ease-out"
    >
      <div className="w-full h-full mx-auto">
        <Image
          src={imageLink}
          alt="sdadf"
          width={1000}
          height={800}
          objectFit="cover"
        />
      </div>
      <div className="relative -mt-24 md:-mt-20 bg-blue text-white w-[calc(100%-50px)] mx-auto p-10">
        <H3>{title}</H3>
        <SmallLine addClass="bg-white mb-3" />
        <P>{paragraph}</P>
        {children}
        <div className="absolute w-16 h-16 bottom-0 right-0 -rotate-90">
          <Image
            className="w-full h-full"
            alt="decoratieve driehoek"
            src="/driehoek.svg"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
