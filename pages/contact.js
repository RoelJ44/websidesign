import Image from "next/image";
import Head from "next/head";

import H1 from "../components/elementComponents/h1";
import H2 from "../components/elementComponents/h2";
import H3 from "../components/elementComponents/h3";
import H4 from "../components/elementComponents/h4";
import H5 from "../components/elementComponents/h5";
import H6 from "../components/elementComponents/h6";
import P from "../components/elementComponents/p";
import Line from "../components/elementComponents/line";
import SmallLine from "../components/elementComponents/smallLine";
import Button from "../components/elementComponents/button";
import Layout from "../components/layout";
import Form from "../components/form";

export default function Projecten() {
  return (
    <>
      <Head>
        <title>Contact - websidesign</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout
        pageTitle="Contact"
        imageSrc="contact.jpg"
        altText="altText"
        // description="We horen graag het graag als je interesse hebt, je kunt ons altijd mailen of bellen. Ander vul hieronder het formulier in"
        // description="Wil je contact opnemen? We horen graag van je! Hier is hoe je ons kunt bereiken"
        // description="Het is meer dan alleen een website, wij helpen jou met je digitale aanwezigheid."
        description="Laten we het gesprek starten. Vertel ons kort wie je bent, we nemen zo snel mogelijk contact met je op."
        breadCrumb1="Contact"
      >
        <div className="item container mx-auto max-w-7xl">
          <div className="mb-20 md:mb-0 w-full md:px-12 md:w-7/12 md:float-left">
            <Form />
          </div>
          <div className="w-full sm:w-8/12 mx-auto md:px-12 md:w-5/12 md:float-left">
            <div className="mb-10 max-w-md mx-auto sm:float-left sm:w-1/2 md:mt-10 md:w-full lg:mt-0">
              <H4 addClass="text-blue w-10/12 mx-auto sm:mx-0 md:mx-auto mb-3">
                Contactgegevens
              </H4>
              <ul className="w-10/12 mx-auto sm:mx-0 md:mx-auto">
                <li className="mb-2 text-darkblue">+31 6 3 63 588 63</li>
                <li className="mb-2 text-darkblue">info@websidesign.nl</li>
                <li className="mb-2 text-darkblue">www.websidesign.nl</li>
              </ul>
            </div>
            <div className="max-w-md mx-auto sm:float-left sm:w-1/2 md:w-full">
              <H4 addClass="text-blue w-10/12 mx-auto sm:mx-0 md:mx-auto mb-3">
                Locatie
              </H4>
              <ul className="w-10/12 mx-auto sm:mx-0 md:mx-auto">
                <li className="mb-2 text-darkblue">Straatsburglaan 10</li>
                <li className="mb-2 text-darkblue">6137 JC Sittard-Geleen</li>
              </ul>
            </div>
            <div className="clear-both"></div>
          </div>
          <div className="clear-both"></div>
        </div>
      </Layout>
    </>
  );
}
