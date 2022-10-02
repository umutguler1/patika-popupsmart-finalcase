import React from "react";
import Template from "../models/template";

const template5: React.FC<{ templateProps: Template }> = (props) => {
  return (
    <div className="grid gap-y-4 bg-custom-white text-center p-8 rounded-lg w-[400px]">
      <h2 className="text-2xl font-semibold">{props.templateProps.title}</h2>
      <p className="text-lg px-4">{props.templateProps.text}</p>

      <button
        className={`py-2 rounded-lg border-2 bg-[${props.templateProps.color}] text-custom-white border-custom-dark-gray font-semibold`}
      >
        {props.templateProps.buttonText1}
      </button>
    </div>
  );
};

export default template5;
