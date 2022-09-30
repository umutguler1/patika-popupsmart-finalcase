import { NextPage } from "next";
import React from "react";
import TemplateOptions from "../../components/CardGenerator/TemplateOptions";
import Head from "next/head";
import TemplatesContextProvider from "../../components/store/templates-context";

const cardGenerator: NextPage = () => {
  return (
    <div className="font-poppins">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <TemplateOptions />
    </div>
  );
};

export default cardGenerator;
