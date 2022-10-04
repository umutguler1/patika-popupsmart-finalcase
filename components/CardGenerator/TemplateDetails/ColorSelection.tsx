import React from "react";

const ColorSelection: React.FC<{
  changeColorHandler: (event: any) => void;
}> = ({ changeColorHandler }) => {
  return (
    <div>
      <h5 className="text-lg font-semibold">Colors</h5>
      <div className="flex items-center justify-between w-[400px]">
        <button
          onClick={changeColorHandler}
          id="#666666"
          className="w-16 h-16 rounded-xl bg-[#666666] border"
        ></button>
        <button
          onClick={changeColorHandler}
          id="#7D4AEA"
          className="w-16 h-16 rounded-xl bg-custom-purple border"
        ></button>
        <button
          onClick={changeColorHandler}
          id="#F37C34"
          className="w-16 h-16 rounded-xl bg-[#F37C34] border"
        ></button>
        <button
          onClick={changeColorHandler}
          id="#777777"
          className="w-16 h-16 rounded-xl bg-[#777777] border"
        ></button>
        <button
          onClick={changeColorHandler}
          id="#DDDDDD"
          className="w-16 h-16 rounded-xl bg-[#DDDDDD] border"
        ></button>
      </div>
    </div>
  );
};

export default ColorSelection;
