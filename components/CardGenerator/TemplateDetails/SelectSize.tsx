import React, { Fragment } from "react";

const sizeButtonsClasses = "mx-1 px-4 py-2 rounded-lg transition-all";
const sizeButtonsClassesActive =
  "mx-1 px-4 py-2 rounded-lg bg-custom-white text-black transition-all";

const SelectSize: React.FC<{
  selectSizeHandler: (event: any) => void;
  selectedButton: string;
}> = ({ selectSizeHandler, selectedButton }) => {
  return (
    <Fragment>
      <h5 className="text-lg font-semibold">Size</h5>
      <div className="flex items-center rounded-xl bg-custom-light-gray w-fit px-2 py-1 font-semibold text-[#777777]">
        <button
          onClick={selectSizeHandler}
          className={
            selectedButton === "Small"
              ? sizeButtonsClassesActive
              : sizeButtonsClasses
          }
        >
          Small
        </button>
        <button
          onClick={selectSizeHandler}
          className={
            selectedButton === "Medium"
              ? sizeButtonsClassesActive
              : sizeButtonsClasses
          }
        >
          Medium
        </button>
        <button
          onClick={selectSizeHandler}
          className={
            selectedButton === "Large"
              ? sizeButtonsClassesActive
              : sizeButtonsClasses
          }
        >
          Large
        </button>
      </div>
    </Fragment>
  );
};

export default SelectSize;
