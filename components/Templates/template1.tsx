import React from "react";
import Template from "../models/template";

const template1: React.FC<{ templateProps: Template }> = (props) => {
  return (
    <div className="grid gap-y-4 bg-custom-white place-content-center place-items-center text-center p-8 rounded-lg">
      {props.templateProps.logoUrl ? (
        <img
          src={props.templateProps.logoUrl}
          alt="logo"
          className="w-24 h-24 object-cover"
        />
      ) : (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z"
            fill={`${props.templateProps.color}`}
          />
          <path
            d="M50 46.18L51.8 53.94L45 49.84L38.2 53.94L40 46.2L34 41.02L41.92 40.34L45 33.04L48.08 40.32L56 41L50 46.18ZM45 27.38L59 33.6V43C59 52.04 53.04 60.38 45 62.86C36.96 60.38 31 52.04 31 43V33.6L45 27.38ZM45 23L27 31V43C27 54.1 34.68 64.48 45 67C55.32 64.48 63 54.1 63 43V31L45 23Z"
            fill="white"
          />
        </svg>
      )}

      <h2 className="text-2xl font-semibold">{props.templateProps.title}</h2>
      <p className="text-lg">{props.templateProps.text}</p>
      <input
        placeholder={props.templateProps.inputText}
        className="p-2 border w-full rounded-lg"
      ></input>
      <div className="flex space-x-2">
        <button className="px-10 py-2 rounded-lg border-2 border-custom-dark-gray font-semibold">
          {props.templateProps.buttonText1}
        </button>
        <button
          className={`px-10 py-2 rounded-lg bg-[${props.templateProps.color}] text-custom-white font-semibold`}
        >
          {props.templateProps.buttonText2}
        </button>
      </div>
    </div>
  );
};

export default template1;
