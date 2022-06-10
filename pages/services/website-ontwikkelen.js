import Image from "next/image";
import Head from "next/head";

import H1 from "../../components/elementComponents/h1";
import H2 from "../../components/elementComponents/h2";
import H3 from "../../components/elementComponents/h3";
import H4 from "../../components/elementComponents/h4";
import H5 from "../../components/elementComponents/h5";
import H6 from "../../components/elementComponents/h6";
import P from "../../components/elementComponents/p";
import Line from "../../components/elementComponents/line";
import SmallLine from "../../components/elementComponents/smallLine";
import Button from "../../components/elementComponents/button";
import Layout from "../../components/layout";
import Card from "../../components/card";
import CardSmall from "../../components/cardSmall";
import CardLarge from "../../components/cardLarge";
import CardLeft from "../../components/cardLeft";
import CardRight from "../../components/cardRight";

export default function Services({}) {
  return (
    <Layout
      pageTitle="Website ontwikkelen"
      imageSrc="website-ontwikkelen.jpg"
      altText="altText"
      description="Heb je een website nodig die bij jou bedrijf past en je klanten op de juiste manier aanspreekt? We denken graag met je mee"
      breadCrumb1="Services"
      breadCrumb2="Website ontwikkelen"
      nextPage="Contact opnemen"
      nextPageUrl="/contact"
      prevPage="Terug naar onze services"
      prevPageUrl="/services"
    >
      <div className="item container mx-auto px-4">
        <CardLarge
          title="Website ontwikkelen"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
          imageLink="/website-ontwikkelen.jpg"
        />
      </div>

      <div className="item container mx-auto px-4 sm:px-0">
        <H2 addClass="text-blue text-center pb-8">
          Wat je van ons kunt verwachten
        </H2>
        <div className="flex flex-col lg:flex-row justify-center space-around">
          <CardSmall
            title="Op maat gemaakt"
            iconLink="/icons/pen-ruler-solid.svg"
            paragraph="Bij het ontwerp van je website kijken we als eerst naar de bestaande huisstijl en passen het design hierop aan"
          />
          <CardSmall
            title="SEO optimalisatie"
            iconLink="/icons/magnifying-glass-solid.svg"
            paragraph="Door de juiste zoekwoorden te gebruiken zorgen wij ervoor dat jullie ook bij google bekent worden."
          />
          <CardSmall
            title="Razend snel"
            iconLink="/icons/chart-line-solid.svg"
            paragraph="Een van de belangrijkste aspecten voor vindbaarheid, is de snelheid van je site. Wij zorgen ervoor dat dit in orde is."
          />
          <div className="clear-both"></div>
        </div>
      </div>
    </Layout>
  );
}
