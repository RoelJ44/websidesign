import React, { useState } from "react";
import Image from "next/image";

import Select from "react-select";

import H2 from "../components/elementComponents/h2";
import H4 from "../components/elementComponents/h4";
import Layout from "../components/layout";

const options = [
  { value: "all", label: "Alle projecten" },
  { value: "design", label: "Design" },
  { value: "development", label: "Development" },
  { value: "webshop", label: "Webshop installatie" },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

export default function Projecten() {
  const projecten = [
    {
      name: "Jewelsdesign",
      image: "/project_images/jewelsdesign.jpg",
      imageAlt: "sad",
      link: "https://www.jewelsdesign.nl/pages/home/",
      category: ["all", "design", "development"],
    },
    {
      name: "Gedenk-sieraad.nl",
      image: "/project_images/gedenk-sieraad.jpg",
      imageAlt: "sad",
      link: "https://gedenk-sieraad.nl/",
      category: ["all", "webshop"],
    },
    // {
    //   name: "YourYinYang",
    //   image: "/project_images/jewelsdesign.png",
    //   imageAlt: "sad",
    //   link: "https://www.jewelsdesign.nl/pages/home/",
    //   category: ["all", "development"],
    // },
  ];

  const [filter, setFilter] = useState("all");

  const handleChange = (selectedOption) => {
    setFilter(selectedOption.value);
  };

  return (
    <Layout
      pageTitle="Projecten"
      imageSrc="projecten.jpg"
      altText="altText"
      description="Benieuwd naar wat wij voor jou zouden kunnen beteken? Bekijk hieronder eerdere projecten"
      breadCrumb1="Projecten"
      nextPage="Neem contact met ons op"
      nextPageUrl="/contact"
      prevPage="Terug naar onze services"
      prevPageUrl="/services"
    >
      <div className="item container mx-auto mt-28">
        <div className="flex justify-between items-start lg:items-end mb-10 max-w-md mx-auto px-8 sm:max-w-2xl md:max-w-none">
          <H2 addClass="text-blue w-auto ">Projecten</H2>
          {/* Mobile filters */}
          <div className="mt-3 lg:hidden">
            <p className="inline-block mr-2 mb-3 sm:mb-0 w-full float-right text-right sm:w-auto sm:text-left sm:float-none">
              Type project:
            </p>
            <div className="inline-block float-right sm:float-none">
              <Select
                className="min-w-[200px]"
                styles={customStyles}
                defaultValue={options[0]}
                classNamePrefix="reactSelect"
                options={options}
                onChange={handleChange}
                components={{
                  IndicatorSeparator: () => null,
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  border: "3px solid #000057",
                  colors: {
                    ...theme.colors,
                    primary25: "#000057",
                    primary: "#000057",
                  },
                })}
              />
            </div>
            <div className="clear-both"></div>
          </div>
          {/* Pc filters */}
          <nav className="hidden lg:block px-4">
            <ul className="mb-10">
              <li
                className="inline-block mx-2 px-4 text-darkblue cursor-pointer duration-75 hover:opacity-50"
                role="presentation"
                onClick={() => setFilter("all")}
              >
                Alle projecten
              </li>
              <li
                className="inline-block mx-2 px-4 text-darkblue cursor-pointer duration-75 hover:opacity-50"
                role="presentation"
                onClick={() => setFilter("design")}
              >
                Design
              </li>
              <li
                className="inline-block mx-2 px-4 text-darkblue cursor-pointer duration-75 hover:opacity-50"
                role="presentation"
                onClick={() => setFilter("development")}
              >
                Development
              </li>
              <li
                className="inline-block mx-2 px-4 text-darkblue cursor-pointer duration-75 hover:opacity-50"
                role="presentation"
                onClick={() => setFilter("webshop")}
              >
                Webshop installatie
              </li>
            </ul>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projecten
            .filter((project) => project.category.includes(filter))
            .map((project) => (
              <div
                key={project.name}
                className="w-80 mx-auto float-left sm:w-64 md:w-64 xl:w-72 2xl:w-96 h-auto mb-20"
              >
                <div className="group">
                  <a
                    className="h-full w-full relative"
                    target="_blank"
                    rel="noreferrer"
                    href={`${project.link}`}
                  >
                    <div className="w-full h-auto mb-6 transition-all group-hover:scale-110">
                      <Image
                        src={project.image}
                        alt="asd"
                        width={500}
                        height={275}
                        objectFit="contain"
                      />
                    </div>
                    <H4 addClass="text-blue text-center">{project.name}</H4>
                    <div className="w-full flex items-center">
                      <button
                        href={`${project.link}`}
                        className="py-2 px-8 font-swiss font-bold mx-auto relative w-auto bg-blue text-white"
                      >
                        Site bekijken
                        <div className="w-5 h-5 absolute -bottom-px -right-px -rotate-90">
                          <Image
                            src="/driehoek.svg"
                            alt="asd"
                            width={100}
                            height={100}
                          />
                        </div>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          <div className="clear-both"></div>
        </div>
      </div>
    </Layout>
  );
}
