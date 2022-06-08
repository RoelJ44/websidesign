import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faRightLong,
  faLeftLong,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import H1 from "../components/elementComponents/h1";
import H2 from "../components/elementComponents/h2";
import H3 from "../components/elementComponents/h3";
import H4 from "../components/elementComponents/h4";
import H5 from "../components/elementComponents/h5";
import H6 from "../components/elementComponents/h6";
import P from "../components/elementComponents/p";
import Line from "../components/elementComponents/line";
import SmallLine from "../components/elementComponents/smallLine";

export default function Layout({
  pageTitle,
  header,
  imageSrc,
  altText,
  description,
  breadCrumb1,
  breadCrumb2,
  nextPage,
  nextPageUrl,
  prevPage,
  prevPageUrl,
  children,
}) {
  const pageTitleLowerCase = pageTitle.toLowerCase();
  let breadCrumbToLowerCase;
  if (breadCrumb1) {
    breadCrumbToLowerCase = breadCrumb1.toLowerCase();
  }
  return (
    <>
      <Navbar />
      <div
        className={`item relative w-full ${
          pageTitle === "Home"
            ? "h-auto"
            : "h-96 md:h-[22rem] lg:h-[32rem] xl:h-[34rem]"
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            alt="alt tekst"
            src={`/hero_images/${imageSrc}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue opacity-60"></div>
          <div className="absolute w-28 h-28 lg:w-72 lg:h-72 bottom-0 right-0 -rotate-90">
            <Image src="/driehoek.svg" alt={altText} width={500} height={500} />
          </div>
          <div className="pt-44 pb-28 w-full px-4">
            <div className="container relative mx-auto lg:px-20 2xl:px-16">
              {pageTitle === "Home" && (
                <>
                  <div className="flex items-center mb-1">
                    <SmallLine addClass="bg-white" />
                    <H6 addClass="px-2 text-white">Een</H6>
                    <SmallLine addClass="bg-white" />
                  </div>
                  <H1 addClass="text-left text-white max-w-md lg:max-w-xl 2xl:max-w-2xl">
                    {header}
                  </H1>
                  <P addClass="max-w-sm text-white mb-16">{description}</P>
                  <div className="w-full h-auto text-xl pb-0 -ml-20 sm:-ml-12 lg:-ml-8 flex justify-center max-w-sm">
                    <a
                      href="#expertises"
                      className="animate-[bounce_2s_ease-in-out_infinite]"
                    >
                      <FontAwesomeIcon icon={faAnglesDown} inverse size="2xl" />
                    </a>
                  </div>
                </>
              )}
              {pageTitle !== "Home" && (
                <>
                  <H2 addClass="text-center mx-auto text-white max-w-md lg:mx-0 lg:max-w-lg lg:text-left xl:max-w-2xl">
                    {pageTitle}
                  </H2>
                  <Line addClass="mb-4" />
                  <P addClass="hidden lg:block text-lg max-w-xl text-white">
                    {description}
                  </P>
                </>
              )}
            </div>
          </div>
          {pageTitle !== "Home" && (
            <div className="absolute left-1/2 -translate-x-1/2 max-w-xs sm:max-w-sm w-full bottom-20 lg:max-w-none lg:left-0 lg:translate-x-0 lg:bottom-8">
              <div className="container mx-auto">
                <div className="text-base text-white relative text-center lg:text-right lg:px-64 2xl:absolute 2xl:right-80 2xl:bottom-0 2xl:px-0">
                  <div className="inline">
                    <Link href="/">
                      <a className="hover:opacity-70 font-swiss font-bold tracking-wider duration-100">
                        Home
                      </a>
                    </Link>
                  </div>
                  {!breadCrumb1 && (
                    <div className="inline">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        inverse
                        className="mx-4 -mb-px"
                      />
                      <div className="inline font-swiss tracking-wider">{pageTitle}</div>
                    </div>
                  )}
                  {breadCrumb1 && !breadCrumb2 &&(
                    <div className="inline">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        inverse
                        className="mx-4 -mb-px"
                      />
                      <div className="inline font-swiss tracking-wider">{breadCrumb1}</div>
                    </div>
                  )}
                  {breadCrumb1 && breadCrumb2 &&(
                    <div className="inline">
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        inverse
                        className="mx-4 -mb-px"
                      />
                      <Link href={`/${breadCrumbToLowerCase}`}>
                        <a className="hover:opacity-70 font-swiss font-bold tracking-wider duration-100">
                          {breadCrumb1}
                        </a>
                      </Link>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        inverse
                        className="mx-4 -mb-px"
                      />
                      <div className="inline font-swiss tracking-wider">{breadCrumb2}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {children}
      { nextPage && 
        <div className="hidden md:block mx-auto px-10 pl-[9.5rem] 2xl:container">
          <div className="w-full relative border-b-4 h-12 border-blue py-2">
            {!prevPage &&
              <Link
                href={`${nextPageUrl}`}
              >
                <a className="relative text-blue font-swiss font-bold text-lg px-4 float-right duration-100 hover:opacity-50">
                  {nextPage}
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className="ml-2 -mb-px"
                    size="lg"
                  ></FontAwesomeIcon>
                </a>
              </Link>            
            }
            {prevPage && 
              <div>
                <Link
                  href={`${prevPageUrl}`}
                >
                  <a className="relative text-blue font-swiss font-bold text-lg px-4 float-left duration-100 hover:opacity-50">
                    <FontAwesomeIcon
                      icon={faLeftLong}
                      className="mr-2 -mb-px"
                      size="lg"
                    ></FontAwesomeIcon>
                    {prevPage}
                  </a>
                </Link>  
                <Link
                  href={`${nextPageUrl}`}
                >
                  <a className="relative text-blue font-swiss font-bold text-lg px-4 float-right duration-100 hover:opacity-50">
                    {nextPage}
                    <FontAwesomeIcon
                      icon={faRightLong}
                      className="ml-2 -mb-px"
                      size="lg"
                    ></FontAwesomeIcon>
                  </a>
                </Link>  
              </div>
            }
          </div>
        </div>
      }
      <Footer />
    </>
  );
}
