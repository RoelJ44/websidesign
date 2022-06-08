import Image from "next/image";

import H1 from "../components/elementComponents/h1";
import H2 from "../components/elementComponents/h2";
import H3 from "../components/elementComponents/h3";
import H4 from "../components/elementComponents/h4";
import H5 from "../components/elementComponents/h5";
import H6 from "../components/elementComponents/h6";
import P from "../components/elementComponents/p";
import Line from "../components/elementComponents/line";
import SmallLine from "../components/elementComponents/smallLine";

export default function SlideShow({
  imageUrl,
  imageAlt,
  number,
  name,
  production,
  paragraph,
  link,
}) {
  return (
    <div className="relative bg-blue w-full">
      <div className="w-full block">
        <div className="relative container mx-auto">
          <div className="relative h-40 max-w-sm mx-auto sm:h-44 md:max-w-none md:ml-12 md:h-auto md:w-1/2 md:float-left lg:ml-36 lg:w-5/12 xl:w-4/12 xl:ml-64 2xl:ml-80">
            <div className="hidden w-full h-full md:block">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={1920}
                height={1920}
                objectFit="cover"
              />
            </div>
            <div className="w-full h-full md:hidden">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={1920}
                height={1920}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="bg-black absolute left-0 top-0 opacity-50 w-full h-full md:h-[calc(100%-6px)]"></div>
            <div className="hidden md:block absolute top md:w-24 md:h-24 md:bottom-0 md:left-0">
              <Image
                className="w-full h-full"
                alt="decoratieve driehoek"
                src="/driehoek-blauw.svg"
                width={500}
                height={500}
              />
            </div>
            <div className="md:hidden absolute top w-12 h-12 sm:w-16 sm:h-16 -top-px right-0 rotate-180">
              <Image
                className="w-full h-full"
                alt="decoratieve driehoek"
                src="/driehoek-blauw.svg"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="relative text-white -mt-[8.5rem] sm:-mt-36 md:w-1/2 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2">
            <div className="mx-[20%] sm:ml-[24%] md:ml-0">
              <div className="flex items-center mb-2 md:mb-0">
                <SmallLine addClass="bg-white" />
                <H6 addClass="px-2">{number}</H6>
                <SmallLine addClass="bg-white" />
              </div>
              <H3 addClass="md:text-3xl xl:text-4xl">{name}</H3>
              <H5 addClass="mb-6">{production}</H5>
            </div>
            <div className="relative mt-14 md:mt-0">
              <P addClass="max-w-sm text-center px-4 mx-auto md:pl-0 md:text-left md:mx-0 mb-10">
                {paragraph}
              </P>
              <div className="flex items-center md:block">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={link}
                  className="relative mx-auto px-6 py-2.5 font-swiss font-bold bg-white text-blue hover:opacity-50 transition-all"
                >
                  Site bekijken
                  <div className="w-4 h-4 absolute right-0 bottom-0 rotate-90 bg-blue">
                    <Image
                      alt=""
                      src="/driehoek.svg"
                      width={500}
                      height={500}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
      </div>
    </div>
  );
}
