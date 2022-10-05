import { Fragment } from "react";
import { useRouter } from "next/router";

const tickIcon = (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.99993 7.80019L1.19993 5.00019L0.266602 5.93352L3.99993 9.66685L11.9999 1.66685L11.0666 0.733521L3.99993 7.80019Z"
      fill="black"
    />
  </svg>
);

const GeneralInfo = () => {
  const router = useRouter();

  const toCardGeneratorHandler = () => {
    router.push("/card-generator");
  };
  return (
    <Fragment>
      <h1 className="text-6xl font-semibold mt-16 mb-8">
        Simple modal
        <br />
        card creator
      </h1>
      <h3 className="text-2xl w-[1200px]">
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and <br /> rotate-90 that can be composed to build any
        design, directly in your markup.
      </h3>
      <button
        onClick={toCardGeneratorHandler}
        className="bg-custom-purple rounded-xl px-8 py-4 mt-16 drop-shadow-xl text-custom-white text-lg transition-all hover:scale-125"
      >
        Try it out now
      </button>
      <div className="flex items-center space-x-6 mt-10 text-[13px] opacity-75">
        <div className="flex items-center space-x-4">
          {tickIcon}
          <p>Free and paid plans</p>
        </div>
        <div className="flex items-center space-x-4">
          {tickIcon}
          <p>Setup in minutes</p>
        </div>
        <div className="flex items-center space-x-4">
          {tickIcon}
          <p>No credit card required*</p>
        </div>
      </div>
    </Fragment>
  );
};

export default GeneralInfo;
