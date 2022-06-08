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
      pageTitle="Privacy verklaring"
      imageSrc="home.jpg"
      altText="altText"
      breadCrumb1="Privacy verklaring"
    >
      <div className="container mx-auto relative">
        <H5 addClass="text-blue">asfasdksds</H5>
        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
        <H5 addClass="text-blue">asfasdksds</H5>
        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
        <H5 addClass="text-blue">asfasdksds</H5>
        <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
      </div>
    </Layout>
  );
}
