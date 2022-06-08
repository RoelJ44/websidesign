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

export default function Form() {
  // Handle inputs
  const [inputs, setInputs] = useState({});
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
      setCheckboxErrorValue("");
      return;
    }
    setCheckboxErrorValue(
      "U dient akkoord te gaan met de algemene voorwaarden"
    );
  };

  const handleForm = () => {
    handleName();
    handleEmail();
    handlePhone();
    handleMessage();
    handleCheckbox();
    if (
      nameError === false &&
      emailError === false &&
      phoneError === false &&
      messageError === false
    ) {
      console.log(inputs);
      handleSubmit(event, inputs);
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...name,
      }),
    })
      .then(() => alert("Success!"))
      // .then(function () {
      //   // window.location.assign("/");
      //   console.log("yaay");
      // })
      .catch((error) => alert(error));
  };

  return (
    <form name="contact-form" id="contact-form" data-netlify="true">
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
            onClick={handleForm}
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
  );
}
