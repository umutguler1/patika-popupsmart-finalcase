import React, { useState } from "react";

const PageNumbers: React.FC<{
  paginate: (e: number) => void;
  templatesPerPage: number;
  totalTemplates: number;
}> = ({ paginate, templatesPerPage, totalTemplates }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTemplates / templatesPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumberHandler = (event: any) => {
    setSelectedButton(parseInt(event.target.innerHTML));
    paginate(parseInt(event.target.innerHTML));
  };

  const buttonClasses = "px-5 py-3 text-[#777777]";
  const buttonClassesActive =
    "px-5 py-3 font-bold rounded-lg bg-custom-white text-black";

  return (
    <nav className="flex bg-custom-light-gray w-fit rounded-xl p-1">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={pageNumberHandler}
              className={
                number === selectedButton ? buttonClassesActive : buttonClasses
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNumbers;
