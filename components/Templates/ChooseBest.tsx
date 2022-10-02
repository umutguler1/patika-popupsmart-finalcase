import React from "react";
import Template from "../models/template";

const ChooseBest: React.FC<{ templateProps: Template }> = (props) => {
  console.log(props.templateProps.inputText2);
  return (
    <div className="grid gap-y-3 bg-custom-white place-content-center text-center p-8 rounded-lg w-[400px] h-[350px]">
      <h2 className={`text-lg text-[${props.templateProps.color}]`}>
        {props.templateProps.title}
      </h2>
      <h2 className="text-2xl font-semibold">{props.templateProps.text}</h2>
      <p>{props.templateProps.text2}</p>
      <form className="grid gap-y-3">
        <div className="grid place-items-start">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="i1"
              value={props.templateProps.inputText}
              name="plan"
              className={`accent-[${props.templateProps.color}]`}
            />
            <label htmlFor="i1" className="font-semibold">
              {props.templateProps.inputText}
            </label>
          </div>
          <p className="text-sm text-[#717791] ml-6">
            {props.templateProps.text3}
          </p>
        </div>

        <div className="grid place-items-start">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="i2"
              value={props.templateProps.inputText2}
              name="plan"
              className={`accent-[${props.templateProps.color}]`}
            />
            <label htmlFor="i2" className="font-semibold">
              {props.templateProps.inputText2}
            </label>
          </div>
          <p className="text-sm text-[#717791] ml-6">
            {props.templateProps.text4}
          </p>
        </div>

        <div className="grid place-items-start">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="i3"
              name="plan"
              value={props.templateProps.inputText3}
              className={`accent-[${props.templateProps.color}]`}
            />
            <label htmlFor="i3" className="font-semibold">
              {props.templateProps.inputText3}
            </label>
          </div>
          <p className="text-sm text-[#717791] ml-6">
            {props.templateProps.text5}
          </p>
        </div>
      </form>
      <div className="flex items-center justify-around font-semibold">
        <button className="border-2 px-8 py-2 rounded-xl">
          {props.templateProps.buttonText1}
        </button>
        <button
          className={`border px-8 py-2 rounded-xl bg-[${props.templateProps.color}] text-custom-white`}
        >
          {props.templateProps.buttonText2}
        </button>
      </div>
    </div>
  );
};

export default ChooseBest;
