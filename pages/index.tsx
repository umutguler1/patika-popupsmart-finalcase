import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage/HomePage";

const Home: NextPage = () => {
  return (
    <div className="font-poppins">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
