import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import H1 from "../components/elementComponents/h1";
import H2 from "../components/elementComponents/h2";
import H3 from "../components/elementComponents/h3";
import H4 from "../components/elementComponents/h4";
import H5 from "../components/elementComponents/h5";
import H6 from "../components/elementComponents/h6";
import P from "../components/elementComponents/p";
import Line from "../components/elementComponents/line";
import Layout from "../components/layout";
import Card from "../components/card";
import SliderShow from "../components/slideShow";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Form() {
  // Handle inputs
  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);
  const [nameErrorValue, setNameErrorValue] = useState("");
  let nameError = true;
  const [emailErrorValue, setEmailErrorValue] = useState("");
  let emailError = true;
  const [phoneErrorValue, setPhoneErrorValue] = useState("");
  let phoneError = true;
  const [messageErrorValue, setMessageErrorValue] = useState("");
  let messageError = true;
  const [checkboxErrorValue, setCheckboxErrorValue] = useState("");
  let checkboxError = true;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Single inputs checks
  const handleName = () => {
    if (inputs.name === "" || inputs.name === undefined) {
      nameError = true;
      setNameErrorValue("vul een naam in");
      return;
    }
    if (inputs.name !== "") {
      nameError = false;
      setNameErrorValue("");
    }
  };
  const handleEmail = () => {
    if (inputs.email === "" || inputs.email === undefined) {
      emailError = true;
      setEmailErrorValue("vul een email in");
      return;
    }
    if (inputs.email !== "") {
      emailError = false;
      setEmailErrorValue("");
    }
  };
  const handlePhone = () => {
    if (inputs.phone === "" || inputs.phone === undefined) {
      phoneError = true;
      setPhoneErrorValue("vul een telefoonnummer in");
      return;
    }
    if (inputs.phone !== "") {
      phoneError = false;
      setPhoneErrorValue("");
    }
  };
  const handleMessage = () => {
    messageError = false;
    setMessageErrorValue("");
  };
  const handleCheckbox = () => {
    if (checkbox.checked) {
      checkboxError = false;
      setCheckboxErrorValue("");
      return;
    }
    setCheckboxErrorValue(
      "U dient akkoord te gaan met de algemene voorwaarden"
    );
  };

  const handleForm = (event) => {
    handleName();
    handleEmail();
    handlePhone();
    handleMessage();
    handleCheckbox();
    if (
      nameError === false &&
      emailError === false &&
      phoneError === false &&
      messageError === false &&
      checkboxError === false
    ) {
      setLoader(true);
      setStatus("");
      handleSubmit(event, inputs);
    }
  };

  const handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "WebsidesignContactForm", ...inputs }),
    })
      .then(function () {
        setLoader(false);
        setStatus("Verzonden");
      })
      .catch((error) => alert(error));
    event.preventDefault();
  };

  return (
    <>
      {status && <H2 addClass="text-[#22C55E] mb-12">{status}</H2>}
      {loader && (
        <div className="flex items-center mb-12">
          <svg
            role="status"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="#000057"
            color="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="ml-1">Aan het laden...</span>
        </div>
      )}
      <form name="WebsidesignContactForm" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="WebsidesignContactForm" />
        <div className="w-full md:top-20 max-w-md mx-auto sm:max-w-none">
          <div className="relative mb-8 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full lg:w-[47.5%] lg:mr-[2.5%] lg:inline-block">
            <input
              onChange={handleChange}
              className="text-blue peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
              type="text"
              id="name"
              name="name"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="cursor-auto font-bold peer-placeholder-shown:font-normal peer-focus:font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-50 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm"
            >
              Naam *
            </label>
            <p className="text-[red] w-full">{nameErrorValue}</p>
          </div>
          <div className="relative mb-8 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full lg:w-[47.5%] lg:ml-[2.5%] lg:inline-block">
            <input
              onChange={handleChange}
              className="text-blue peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
              type="text"
              id="phone"
              name="phone"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="cursor-auto font-bold peer-placeholder-shown:font-normal peer-focus:font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-50 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm"
            >
              Telefoonnummer *
            </label>
            <p className="text-[red] w-full">{phoneErrorValue}</p>
          </div>
          <div className="relative mb-8 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full">
            <input
              onChange={handleChange}
              className="text-blue peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
              type="text"
              id="email"
              name="email"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="cursor-auto font-bold peer-placeholder-shown:font-normal peer-focus:font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:opacity-50 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm"
            >
              Email *
            </label>
            <p className="text-[red] w-full">{emailErrorValue}</p>
          </div>
          <div className="relative mb-8 w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full">
            <textarea
              onChange={handleChange}
              className="text-blue peer border-b-2 border-blue py-2 px-2 mb-1 w-full placeholder-transparent focus:outline-none"
              type="text"
              rows={3}
              id="message"
              name="message"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="cursor-auto font-bold absolute ml-2 left-0 text-blue opacity-100 -top-4 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-placeholder-shown:text-base peer-placeholder-shown:opacity-50 peer-focus:-top-4 peer-focus:opacity-100 peer-focus:text-sm peer-focus:font-bold"
            >
              Bericht
            </label>
            <p className="text-[red] w-full">{messageErrorValue}</p>
          </div>

          <div className="w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full mb-8 -mt-4">
            <input
              className="text-blue peer border-b-2 mr-2 border-blue py-2 px-2 mb-1"
              type="checkbox"
              id="checkbox"
              name="checkbox"
            />
            <label htmlFor="checkbox" className="cursor-auto text-black">
              Ik heb de{" "}
              <Link href="/algemene-voorwaarden">
                <a className="font-bold text-blue font-swiss" target="_blank">
                  Algemene voorwaarden
                </a>
              </Link>{" "}
              en{" "}
              <Link href="/privacy-verklaring">
                <a className="font-bold text-blue font-swiss" target="_blank">
                  Privacy verklaring
                </a>
              </Link>{" "}
              gelezen en ga hiermee akkoord *
            </label>
            <p className="text-[red] w-full">{checkboxErrorValue}</p>
          </div>

          <div className="w-10/12 sm:w-8/12 mx-auto md:ml-0 md:w-full">
            <button
              onClick={() => {
                handleForm(event);
                setLoader(false);
                setStatus("");
              }}
              type="button"
              className="relative bg-blue text-white w-auto px-6 py-2.5 font-swiss font-bold"
            >
              Verzenden
              <div className="absolute top-[60%] right-0 w-8 h-8 -rotate-90">
                <Image src="/driehoek.svg" alt="asd" width={100} height={100} />
              </div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
