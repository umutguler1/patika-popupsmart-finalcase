import React from "react";
import Template from "../components/models/template";

import SecurityCode from "../components/Templates/SecurityCode";
import InstallLocal from "../components/Templates/InstallLocal";
import ChooseBest from "../components/Templates/ChooseBest";
import DeleteProfile from "../components/Templates/DeleteProfile";
import FileOnWay from "../components/Templates/FileOnWay";

import personPhone from "../public/assets/person_phone.avif";

type TemplatesContextObj = {
  template: React.FC<{
    templateProps: Template;
  }>;
  props: {
    id: string;
    title: string;
    text: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    color: string;
    imageUrl?: string;
    logoUrl?: string;
    inputText?: string;
    inputText2?: string;
    inputText3?: string;
    buttonText1?: string;
    buttonText2?: string;
  };
}[];
const templates = [
  {
    template: SecurityCode,
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
    template: InstallLocal,
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
    template: ChooseBest,
    props: {
      id: "t3",
      title: "PLANS",
      text: "Choose best for you",
      text2: "Only pay for the capacity that you use.",
      text3: "1 free (then $15 per member / month)",
      text4: "$19 per member/month",
      text5: "$29 per member/month",
      color: "#7D4AEA",
      inputText: "Starter",
      inputText2: "Pro",
      inputText3: "Business",
      buttonText1: "Cancel",
      buttonText2: "Continue",
    },
  },
  {
    template: DeleteProfile,
    props: {
      id: "t4",
      title: "Delete your profile",
      text: "Your profile will be automatically deleted after 1 month.",
      text2: "You won’t be able to access to your profile after 30.08.2021.",
      color: "#7D4AEA",
      logoUrl: "",
      buttonText1: "Delete my profile",
      buttonText2: "Cancel",
    },
  },
  {
    template: FileOnWay,
    props: {
      id: "t5",
      title: "The file is on it's way",
      text: "You’ll get an notified when the receiver has opened the email.",
      color: "#7D4AEA",
      buttonText1: "Go to dashboard",
    },
  },
  {
    template: SecurityCode,
    props: {
      id: "t6",
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
    template: InstallLocal,
    props: {
      id: "t7",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      imageUrl: personPhone.src,
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
  {
    template: ChooseBest,
    props: {
      id: "t8",
      title: "PLANS",
      text: "Choose best for you",
      text2: "Only pay for the capacity that you use.",
      text3: "1 free (then $15 per member / month)",
      text4: "$19 per member/month",
      text5: "$29 per member/month",
      color: "#7D4AEA",
      inputText: "Starter",
      inputText2: "Pro",
      inputText3: "Business",
      buttonText1: "Cancel",
      buttonText2: "Continue",
    },
  },
  {
    template: DeleteProfile,
    props: {
      id: "t9",
      title: "Delete your profile",
      text: "Your profile will be automatically deleted after 1 month.",
      text2: "You won’t be able to access to your profile after 30.08.2021.",
      color: "#7D4AEA",
      logoUrl: "",
      buttonText1: "Delete my profile",
      buttonText2: "Cancel",
    },
  },
  {
    template: FileOnWay,
    props: {
      id: "t10",
      title: "The file is on it's way",
      text: "You’ll get an notified when the receiver has opened the email.",
      color: "#7D4AEA",
      buttonText1: "Go to dashboard",
    },
  },
  {
    template: SecurityCode,
    props: {
      id: "t11",
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
    template: InstallLocal,
    props: {
      id: "t12",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      imageUrl: personPhone.src,
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
  {
    template: ChooseBest,
    props: {
      id: "t13",
      title: "PLANS",
      text: "Choose best for you",
      text2: "Only pay for the capacity that you use.",
      text3: "1 free (then $15 per member / month)",
      text4: "$19 per member/month",
      text5: "$29 per member/month",
      color: "#7D4AEA",
      inputText: "Starter",
      inputText2: "Pro",
      inputText3: "Business",
      buttonText1: "Cancel",
      buttonText2: "Continue",
    },
  },
  {
    template: DeleteProfile,
    props: {
      id: "t14",
      title: "Delete your profile",
      text: "Your profile will be automatically deleted after 1 month.",
      text2: "You won’t be able to access to your profile after 30.08.2021.",
      color: "#7D4AEA",
      logoUrl: "",
      buttonText1: "Delete my profile",
      buttonText2: "Cancel",
    },
  },
  {
    template: FileOnWay,
    props: {
      id: "t15",
      title: "The file is on it's way",
      text: "You’ll get an notified when the receiver has opened the email.",
      color: "#7D4AEA",
      buttonText1: "Go to dashboard",
    },
  },
  {
    template: SecurityCode,
    props: {
      id: "t16",
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
    template: InstallLocal,
    props: {
      id: "t17",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      imageUrl: personPhone.src,
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
  {
    template: ChooseBest,
    props: {
      id: "t18",
      title: "PLANS",
      text: "Choose best for you",
      text2: "Only pay for the capacity that you use.",
      text3: "1 free (then $15 per member / month)",
      text4: "$19 per member/month",
      text5: "$29 per member/month",
      color: "#7D4AEA",
      inputText: "Starter",
      inputText2: "Pro",
      inputText3: "Business",
      buttonText1: "Cancel",
      buttonText2: "Continue",
    },
  },
  {
    template: DeleteProfile,
    props: {
      id: "t19",
      title: "Delete your profile",
      text: "Your profile will be automatically deleted after 1 month.",
      text2: "You won’t be able to access to your profile after 30.08.2021.",
      color: "#7D4AEA",
      logoUrl: "",
      buttonText1: "Delete my profile",
      buttonText2: "Cancel",
    },
  },
  {
    template: FileOnWay,
    props: {
      id: "t20",
      title: "The file is on it's way",
      text: "You’ll get an notified when the receiver has opened the email.",
      color: "#7D4AEA",
      buttonText1: "Go to dashboard",
    },
  },
  {
    template: SecurityCode,
    props: {
      id: "t21",
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
    template: InstallLocal,
    props: {
      id: "t22",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      imageUrl: personPhone.src,
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
  {
    template: ChooseBest,
    props: {
      id: "t23",
      title: "PLANS",
      text: "Choose best for you",
      text2: "Only pay for the capacity that you use.",
      text3: "1 free (then $15 per member / month)",
      text4: "$19 per member/month",
      text5: "$29 per member/month",
      color: "#7D4AEA",
      inputText: "Starter",
      inputText2: "Pro",
      inputText3: "Business",
      buttonText1: "Cancel",
      buttonText2: "Continue",
    },
  },
  {
    template: DeleteProfile,
    props: {
      id: "t24",
      title: "Delete your profile",
      text: "Your profile will be automatically deleted after 1 month.",
      text2: "You won’t be able to access to your profile after 30.08.2021.",
      color: "#7D4AEA",
      logoUrl: "",
      buttonText1: "Delete my profile",
      buttonText2: "Cancel",
    },
  },
  {
    template: FileOnWay,
    props: {
      id: "t25",
      title: "The file is on it's way",
      text: "You’ll get an notified when the receiver has opened the email.",
      color: "#7D4AEA",
      buttonText1: "Go to dashboard",
    },
  },
  {
    template: SecurityCode,
    props: {
      id: "t26",
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
    template: InstallLocal,
    props: {
      id: "t27",
      title: "Install Local now",
      text: "We've gone native, try it!",
      color: "#7D4AEA",
      imageUrl: personPhone.src,
      buttonText1: "Continue",
      buttonText2: "Not now",
    },
  },
  {
    template: ChooseBest,
    props: {
      id: "t28",
      title: "PLANS",
      text: "Choose best for you",
      text2: "Only pay for the capacity that you use.",
      text3: "1 free (then $15 per member / month)",
      text4: "$19 per member/month",
      text5: "$29 per member/month",
      color: "#7D4AEA",
      inputText: "Starter",
      inputText2: "Pro",
      inputText3: "Business",
      buttonText1: "Cancel",
      buttonText2: "Continue",
    },
  },
  {
    template: DeleteProfile,
    props: {
      id: "t29",
      title: "Delete your profile",
      text: "Your profile will be automatically deleted after 1 month.",
      text2: "You won’t be able to access to your profile after 30.08.2021.",
      color: "#7D4AEA",
      logoUrl: "",
      buttonText1: "Delete my profile",
      buttonText2: "Cancel",
    },
  },
  {
    template: FileOnWay,
    props: {
      id: "t30",
      title: "The file is on it's way",
      text: "You’ll get an notified when the receiver has opened the email.",
      color: "#7D4AEA",
      buttonText1: "Go to dashboard",
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
