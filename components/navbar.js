import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [showMobile, setShowMobile] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 ${
        navbar && !showMobile ? "bg-white opacity-80 shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between py-4 px-6 md:px-0 lg:px-20 2xl:px-16">
          <div className="w-8/12 lg:w-64 xl:w-80 flex z-50">
            <Link href="/">
              <a href="/">
                {!navbar && (
                  <>
                    {!showMobile && (
                      <Image
                        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                        src="/logo/logo_sideways_wit.svg"
                        width={300}
                        height={80}
                      />
                    )}
                    {showMobile && (
                      <Image
                        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                        src="/logo/logo_sideways.svg"
                        width={300}
                        height={80}
                      />
                    )}
                  </>
                )}
                {navbar && (
                  <Image
                    alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
                    src="/logo/logo_sideways.svg"
                    width={300}
                    height={80}
                  />
                )}
              </a>
            </Link>
          </div>
          {/* Pc Menu */}
          <ul className="hidden lg:flex items-center">
            <li className="mx-0 xl:mx-2 my-1">
              <Link href="/">
                <a
                  className={`relative py-2 px-8 ${
                    navbar
                      ? "text-blue before:bg-blue"
                      : "text-white before:bg-white"
                  } ${
                    router.pathname == "/"
                      ? "before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                      : ""
                  } `}
                >
                  Home
                </a>
              </Link>
            </li>
            <li
              role="presentation"
              className="mx-0 xl:mx-2 my-1 relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link href="/services">
                <a
                  className={`relative py-2 px-8 ${
                    navbar
                      ? "text-blue before:bg-blue"
                      : "text-white before:bg-white"
                  } ${
                    router.pathname == "/services"
                      ? "before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                      : ""
                  }`}
                >
                  Services
                  {navbar && (
                    <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                  )}
                  {!navbar && (
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="ml-2"
                      inverse
                    />
                  )}
                </a>
              </Link>
              {dropdown && (
                <div
                  role="presentation"
                  className="absolute top-6 left-1/2 -translate-x-1/2"
                  onMouseOver={() => setDropdown(true)}
                  onFocus={() => setDropdown(true)}
                >
                  <ul
                    className={`bg-white px-8 mt-6 py-2 ${
                      navbar ? "bg-white shadow" : "bg-white/[0.25] shadow"
                    }`}
                  >
                    <li
                      className={`whitespace-nowrap relative py-3 flex justify-center ${
                        navbar ? "text-blue" : "text-white"
                      }`}
                    >
                      <Link href="/services/website-ontwikkelen">
                        <a
                          className={`w-full py-2 text-center hover:opacity-60 transition-all duration-100 ${
                            navbar
                              ? "text-blue before:bg-blue"
                              : "text-white before:bg-white"
                          } ${
                            router.pathname == "/services/website-ontwikkelen"
                              ? "before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                              : ""
                          } `}
                        >
                          Website ontwikkelen
                        </a>
                      </Link>
                    </li>
                    <li
                      className={`whitespace-nowrap relative py-3 flex justify-center ${
                        navbar ? "text-blue" : "text-white"
                      }`}
                    >
                      <Link href="/services/webshop-ontwikkelen">
                        <a
                          className={`w-full py-2 text-center hover:opacity-60 transition-all duration-100 ${
                            navbar
                              ? "text-blue before:bg-blue"
                              : "text-white before:bg-white"
                          } ${
                            router.pathname == "/services/webshop-ontwikkelen"
                              ? "before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                              : ""
                          } `}
                        >
                          Webshop ontwikkelen
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="mx-0 xl:mx-2 my-1">
              <Link href="/projecten">
                <a
                  className={`relative py-2 px-8 ${
                    navbar
                      ? "text-blue before:bg-blue"
                      : "text-white before:bg-white"
                  } ${
                    router.pathname == "/projecten"
                      ? "before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                      : ""
                  } `}
                >
                  Projecten
                </a>
              </Link>
            </li>

            <li className="mx-8 my-1">
              <Link href="/contact">
                <a
                  className={`font-bold relative py-2 px-6 ${
                    navbar
                      ? "text-white bg-blue before:bg-white"
                      : "text-blue bg-white before:bg-blue"
                  } `}
                >
                  Contact
                  <div
                    className={`w-4 h-4 transition-all absolute bottom-0 right-0 opacity-100 -rotate-90 ${
                      navbar
                        ? "bottom-0 right-0 opacity-100 bg-blue"
                        : "-bottom-0 -right-0 opacity-100 rotate-0 bg-transparent"
                    }`}
                  >
                    <Image
                      alt="decoratieve driehoek"
                      src="/driehoek.svg"
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                </a>
              </Link>
            </li>
          </ul>
          {/* Mobile menu */}
          <ul
            onClick={() => setShowMobile(!showMobile)}
            className="navbar-mobile lg:hidden flex z-50 flex-col justify-center py-0 mr-3"
          >
            <li
              className={`w-9 h-[4px] rounded-full mb-1 mt-1 duration-200 bg-blue ${
                !navbar && !showMobile ? "bg-white" : ""
              } ${showMobile ? "-rotate-45 -mb-[7px]" : "rotate-0 mt-0"} `}
            ></li>
            <li
              className={`w-9 h-[4px] rounded-full mb-1 mt-1 duration-200 bg-blue ${
                !navbar && !showMobile ? "bg-white" : ""
              } ${showMobile ? "scale-0" : "scale-100"} `}
            ></li>
            <li
              className={`w-9 h-[4px] rounded-full mb-1 mt-1 duration-200 bg-blue ${
                !navbar && !showMobile ? "bg-white" : ""
              } ${showMobile ? "rotate-45 -mt-[8px]" : "rotate-0 mt-0"} `}
            ></li>
          </ul>
          {/* Mobile menu items */}
          <div
            className={`mobile-menu-items lg:hidden left-0 duration-300 opacity-95 z-40 w-full h-screen bg-white absolute ${
              showMobile ? "-top-0" : "-top-[100vh]"
            }`}
          >
            <ul className="w-screen h-screen flex flex-col items-center justify-center">
              <li className={`text-center w-full relative my-8`}>
                <Link href="/">
                  <a
                    className={`text-blue font-swiss font-bold textl-lg px-16 py-8 ${
                      router.pathname == "/"
                        ? "before:absolute before:mt-9 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1 before:bg-blue"
                        : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={`text-center w-full relative my-8`}>
                <Link href="/services">
                  <a
                    className={`text-blue font-swiss font-bold textl-lg px-16 py-8 ${
                      router.pathname == "/services"
                        ? "before:absolute before:mt-9 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1 before:bg-blue"
                        : ""
                    }`}
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li className={`text-center w-full relative my-8`}>
                <Link href="/projecten">
                  <a
                    className={`text-blue font-swiss font-bold textl-lg px-16 py-8 ${
                      router.pathname == "/projecten"
                        ? "before:absolute before:mt-9 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1 before:bg-blue"
                        : ""
                    }`}
                  >
                    Projecten
                  </a>
                </Link>
              </li>
              <li className={`text-center w-full relative my-8`}>
                <Link href="/contact">
                  <a
                    className={`text-blue font-swiss font-bold textl-lg px-16 py-8 ${
                      router.pathname == "/contact"
                        ? "before:absolute before:mt-9 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1 before:bg-blue"
                        : ""
                    }`}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
