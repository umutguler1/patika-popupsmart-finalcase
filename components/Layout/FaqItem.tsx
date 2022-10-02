import React, { useState } from "react";
const minusIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_79_9693)">
      <path
        d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="#7D4AEA"
      />
    </g>
    <defs>
      <clipPath id="clip0_79_9693">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const plusIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
      fill="#999999"
    />
  </svg>
);

const questionGeneralClasses = "font-semibold text-[#777777]";
const questionActiveClasses = "font-semibold text-black";

const FaqItem: React.FC<{ id: string; text: string; answer: string }> = (
  props
) => {
  const [questionClasses, setQuestionClasses] = useState(
    questionGeneralClasses
  );
  const selectItemHandler = (e: any) => {
    if (questionClasses === questionActiveClasses) {
      setQuestionClasses(questionGeneralClasses);
      return;
    }
    setQuestionClasses(questionActiveClasses);
  };
  return (
    <li
      className={`grid gap-y-2 px-6 ${
        questionClasses === questionActiveClasses && "bg-custom-light-gray"
      }`}
    >
      <div className="flex justify-between py-4">
        <p className={questionClasses}>{props.text}</p>
        <button id={props.id} onClick={selectItemHandler} className="w-fit">
          {questionClasses === questionGeneralClasses ? plusIcon : minusIcon}
        </button>
      </div>
      {questionClasses === questionActiveClasses ? (
        <p className="pb-6 w-3/4">{props.answer}</p>
      ) : (
        <hr className="-mx-6" />
      )}
    </li>
  );
};

export default FaqItem;
