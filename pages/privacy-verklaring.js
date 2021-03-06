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
    <>
      <Head>
        <title>Privacy verklaring - websidesign</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Layout
        pageTitle="Privacy verklaring"
        imageSrc="home.jpg"
        altText="altText"
        breadCrumb1="Privacy verklaring"
      >
        <div className="container max-w-4xl mx-auto relative">
          <P addClass="max-w-xl">
            Websidesign, gevestigd aan Straatsburglaan 10, 6137 JC Sittard, is
            verantwoordelijk voor de verwerking van persoonsgegevens zoals
            weergegeven in deze privacyverklaring.
          </P>
          <H5 addClass="text-blue">Contactgegevens</H5>
          <P addClass="max-w-xl">
            <ul>
              <li className="mb-2">www.websidesign.nl</li>
              <li className="mb-2">Straatsburglaan 10</li>
              <li className="mb-2">6137 JC Sittard</li>
              <li className="mb-2">tel: 06 36 35 88 63</li>
              <li className="mb-2">
                Roel Janssen is de Functionaris Gegevensbescherming van
                Websidesign. Hij is te bereiken via service@websidesign.nl
              </li>
            </ul>
          </P>
          <H5 addClass="text-blue">Persoonsgegevens die wij verwerken</H5>
          <P>
            Websidesign verwerkt je persoonsgegevens doordat je gebruik maakt
            van onze diensten en/of omdat je deze gegevens zelf aan ons
            verstrekt. Hieronder vind je een overzicht van de persoonsgegevens
            die wij verwerken:
            <ul className="mt-2">
              <li className="mb-2">- Voor- en achternaam</li>
              <li className="mb-2">- Geslacht</li>
              <li className="mb-2">- Geboortedatum</li>
              <li className="mb-2">- Adresgegevens</li>
              <li className="mb-2">- Telefoonnummer</li>
              <li className="mb-2">- E-mailadres</li>
              <li className="mb-2">- IP-adres</li>
              <li className="mb-2">
                - Gegevens over jouw activiteiten op onze website
              </li>
              <li className="mb-2">- Internetbrowser en apparaat type</li>
            </ul>
          </P>
          <H5 addClass="text-blue">
            Met welk doel en op basis van welke grondslag wij persoonsgegeven
            verwerken
          </H5>
          <P>
            Websidesign verwerkt jouw persoonsgegevens voor de volgende doelen:
            <ul className="mt-2">
              <li className="mb-2">- Het afhandelen van jouw betaling</li>
              <li className="mb-2">
                - Verzenden van onze nieuwsbrief en/of reclamefolder
              </li>
              <li className="mb-2">
                - Je te kunnen bellen of e-mailen indien dit nodig is om onze
                dienstverlening uit te kunnen voeren
              </li>
              <li className="mb-2">
                - Je te informeren over wijzigingen van onze diensten en
                producten
              </li>
              <li className="mb-2">
                - Om goederen en diensten bij je af te leveren
              </li>
              <li className="mb-2">
                - Websidesign analyseert jouw gedrag op de website om daarmee de
                website te verbeteren en het aanbod van producten en diensten af
                te stemmen op jouw voorkeuren.
              </li>
              <li className="mb-2">
                - Websidesign verwerkt ook persoonsgegevens als wij hier
                wettelijk toe verplicht zijn, zoals gegevens die wij nodig
                hebben voor onze belastingaangifte.
              </li>
            </ul>
          </P>
          <H5 addClass="text-blue">Hoe lang we persoonsgegevens bewaren</H5>
          <P>
            Websidesign bewaart je persoonsgegevens niet langer dan strikt nodig
            is om de doelen te realiseren waarvoor je gegevens worden verzameld.
            Wij hanteren de volgende bewaartermijnen voor de volgende
            (categorie??n) van persoonsgegevens:
          </P>
          <P>
            Persoonsgegevens/personalia/telefoonnummer/Adres :<br></br>
            Bewaartermijn 7 jaar tbv belastingdienst
          </P>
          <H5 addClass="text-blue">Delen van persoonsgegevens met derden</H5>
          <P>
            Websidesign deelt jouw persoonsgegevens met verschillende derden als
            dit noodzakelijk is voor het uitvoeren van de overeenkomst en om te
            voldoen aan een eventuele wettelijke verplichting. Met bedrijven die
            je gegevens verwerken in onze opdracht, sluiten wij een
            bewerkersovereenkomst om te zorgen voor eenzelfde niveau van
            beveiliging en vertrouwelijkheid van jouw gegevens. Websidesign
            blijft verantwoordelijk voor deze verwerkingen. Daarnaast verstrekt
            Websidesign jouw persoonsgegevens aan andere derden. Dit doen wij
            alleen met jouw nadrukkelijke toestemming.
          </P>
          <H5 addClass="text-blue">
            Cookies, of vergelijkbare technieken, die wij gebruiken
          </H5>
          <P>
            Websidesign gebruikt functionele, analytische en tracking cookies.
            Een cookie is een klein tekstbestand dat bij het eerste bezoek aan
            deze website wordt opgeslagen in de browser van je computer, tablet
            of smartphone. Websidesign gebruikt cookies met een puur technische
            functionaliteit. Deze zorgen ervoor dat de website naar behoren
            werkt en dat bijvoorbeeld jouw voorkeursinstellingen onthouden
            worden. Deze cookies worden ook gebruikt om de website goed te laten
            werken en deze te kunnen optimaliseren. Daarnaast plaatsen we
            cookies die jouw surfgedrag bijhouden zodat we op maat gemaakte
            content en advertenties kunnen aanbieden.
          </P>
          <P>
            Bij jouw eerste bezoek aan onze website hebben wij je al
            ge??nformeerd over deze cookies en hebben we je toestemming gevraagd
            voor het plaatsen ervan. Je kunt je afmelden voor cookies door je
            internetbrowser zo in te stellen dat deze geen cookies meer opslaat.
            Daarnaast kun je ook alle informatie die eerder is opgeslagen via de
            instellingen van je browser verwijderen.
          </P>
          <H5 addClass="text-blue">
            Gegevens inzien, aanpassen of verwijderen
          </H5>
          <P>
            Je hebt het recht om je persoonsgegevens in te zien, te corrigeren
            of te verwijderen. Daarnaast heb je het recht om je eventuele
            toestemming voor de gegevensverwerking in te trekken of bezwaar te
            maken tegen de verwerking van jouw persoonsgegevens door Websidesign
            en heb je het recht op gegevensoverdraagbaarheid. Dat betekent dat
            je bij ons een verzoek kan indienen om de persoonsgegevens die wij
            van jou beschikken in een computerbestand naar jou of een ander,
            door jou genoemde organisatie, te sturen.
          </P>
          <P>
            Je kunt een verzoek tot inzage, correctie, verwijdering,
            gegevensoverdraging van je persoonsgegevens of verzoek tot
            intrekking van je toestemming of bezwaar op de verwerking van jouw
            persoonsgegevens sturen naar service@websidesign.nl. Om er zeker van
            te zijn dat het verzoek tot inzage door jou is gedaan, vragen wij
            jou een kopie van je identiteitsbewijs met het verzoek mee te
            sturen. Maak in deze kopie je pasfoto, MRZ (machine readable zone,
            de strook met nummers onderaan het paspoort), paspoortnummer en
            Burgerservicenummer (BSN) zwart. Dit ter bescherming van je privacy.
            We reageren zo snel mogelijk, maar binnen vier weken, op jouw
            verzoek.
          </P>
          <P>
            Websidesign wil je er tevens op wijzen dat je de mogelijkheid hebt
            om een klacht in te dienen bij de nationale toezichthouder, de
            Autoriteit Persoonsgegevens. Dat kan via de volgende link:
            https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons
          </P>
          <H5 addClass="text-blue">Hoe wij persoonsgegevens beveiligen</H5>
          <P>
            Websidesign neemt de bescherming van jouw gegevens serieus en neemt
            passende maatregelen om misbruik, verlies, onbevoegde toegang,
            ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
            Als jij het idee hebt dat jouw gegevens toch niet goed beveiligd
            zijn of er aanwijzingen zijn van misbruik, neem dan contact op met
            onze klantenservice of vie service@websidesign.nl
          </P>
        </div>
      </Layout>
    </>
  );
}
