import { useRouter } from "next/router";
import React, { Fragment, useContext, useState, useRef } from "react";
import { TemplatesContext } from "../../store/templates-context";
import Template from "../models/template";
import Multiselect from "multiselect-react-dropdown";

import toggleBtnClasses from "./ToggleButton.module.scss";
import langClasses from "./Languages.module.scss";
import ColorSelection from "./ColorSelection";

import EditContent from "./EditContent";
import SelectPosition from "./SelectPosition";
import SelectSize from "./SelectSize";
import CustomizedPopup from "./CustomizedPopup";

const toggleButton = (
  <label className={toggleBtnClasses.switch}>
    <input type="checkbox" defaultChecked />
    <span className={toggleBtnClasses.slider}></span>
  </label>
);

const TemplateDetails = () => {
  const [selectedButton, setSelectedButton] = useState("Medium");
  const [selectedPosition, setSelectedPosition] = useState("5");

  const [getCodeClicked, setGetCodeClicked] = useState(false);

  const secondsRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLInputElement>(null);
  const trafficSourceRef = useRef<HTMLInputElement>(null);
  const browserLanguageRef = useRef<any>(null);

  const [templateProps, setTemplateProps] = useState<Template>({
    title: "",
    text: "",
    color: "",
    inputText: "",
    buttonText1: "",
    buttonText2: "",
  });
  const router = useRouter();
  const templatesCtx = useContext(TemplatesContext);
  const templates = templatesCtx;

  if (!router) {
    return <h3 className="font-semibold text-2xl m-12">Loading...</h3>;
  }

  const templateId = router.query.templateId;
  const selectedTemplate = templates.find((t) => t.props.id === templateId);

  if (!selectedTemplate) {
    return <h3 className="font-semibold text-2xl m-12">Loading...</h3>;
  }

  // The functions below can only be triggered with a button. Therefore, setting the type "any" for the events is not a problem.
  const selectSizeHandler = (event: any) => {
    setSelectedButton(event.target.innerText);
    // HANDLE THE SIZE CHANGE
  };
  const selectPositionHandler = (event: any) => {
    setSelectedPosition(event.target.id);
    // HANDLE THE POSITION CHANGE
  };

  const changeColorHandler = (event: any) => {
    setTemplateProps((prevProps) => {
      return { ...prevProps, color: event.target.id };
    });
  };

  const changeContentHandler = (event: any) => {
    const content = event.target.defaultValue;
    const enteredContent = event.target.value;

    if (content === templateProps.title) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, title: enteredContent };
      });
    } else if (content === templateProps.text) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, text: enteredContent };
      });
    } else if (content === templateProps.text2) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, text2: enteredContent };
      });
    } else if (content === templateProps.text3) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, text3: enteredContent };
      });
    } else if (content === templateProps.text4) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, text4: enteredContent };
      });
    } else if (content === templateProps.text5) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, text5: enteredContent };
      });
    } else if (content === templateProps.buttonText1) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, buttonText1: enteredContent };
      });
    } else if (content === templateProps.buttonText2) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, buttonText2: enteredContent };
      });
    } else if (content === templateProps.inputText) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, inputText: enteredContent };
      });
    } else if (content === templateProps.inputText2) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, inputText2: enteredContent };
      });
    } else if (content === templateProps.inputText3) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, inputText3: enteredContent };
      });
    } else if (content === templateProps.buttonText2) {
      setTemplateProps((prevProps) => {
        return { ...prevProps, buttonText2: enteredContent };
      });
    }
  };

  const selectFileHandler = (event: any) => {
    try {
      const imgUrl = URL.createObjectURL(event.target.files[0]);
      if (event.target.id === "imgInput") {
        setTemplateProps((prevProps) => {
          return { ...prevProps, imageUrl: imgUrl };
        });
      } else if (event.target.id === "logoInput") {
        setTemplateProps((prevProps) => {
          return { ...prevProps, logoUrl: imgUrl };
        });
      }
    } catch (err) {
      return;
    }
  };

  const resetFileHandler = (event: any) => {
    if (event.target.id === "resetImage") {
      setTemplateProps((prevProps) => {
        return { ...prevProps, imageUrl: selectedTemplate.props.imageUrl };
      });
    } else if (event.target.id === "resetLogo") {
      setTemplateProps((prevProps) => {
        return { ...prevProps, logoUrl: selectedTemplate.props.logoUrl };
      });
    }
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    // console.log(secondsRef.current!.value);
    // console.log(scrollRef.current!.value);
    // console.log(trafficSourceRef.current);
    const selectedLanguages = browserLanguageRef.current.getSelectedItems();
    // console.log(selectedLanguages);
    setGetCodeClicked(true);
  };

  if (templateProps.title === "") {
    setTemplateProps(selectedTemplate.props);
  }

  return (
    <Fragment>
      <div className="grid">
        <div className="flex items-center space-x-4 mt-12">
          <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
            2
          </p>
          <div className="flex space-x-1 text-lg font-semibold ">
            <h3>Appearance</h3>{" "}
            <h4 className="font-medium">(Size, colors, logo)</h4>
          </div>
        </div>
        <div className="top-1/4 left-3/4 pointer-events-none sticky drop-shadow-xl w-fit">
          <selectedTemplate.template
            templateProps={
              templateProps ? templateProps : selectedTemplate.props
            }
          />
        </div>
        <form
          onSubmit={submitHandler}
          className="grid gap-y-8 py-4 -mt-[320px]"
        >
          {/* SIZE */}
          <SelectSize
            selectSizeHandler={selectSizeHandler}
            selectedButton={selectedButton}
          />

          {/* POSITION */}
          <SelectPosition
            selectPositionHandler={selectPositionHandler}
            selectedPosition={selectedPosition}
          />

          {/* COLORS */}
          <ColorSelection changeColorHandler={changeColorHandler} />

          {/* UPLOAD LOGO */}
          <div className="">
            {templateProps.logoUrl !== undefined && (
              <div className="grid gap-y-4">
                <h5 className="text-lg font-semibold">Upload Logo</h5>
                <label
                  htmlFor="logoInput"
                  className="w-fit cursor-pointer px-4 py-2 bg-custom-purple text-custom-white rounded-lg hover:brightness-125 transition-all"
                >
                  Select Logo
                </label>
                <input
                  accept="image/*"
                  type="file"
                  id="logoInput"
                  onChange={selectFileHandler}
                  className="hidden"
                />
                {templateProps.logoUrl && (
                  <button
                    onClick={resetFileHandler}
                    id="resetLogo"
                    className="w-fit px-4 py-2 rounded-lg bg-custom-purple text-custom-white hover:brightness-125 transition-all"
                  >
                    Reset Logo
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4 mt-12">
            <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
              3
            </p>
            <div className="text-lg font-semibold ">
              <h3>Content</h3>
            </div>
          </div>

          {/* EDIT CONTENT */}
          <EditContent
            templateProps={templateProps}
            changeContentHandler={changeContentHandler}
            selectedTemplate={selectedTemplate}
            selectFileHandler={selectFileHandler}
            resetFileHandler={resetFileHandler}
          />

          <div className="flex items-center space-x-4 mt-12">
            <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
              4
            </p>
            <h3 className="text-lg font-semibold">Targeting Rules</h3>
          </div>
          <div className="grid gap-y-8">
            <div>
              <h4 className="font-semibold">Visitor Device</h4>
              <div className="flex items-center space-x-4 w-[450px] justify-between">
                <div className="flex items-center space-x-1 bg-custom-light-gray px-4 py-2 w-full rounded-xl">
                  <input
                    type="checkbox"
                    className="accent-custom-purple mr-1"
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 14.5C15.825 14.5 16.5 13.825 16.5 13V3.5C16.5 2.675 15.825 2 15 2H3C2.175 2 1.5 2.675 1.5 3.5V13C1.5 13.825 2.175 14.5 3 14.5H0V16H18V14.5H15ZM3 3.5H15V13H3V3.5Z"
                      fill="#7D4AEA"
                    />
                  </svg>

                  <p>Desktop</p>
                </div>
                <div className="flex items-center space-x-1 bg-custom-light-gray px-4 py-2 w-full rounded-xl">
                  <input
                    type="checkbox"
                    className="accent-custom-purple mr-1"
                  />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 0.7575L5.25 0.75C4.425 0.75 3.75 1.425 3.75 2.25V15.75C3.75 16.575 4.425 17.25 5.25 17.25H12.75C13.575 17.25 14.25 16.575 14.25 15.75V2.25C14.25 1.425 13.575 0.7575 12.75 0.7575ZM12.75 14.25H5.25V3.75H12.75V14.25Z"
                      fill="#999999"
                    />
                  </svg>

                  <p>Mobile</p>
                </div>
              </div>
            </div>
            <div className="grid gap-y-2">
              <div className="flex items-center justify-between w-[450px]">
                <h4 className="font-semibold">After X seconds</h4>
                {toggleButton}
              </div>
              <input
                className="border-2 rounded-xl px-3 py-2 w-[450px]"
                type="number"
                min="0"
                placeholder="12"
                ref={secondsRef}
              />
            </div>
            <div className="grid gap-y-2">
              <div className="flex items-center justify-between w-[450px]">
                <h4 className="font-semibold">After % Scroll</h4>
                {toggleButton}
              </div>
              <input
                className="border-2 rounded-xl px-3 py-2 w-[450px]"
                type="number"
                min="0"
                max="100"
                placeholder="50"
                ref={scrollRef}
              />
            </div>

            <div className="grid gap-y-2">
              <div className="flex items-center justify-between w-[450px]">
                <h4 className="font-semibold">Traffic Source</h4>
                {toggleButton}
              </div>
              <input
                className="border-2 rounded-xl px-3 py-2 w-[450px]"
                placeholder="Enter your traffic source domain"
                ref={trafficSourceRef}
              />
            </div>
            <div className="mt-12 grid gap-y-2">
              <div className="flex items-center justify-between w-[450px]">
                <h4 className="font-semibold">Browser Language</h4>
                {toggleButton}
              </div>

              <div className="w-[450px]">
                <Multiselect
                  isObject={false}
                  options={[
                    "English",
                    "French",
                    "German",
                    "Polish",
                    "Dutch",
                    "Finnish",
                  ]}
                  showCheckbox
                  className={langClasses.options}
                  ref={browserLanguageRef}
                />
              </div>
            </div>
            <div className="grid gap-y-2">
              <div className="flex items-center justify-between w-[450px]">
                <h4 className="font-semibold">Exit Intent Targeting</h4>
                {toggleButton}
              </div>
            </div>
          </div>

          <div className="grid gap-y-2">
            <div className="flex items-center space-x-4 mt-12">
              <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
                5
              </p>
              <h3 className="text-lg font-semibold">Settings and Code</h3>
            </div>
            <h4 className="text-lg font-semibold mt-4">Webhook to Send data</h4>
            <p className="mt-3">Enter your Webhook URL</p>
            <div className="flex items-center space-x-1 -mt-2 text-sm">
              <p> You can create a simple one with</p>
              <p className="font-bold">make.com</p>
            </div>
            <input
              className="border-2 rounded-xl px-3 py-2 w-[450px] mt-2"
              placeholder="Your Webhook URL"
            />
            <div className="flex items-center space-x-2 mt-1">
              <input
                type="checkbox"
                className="accent-custom-purple scale-125"
              />
              <p>Send form submissions</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-custom-purple scale-125"
              />
              <p>Send click data</p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-custom-purple text-custom-white px-8 py-4 rounded-xl w-fit  drop-shadow-lg"
          >
            Get your Code
          </button>
          {getCodeClicked && (
            <div className="bg-[#333333] w-fit h-fit p-3 rounded-lg">
              <p className="text-custom-white">test</p>
              <button className="bg-custom-purple text-custom-white text-sm rounded-full px-4 py-2 w-fit float-right">
                Copy the code
              </button>
            </div>
          )}
          <div className="flex">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_108_13)">
                <path
                  d="M7.33301 4.66659H8.66634V5.99992H7.33301V4.66659ZM7.33301 7.33325H8.66634V11.3333H7.33301V7.33325ZM7.99967 1.33325C4.31967 1.33325 1.33301 4.31992 1.33301 7.99992C1.33301 11.6799 4.31967 14.6666 7.99967 14.6666C11.6797 14.6666 14.6663 11.6799 14.6663 7.99992C14.6663 4.31992 11.6797 1.33325 7.99967 1.33325ZM7.99967 13.3333C5.05967 13.3333 2.66634 10.9399 2.66634 7.99992C2.66634 5.05992 5.05967 2.66659 7.99967 2.66659C10.9397 2.66659 13.333 5.05992 13.333 7.99992C13.333 10.9399 10.9397 13.3333 7.99967 13.3333Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_108_13">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="w-[450px] -mt-0.5 ml-1.5">
              Copy and paste the embed code above just before the closing
              {"</body>"} tag of your website template file.
            </p>
          </div>
        </form>
      </div>
      <CustomizedPopup
        template={selectedTemplate.template}
        templateProps={templateProps}
      />
    </Fragment>
  );
};

export default TemplateDetails;
