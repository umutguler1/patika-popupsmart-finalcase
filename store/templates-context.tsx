import React from "react";
import Template from "../components/models/template";

import template1 from "../components/Templates/template1";
import template2 from "../components/Templates/template2";
import template3 from "../components/Templates/template3";
import template4 from "../components/Templates/template4";

import personPhone from "../public/assets/person_phone.avif";

type TemplatesContextObj = {
  template: React.FC<{
    templateProps: Template;
  }>;
  props: {
    id: string;
    title: string;
    text: string;
    color: string;
    imageUrl?: string;
    logoUrl?: string;
    inputText?: string;
    buttonText1?: string;
    buttonText2?: string;
  };
}[];
const templates = [
  {
    template: template1,
    props: {
      id: "t1",
      title: "Security Code",
      text: "This code expires in 24 hours",
      color: "#7D4AEA",
      logoUrl: "",
      inputText: "Code",
      buttonText1: "Cancel",
      buttonText2: "Continue",
    },
  },
  {
    template: template2,
    props: {
      id: "t2",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      imageUrl: personPhone.src,
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
  {
    template: template3,
    props: {
      id: "t3",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
  {
    template: template4,
    props: {
      id: "t4",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
];

export const TemplatesContext = React.createContext<TemplatesContextObj>([]);

const TemplatesContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const contextValue: TemplatesContextObj = templates;

  return (
    <TemplatesContext.Provider value={contextValue}>
      {props.children}
    </TemplatesContext.Provider>
  );
};

export default TemplatesContextProvider;
