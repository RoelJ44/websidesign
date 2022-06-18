import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

import H2 from "../components/elementComponents/h2";
import Slide from "/components/slide";

export default function SlideShow() {
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        role="presentation"
        className="top-1/2 p-8 right-[5%] cursor-pointer -translate-y-1/2 absolute"
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon inverse size="2xl" icon={faAngleRight} />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        role="presentation"
        className="z-10 top-1/2 p-8 left-[5%] cursor-pointer -translate-y-1/2 absolute"
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="2xl" inverse />
      </div>
    );
  }
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // height: true,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 0,
        settings: {
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="relative bg-blue w-full item pt-20 pb-28 px-4">
      <H2 addClass="text-center text-white mb-16">
        Projecten waar wij trots op zijn
      </H2>
      <Slider {...settings}>
        <Slide
          imageUrl="/jewelsdesign.png"
          imageAlt="alt tekst"
          number="01"
          name="Jewelsdesgin"
          production="Design & Development"
          paragraph="Wij hebben voor jewelsdesign, een lokale edelsmid in Sittard deze prachtige website mogen maken."
          link="https://www.jewelsdesign.nl/"
        />
        <Slide
          imageUrl="/gedenk-sieraad.jpg"
          imageAlt="alt tekst"
          number="02"
          name="Gedenk-sieraad.nl"
          production="Webshop & Branding"
          paragraph="Voor gedenk-sieraad.nl, een webshop voor gedenksieraden, hebben wij deze webshop mogen ontwikkelen. Ook hebben wij de huisstijl gemaakt."
          link="https://gedenk-sieraad.nl/"
        />
      </Slider>
      <div className="absolute w-16 h-16 md:w-24 md:h-24 top-0 left-0 rotate-90">
        <Image
          className="w-full h-full"
          alt="decoratieve driehoek"
          src="/driehoek.svg"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute w-16 h-16 md:w-24 md:h-24 bottom-0 right-0 -rotate-90">
        <Image
          className="w-full h-full"
          alt="decoratieve driehoek"
          src="/driehoek.svg"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
