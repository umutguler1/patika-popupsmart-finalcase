import React from "react";
import Template from "../models/template";

const template2: React.FC<{ templateProps: Template }> = (props) => {
  return (
    <div className="grid gap-y-4 bg-custom-white place-content-center place-items-center text-center p-8 rounded-lg">
      <img
        src={props.templateProps.imageUrl}
        alt="phoneImage"
        className="max-h-full object-cover h-[150px] w-[300px]"
      />
      <h2 className="text-2xl font-semibold">{props.templateProps.title}</h2>
      <p className="text-lg">{props.templateProps.text}</p>
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

export default template2;
