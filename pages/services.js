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
import Card from "../components/card";
import CardLeft from "../components/cardLeft";
import CardRight from "../components/cardRight";

export default function Services({}) {
  return (
    <Layout
      pageTitle="Onze services"
      imageSrc="services.jpg"
      altText="altText"
      description="Onze expertise gaat zo ver als het ontwerpen, en het realiseren van een website / webshop."
      breadCrumb1="Services"
      nextPage="Bekijk onze projecten"
      nextPageUrl="/projecten"
      prevPage="Terug naar de home pagina"
      prevPageUrl="/"
    >
      <div className="item container mx-auto px-4">
        <CardLeft
          addClass="subItem"
          title="Website ontwikkelen"
          buttonLink="/services/website-ontwikkelen"
          paragraph="Wij kunnen een website ontwerp maken, een ontwerp realiseren of een gehele website op maat maken"
          imageLink="/website-ontwikkelen.jpg"
        />
        <CardRight
          title="Webshop ontwikkelen"
          buttonLink="/services/webshop-ontwikkelen"
          paragraph="Wil je aan je bestaande website een shop toevoegen? of een geheel nieuwe webshop?"
          imageLink="/webshop-ontwikkelen.jpg"
        />
        <div className="clear-both" />
      </div>
    </Layout>
  );
}