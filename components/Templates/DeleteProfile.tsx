import React from "react";
import Template from "../models/template";

const DeleteProfile: React.FC<{ templateProps: Template }> = (props) => {
  return (
    <div className="grid gap-y-4 bg-custom-white place-content-center place-items-center text-center p-8 rounded-lg w-[400px] h-[350px]">
      {props.templateProps.logoUrl ? (
        <img
          src={props.templateProps.logoUrl}
          alt="logo"
          className="w-20 h-20 rounded-xl object-cover"
        />
      ) : (
        <svg
          width="70"
          height="70"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z"
            fill={props.templateProps.color}
          />
          <path
            d="M53 39V59H37V39H53ZM50 27H40L38 29H31V33H59V29H52L50 27ZM57 35H33V59C33.0032 60.0599 33.4256 61.0755 34.1751 61.8249C34.9245 62.5744 35.9401 62.9968 37 63H53C54.0599 62.9968 55.0755 62.5744 55.8249 61.8249C56.5744 61.0755 56.9968 60.0599 57 59V35Z"
            fill="white"
          />
        </svg>
      )}

      <h2 className="text-xl font-semibold">{props.templateProps.title}</h2>
      <p className="">{props.templateProps.text}</p>
      <p className="text-[#777777] px-8 text-sm">{props.templateProps.text2}</p>

      <div className="grid gap-y-2">
        <button
          className={`px-10 py-2 rounded-lg border-2 bg-[${props.templateProps.color}] text-custom-white border-custom-dark-gray font-semibold`}
        >
          {props.templateProps.buttonText1}
        </button>
        <button className="px-10 py-2 rounded-lg font-semibold border-2">
          {props.templateProps.buttonText2}
        </button>
      </div>
    </div>
  );
};

export default DeleteProfile;
