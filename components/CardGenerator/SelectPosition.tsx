import React, { Fragment } from "react";

const positionsClasses = "border-2 border-[#DDDDDD]";
const positionsClassesActive = "border-2 border-[#7D4AEA] bg-[#7D4AEA]";

const SelectPosition: React.FC<{
  selectPositionHandler: (event: any) => void;
  selectedPosition: string;
}> = ({ selectPositionHandler, selectedPosition }) => {
  return (
    <Fragment>
      <h5 className="text-lg font-semibold">Position</h5>
      <div className="grid grid-cols-3 gap-2 w-32 h-24">
        <button
          id="1"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "1"
              ? "border-2 border-[#7D4AEA] bg-[#7D4AEA] rounded-tl-lg"
              : "border-2 border-[#DDDDDD] rounded-tl-lg"
          }
        ></button>
        <button
          id="2"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "2" ? positionsClassesActive : positionsClasses
          }
        ></button>
        <button
          id="3"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "3"
              ? "border-2 border-[#7D4AEA] bg-[#7D4AEA] rounded-tr-lg"
              : "border-2 border-[#DDDDDD] rounded-tr-lg"
          }
        ></button>
        <button
          id="4"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "4" ? positionsClassesActive : positionsClasses
          }
        ></button>
        <button
          id="5"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "5" ? positionsClassesActive : positionsClasses
          }
        ></button>
        <button
          id="6"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "6" ? positionsClassesActive : positionsClasses
          }
        ></button>
        <button
          id="7"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "7"
              ? "border-2 border-[#7D4AEA] bg-[#7D4AEA] rounded-bl-lg"
              : "border-2 border-[#DDDDDD] rounded-bl-lg"
          }
        ></button>
        <button
          id="8"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "8" ? positionsClassesActive : positionsClasses
          }
        ></button>
        <button
          id="9"
          onClick={selectPositionHandler}
          className={
            selectedPosition === "9"
              ? "border-2 border-[#7D4AEA] bg-[#7D4AEA] rounded-br-lg"
              : "border-2 border-[#DDDDDD] rounded-br-lg"
          }
        ></button>
      </div>
    </Fragment>
  );
};

export default SelectPosition;
