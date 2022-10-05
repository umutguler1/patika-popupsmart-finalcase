import { NextPage } from "next";
import Head from "next/head";

import React from "react";
import TemplateDetails from "../../components/CardGenerator/TemplateDetails/TemplateDetails";
import Faq from "../../components/Layout/Faq";
import Footer from "../../components/Layout/Footer";
import FooterAd from "../../components/Layout/FooterAd";

const TemplateDetailPage: NextPage = () => {
  return (
    <div className="px-52 font-poppins">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <title>Customize the Card</title>
      </Head>
      <TemplateDetails />
      <FooterAd />
      <Faq />
      <Footer />
    </div>
  );
};

export default TemplateDetailPage;
