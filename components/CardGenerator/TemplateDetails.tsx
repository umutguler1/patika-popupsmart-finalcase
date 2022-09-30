import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { TemplatesContext } from "../store/templates-context";
import Template from "../models/template";
import Multiselect from "multiselect-react-dropdown";

import toggleBtnClasses from "./ToggleButton.module.scss";
import langClasses from "./Languages.module.scss";

const sizeButtonsClasses = "mx-1 px-4 py-2 rounded-lg transition-all";
const sizeButtonsClassesActive =
  "mx-1 px-4 py-2 rounded-lg bg-custom-white text-black transition-all";

const positionsClasses = "border-2 border-[#DDDDDD]";
const positionsClassesActive = "border-2 border-[#7D4AEA] bg-[#7D4AEA]";

const editContentInputClasses =
  "border-2 rounded-xl px-3 py-2 w-[450px] ring-2 ring-transparent ring-inset focus:ring-custom-purple focus:ring-opacity-50 focus:drop-shadow-xl";

const toggleButton = (
  <label className={toggleBtnClasses.switch}>
    <input type="checkbox" defaultChecked />
    <span className={toggleBtnClasses.slider}></span>
  </label>
);

const TemplateDetails = () => {
  const [selectedButton, setSelectedButton] = useState("Medium");
  const [selectedPosition, setSelectedPosition] = useState("5");

  const [selectedLanguages, setSelectedLanguages] = useState([]);

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

  const templateId = router.query.templateId;
  const selectedTemplate = templates.find((t) => t.props.id === templateId);

  if (!selectedTemplate) {
    return;
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

  const selectLanguagesHandler = (event: any) => {
    console.log(event.target.value);
  };

  if (templateProps.title === "") {
    setTemplateProps(selectedTemplate.props);
  }

  return (
    <div className="px-52 grid gap-y-8 py-4">
      <div className="flex items-center space-x-4 mt-12">
        <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
          2
        </p>
        <div className="flex space-x-1 text-lg font-semibold ">
          <h3>Appearance</h3> <h4>(Size, colors, logo)</h4>
        </div>
      </div>
      {/* ..*/}
      {/* ..*/}
      {/* SIZE */}
      <div>
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
      </div>
      {/* ..*/}
      {/* ..*/}
      {/* POSITION */}
      <div>
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
              selectedPosition === "2"
                ? positionsClassesActive
                : positionsClasses
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
              selectedPosition === "4"
                ? positionsClassesActive
                : positionsClasses
            }
          ></button>
          <button
            id="5"
            onClick={selectPositionHandler}
            className={
              selectedPosition === "5"
                ? positionsClassesActive
                : positionsClasses
            }
          ></button>
          <button
            id="6"
            onClick={selectPositionHandler}
            className={
              selectedPosition === "6"
                ? positionsClassesActive
                : positionsClasses
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
              selectedPosition === "8"
                ? positionsClassesActive
                : positionsClasses
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
      </div>
      {/* ..*/}
      {/* ..*/}
      {/* COLORS */}
      <div>
        <h5 className="text-lg font-semibold">Colors</h5>
        <div className="flex items-center justify-between w-[400px]">
          <button
            onClick={changeColorHandler}
            id="#000000"
            className="w-16 h-16 rounded-xl bg-black border"
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
      {/* ..*/}
      {/* ..*/}
      {/* UPLOAD LOGO */}
      <div>
        {templateProps.logoUrl !== undefined && (
          <div className="grid gap-y-4">
            <h5 className="text-lg font-semibold">Upload Logo</h5>
            <form>
              <label
                htmlFor="logoInput"
                className="cursor-pointer px-4 py-2 bg-custom-purple text-custom-white rounded-lg hover:brightness-125 transition-all"
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
            </form>
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
      <div className="absolute right-1/4 top-1/2 pointer-events-none drop-shadow-xl">
        <selectedTemplate.template
          templateProps={templateProps ? templateProps : selectedTemplate.props}
        />
      </div>
      <div className="flex items-center space-x-4 mt-12">
        <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
          3
        </p>
        <div className="text-lg font-semibold ">
          <h3>Content</h3>
        </div>
      </div>
      {/* ..*/}
      {/* ..*/}
      {/* EDIT CONTENT */}
      <h5 className="text-lg">Edit your content</h5>
      <div className="grid gap-y-4">
        <input
          type="text"
          defaultValue={templateProps.title}
          onChange={changeContentHandler}
          className={editContentInputClasses}
        />
        <input
          type="text"
          defaultValue={templateProps.text}
          onChange={changeContentHandler}
          className={editContentInputClasses}
        />
        {templateProps.inputText !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.inputText}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.buttonText1 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.buttonText1}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.buttonText2 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.buttonText2}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.imageUrl && (
          <div className="grid gap-y-4">
            <h5 className="text-lg">Upload Image</h5>
            <form>
              <label
                htmlFor="imgInput"
                className="cursor-pointer px-4 py-2 bg-custom-purple text-custom-white rounded-lg hover:brightness-125 transition-all"
              >
                Select Image
              </label>
              <input
                accept="image/*"
                type="file"
                id="imgInput"
                onChange={selectFileHandler}
                className="hidden"
              />
            </form>
            {templateProps.imageUrl !== selectedTemplate.props.imageUrl && (
              <button
                onClick={resetFileHandler}
                id="resetImage"
                className="w-fit px-4 py-2 rounded-lg bg-custom-purple text-custom-white hover:brightness-125 transition-all"
              >
                Reset Image
              </button>
            )}
          </div>
        )}
      </div>
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
              <input type="checkbox" className="accent-custom-purple mr-1" />
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
              <input type="checkbox" className="accent-custom-purple mr-1" />
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
      <svg
        width="378"
        height="271"
        viewBox="0 0 378 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="18" fill="#EAEAEA" />
        <path
          d="M56.58 24.126C55.704 24.126 54.912 23.976 54.204 23.676C53.508 23.376 52.956 22.944 52.548 22.38C52.14 21.816 51.93 21.15 51.918 20.382H54.618C54.654 20.898 54.834 21.306 55.158 21.606C55.494 21.906 55.95 22.056 56.526 22.056C57.114 22.056 57.576 21.918 57.912 21.642C58.248 21.354 58.416 20.982 58.416 20.526C58.416 20.154 58.302 19.848 58.074 19.608C57.846 19.368 57.558 19.182 57.21 19.05C56.874 18.906 56.406 18.75 55.806 18.582C54.99 18.342 54.324 18.108 53.808 17.88C53.304 17.64 52.866 17.286 52.494 16.818C52.134 16.338 51.954 15.702 51.954 14.91C51.954 14.166 52.14 13.518 52.512 12.966C52.884 12.414 53.406 11.994 54.078 11.706C54.75 11.406 55.518 11.256 56.382 11.256C57.678 11.256 58.728 11.574 59.532 12.21C60.348 12.834 60.798 13.71 60.882 14.838H58.11C58.086 14.406 57.9 14.052 57.552 13.776C57.216 13.488 56.766 13.344 56.202 13.344C55.71 13.344 55.314 13.47 55.014 13.722C54.726 13.974 54.582 14.34 54.582 14.82C54.582 15.156 54.69 15.438 54.906 15.666C55.134 15.882 55.41 16.062 55.734 16.206C56.07 16.338 56.538 16.494 57.138 16.674C57.954 16.914 58.62 17.154 59.136 17.394C59.652 17.634 60.096 17.994 60.468 18.474C60.84 18.954 61.026 19.584 61.026 20.364C61.026 21.036 60.852 21.66 60.504 22.236C60.156 22.812 59.646 23.274 58.974 23.622C58.302 23.958 57.504 24.126 56.58 24.126ZM71.9408 18.798C71.9408 19.158 71.9168 19.482 71.8688 19.77H64.5788C64.6388 20.49 64.8908 21.054 65.3348 21.462C65.7788 21.87 66.3248 22.074 66.9728 22.074C67.9088 22.074 68.5748 21.672 68.9708 20.868H71.6888C71.4008 21.828 70.8488 22.62 70.0328 23.244C69.2168 23.856 68.2148 24.162 67.0268 24.162C66.0668 24.162 65.2028 23.952 64.4348 23.532C63.6788 23.1 63.0848 22.494 62.6528 21.714C62.2328 20.934 62.0228 20.034 62.0228 19.014C62.0228 17.982 62.2328 17.076 62.6528 16.296C63.0728 15.516 63.6608 14.916 64.4168 14.496C65.1728 14.076 66.0428 13.866 67.0268 13.866C67.9748 13.866 68.8208 14.07 69.5648 14.478C70.3208 14.886 70.9028 15.468 71.3108 16.224C71.7308 16.968 71.9408 17.826 71.9408 18.798ZM69.3308 18.078C69.3188 17.43 69.0848 16.914 68.6288 16.53C68.1728 16.134 67.6148 15.936 66.9548 15.936C66.3308 15.936 65.8028 16.128 65.3708 16.512C64.9508 16.884 64.6928 17.406 64.5968 18.078H69.3308ZM76.1741 16.098V20.922C76.1741 21.258 76.2521 21.504 76.4081 21.66C76.5761 21.804 76.8521 21.876 77.2361 21.876H78.4061V24H76.8221C74.6981 24 73.6361 22.968 73.6361 20.904V16.098H72.4481V14.028H73.6361V11.562H76.1741V14.028H78.4061V16.098H76.1741ZM82.6126 16.098V20.922C82.6126 21.258 82.6906 21.504 82.8466 21.66C83.0146 21.804 83.2906 21.876 83.6746 21.876H84.8446V24H83.2606C81.1366 24 80.0746 22.968 80.0746 20.904V16.098H78.8866V14.028H80.0746V11.562H82.6126V14.028H84.8446V16.098H82.6126ZM87.3952 12.84C86.9512 12.84 86.5792 12.702 86.2792 12.426C85.9912 12.138 85.8472 11.784 85.8472 11.364C85.8472 10.944 85.9912 10.596 86.2792 10.32C86.5792 10.032 86.9512 9.888 87.3952 9.888C87.8392 9.888 88.2052 10.032 88.4932 10.32C88.7932 10.596 88.9432 10.944 88.9432 11.364C88.9432 11.784 88.7932 12.138 88.4932 12.426C88.2052 12.702 87.8392 12.84 87.3952 12.84ZM88.6372 14.028V24H86.1172V14.028H88.6372ZM96.1129 13.884C97.3009 13.884 98.2609 14.262 98.9929 15.018C99.7249 15.762 100.091 16.806 100.091 18.15V24H97.5709V18.492C97.5709 17.7 97.3729 17.094 96.9769 16.674C96.5809 16.242 96.0409 16.026 95.3569 16.026C94.6609 16.026 94.1089 16.242 93.7009 16.674C93.3049 17.094 93.1069 17.7 93.1069 18.492V24H90.5869V14.028H93.1069V15.27C93.4429 14.838 93.8689 14.502 94.3849 14.262C94.9129 14.01 95.4889 13.884 96.1129 13.884ZM105.853 13.866C106.597 13.866 107.251 14.016 107.815 14.316C108.379 14.604 108.823 14.982 109.147 15.45V14.028H111.685V24.072C111.685 24.996 111.499 25.818 111.127 26.538C110.755 27.27 110.197 27.846 109.453 28.266C108.709 28.698 107.809 28.914 106.753 28.914C105.337 28.914 104.173 28.584 103.261 27.924C102.361 27.264 101.851 26.364 101.731 25.224H104.233C104.365 25.68 104.647 26.04 105.079 26.304C105.523 26.58 106.057 26.718 106.681 26.718C107.413 26.718 108.007 26.496 108.463 26.052C108.919 25.62 109.147 24.96 109.147 24.072V22.524C108.823 22.992 108.373 23.382 107.797 23.694C107.233 24.006 106.585 24.162 105.853 24.162C105.013 24.162 104.245 23.946 103.549 23.514C102.853 23.082 102.301 22.476 101.893 21.696C101.497 20.904 101.299 19.998 101.299 18.978C101.299 17.97 101.497 17.076 101.893 16.296C102.301 15.516 102.847 14.916 103.531 14.496C104.227 14.076 105.001 13.866 105.853 13.866ZM109.147 19.014C109.147 18.402 109.027 17.88 108.787 17.448C108.547 17.004 108.223 16.668 107.815 16.44C107.407 16.2 106.969 16.08 106.501 16.08C106.033 16.08 105.601 16.194 105.205 16.422C104.809 16.65 104.485 16.986 104.233 17.43C103.993 17.862 103.873 18.378 103.873 18.978C103.873 19.578 103.993 20.106 104.233 20.562C104.485 21.006 104.809 21.348 105.205 21.588C105.613 21.828 106.045 21.948 106.501 21.948C106.969 21.948 107.407 21.834 107.815 21.606C108.223 21.366 108.547 21.03 108.787 20.598C109.027 20.154 109.147 19.626 109.147 19.014ZM117.423 24.162C116.607 24.162 115.875 24.018 115.227 23.73C114.579 23.43 114.063 23.028 113.679 22.524C113.307 22.02 113.103 21.462 113.067 20.85H115.605C115.653 21.234 115.839 21.552 116.163 21.804C116.499 22.056 116.913 22.182 117.405 22.182C117.885 22.182 118.257 22.086 118.521 21.894C118.797 21.702 118.935 21.456 118.935 21.156C118.935 20.832 118.767 20.592 118.431 20.436C118.107 20.268 117.585 20.088 116.865 19.896C116.121 19.716 115.509 19.53 115.029 19.338C114.561 19.146 114.153 18.852 113.805 18.456C113.469 18.06 113.301 17.526 113.301 16.854C113.301 16.302 113.457 15.798 113.769 15.342C114.093 14.886 114.549 14.526 115.137 14.262C115.737 13.998 116.439 13.866 117.243 13.866C118.431 13.866 119.379 14.166 120.087 14.766C120.795 15.354 121.185 16.152 121.257 17.16H118.845C118.809 16.764 118.641 16.452 118.341 16.224C118.053 15.984 117.663 15.864 117.171 15.864C116.715 15.864 116.361 15.948 116.109 16.116C115.869 16.284 115.749 16.518 115.749 16.818C115.749 17.154 115.917 17.412 116.253 17.592C116.589 17.76 117.111 17.934 117.819 18.114C118.539 18.294 119.133 18.48 119.601 18.672C120.069 18.864 120.471 19.164 120.807 19.572C121.155 19.968 121.335 20.496 121.347 21.156C121.347 21.732 121.185 22.248 120.861 22.704C120.549 23.16 120.093 23.52 119.493 23.784C118.905 24.036 118.215 24.162 117.423 24.162ZM125.976 18.978C125.976 17.97 126.174 17.076 126.57 16.296C126.978 15.516 127.524 14.916 128.208 14.496C128.904 14.076 129.678 13.866 130.53 13.866C131.274 13.866 131.922 14.016 132.474 14.316C133.038 14.616 133.488 14.994 133.824 15.45V14.028H136.362V24H133.824V22.542C133.5 23.01 133.05 23.4 132.474 23.712C131.91 24.012 131.256 24.162 130.512 24.162C129.672 24.162 128.904 23.946 128.208 23.514C127.524 23.082 126.978 22.476 126.57 21.696C126.174 20.904 125.976 19.998 125.976 18.978ZM133.824 19.014C133.824 18.402 133.704 17.88 133.464 17.448C133.224 17.004 132.9 16.668 132.492 16.44C132.084 16.2 131.646 16.08 131.178 16.08C130.71 16.08 130.278 16.194 129.882 16.422C129.486 16.65 129.162 16.986 128.91 17.43C128.67 17.862 128.55 18.378 128.55 18.978C128.55 19.578 128.67 20.106 128.91 20.562C129.162 21.006 129.486 21.348 129.882 21.588C130.29 21.828 130.722 21.948 131.178 21.948C131.646 21.948 132.084 21.834 132.492 21.606C132.9 21.366 133.224 21.03 133.464 20.598C133.704 20.154 133.824 19.626 133.824 19.014ZM143.809 13.884C144.997 13.884 145.957 14.262 146.689 15.018C147.421 15.762 147.787 16.806 147.787 18.15V24H145.267V18.492C145.267 17.7 145.069 17.094 144.673 16.674C144.277 16.242 143.737 16.026 143.053 16.026C142.357 16.026 141.805 16.242 141.397 16.674C141.001 17.094 140.803 17.7 140.803 18.492V24H138.283V14.028H140.803V15.27C141.139 14.838 141.565 14.502 142.081 14.262C142.609 14.01 143.185 13.884 143.809 13.884ZM148.996 18.978C148.996 17.97 149.194 17.076 149.59 16.296C149.998 15.516 150.55 14.916 151.246 14.496C151.942 14.076 152.716 13.866 153.568 13.866C154.216 13.866 154.834 14.01 155.422 14.298C156.01 14.574 156.478 14.946 156.826 15.414V10.68H159.382V24H156.826V22.524C156.514 23.016 156.076 23.412 155.512 23.712C154.948 24.012 154.294 24.162 153.55 24.162C152.71 24.162 151.942 23.946 151.246 23.514C150.55 23.082 149.998 22.476 149.59 21.696C149.194 20.904 148.996 19.998 148.996 18.978ZM156.844 19.014C156.844 18.402 156.724 17.88 156.484 17.448C156.244 17.004 155.92 16.668 155.512 16.44C155.104 16.2 154.666 16.08 154.198 16.08C153.73 16.08 153.298 16.194 152.902 16.422C152.506 16.65 152.182 16.986 151.93 17.43C151.69 17.862 151.57 18.378 151.57 18.978C151.57 19.578 151.69 20.106 151.93 20.562C152.182 21.006 152.506 21.348 152.902 21.588C153.31 21.828 153.742 21.948 154.198 21.948C154.666 21.948 155.104 21.834 155.512 21.606C155.92 21.366 156.244 21.03 156.484 20.598C156.724 20.154 156.844 19.626 156.844 19.014ZM164.44 17.7C164.44 16.464 164.716 15.36 165.268 14.388C165.832 13.404 166.594 12.642 167.554 12.102C168.526 11.55 169.612 11.274 170.812 11.274C172.216 11.274 173.446 11.634 174.502 12.354C175.558 13.074 176.296 14.07 176.716 15.342H173.818C173.53 14.742 173.122 14.292 172.594 13.992C172.078 13.692 171.478 13.542 170.794 13.542C170.062 13.542 169.408 13.716 168.832 14.064C168.268 14.4 167.824 14.88 167.5 15.504C167.188 16.128 167.032 16.86 167.032 17.7C167.032 18.528 167.188 19.26 167.5 19.896C167.824 20.52 168.268 21.006 168.832 21.354C169.408 21.69 170.062 21.858 170.794 21.858C171.478 21.858 172.078 21.708 172.594 21.408C173.122 21.096 173.53 20.64 173.818 20.04H176.716C176.296 21.324 175.558 22.326 174.502 23.046C173.458 23.754 172.228 24.108 170.812 24.108C169.612 24.108 168.526 23.838 167.554 23.298C166.594 22.746 165.832 21.984 165.268 21.012C164.716 20.04 164.44 18.936 164.44 17.7ZM182.756 24.162C181.796 24.162 180.932 23.952 180.164 23.532C179.396 23.1 178.79 22.494 178.346 21.714C177.914 20.934 177.698 20.034 177.698 19.014C177.698 17.994 177.92 17.094 178.364 16.314C178.82 15.534 179.438 14.934 180.218 14.514C180.998 14.082 181.868 13.866 182.828 13.866C183.788 13.866 184.658 14.082 185.438 14.514C186.218 14.934 186.83 15.534 187.274 16.314C187.73 17.094 187.958 17.994 187.958 19.014C187.958 20.034 187.724 20.934 187.256 21.714C186.8 22.494 186.176 23.1 185.384 23.532C184.604 23.952 183.728 24.162 182.756 24.162ZM182.756 21.966C183.212 21.966 183.638 21.858 184.034 21.642C184.442 21.414 184.766 21.078 185.006 20.634C185.246 20.19 185.366 19.65 185.366 19.014C185.366 18.066 185.114 17.34 184.61 16.836C184.118 16.32 183.512 16.062 182.792 16.062C182.072 16.062 181.466 16.32 180.974 16.836C180.494 17.34 180.254 18.066 180.254 19.014C180.254 19.962 180.488 20.694 180.956 21.21C181.436 21.714 182.036 21.966 182.756 21.966ZM188.619 18.978C188.619 17.97 188.817 17.076 189.213 16.296C189.621 15.516 190.173 14.916 190.869 14.496C191.565 14.076 192.339 13.866 193.191 13.866C193.839 13.866 194.457 14.01 195.045 14.298C195.633 14.574 196.101 14.946 196.449 15.414V10.68H199.005V24H196.449V22.524C196.137 23.016 195.699 23.412 195.135 23.712C194.571 24.012 193.917 24.162 193.173 24.162C192.333 24.162 191.565 23.946 190.869 23.514C190.173 23.082 189.621 22.476 189.213 21.696C188.817 20.904 188.619 19.998 188.619 18.978ZM196.467 19.014C196.467 18.402 196.347 17.88 196.107 17.448C195.867 17.004 195.543 16.668 195.135 16.44C194.727 16.2 194.289 16.08 193.821 16.08C193.353 16.08 192.921 16.194 192.525 16.422C192.129 16.65 191.805 16.986 191.553 17.43C191.313 17.862 191.193 18.378 191.193 18.978C191.193 19.578 191.313 20.106 191.553 20.562C191.805 21.006 192.129 21.348 192.525 21.588C192.933 21.828 193.365 21.948 193.821 21.948C194.289 21.948 194.727 21.834 195.135 21.606C195.543 21.366 195.867 21.03 196.107 20.598C196.347 20.154 196.467 19.626 196.467 19.014ZM210.196 18.798C210.196 19.158 210.172 19.482 210.124 19.77H202.834C202.894 20.49 203.146 21.054 203.59 21.462C204.034 21.87 204.58 22.074 205.228 22.074C206.164 22.074 206.83 21.672 207.226 20.868H209.944C209.656 21.828 209.104 22.62 208.288 23.244C207.472 23.856 206.47 24.162 205.282 24.162C204.322 24.162 203.458 23.952 202.69 23.532C201.934 23.1 201.34 22.494 200.908 21.714C200.488 20.934 200.278 20.034 200.278 19.014C200.278 17.982 200.488 17.076 200.908 16.296C201.328 15.516 201.916 14.916 202.672 14.496C203.428 14.076 204.298 13.866 205.282 13.866C206.23 13.866 207.076 14.07 207.82 14.478C208.576 14.886 209.158 15.468 209.566 16.224C209.986 16.968 210.196 17.826 210.196 18.798ZM207.586 18.078C207.574 17.43 207.34 16.914 206.884 16.53C206.428 16.134 205.87 15.936 205.21 15.936C204.586 15.936 204.058 16.128 203.626 16.512C203.206 16.884 202.948 17.406 202.852 18.078H207.586Z"
          fill="black"
        />
        <path
          d="M18.036 77.436L14.526 90H11.556L9.198 81.054L6.732 90L3.78 90.018L0.396 77.436H3.096L5.31 87.192L7.866 77.436H10.674L13.086 87.138L15.318 77.436H18.036ZM28.4115 84.798C28.4115 85.158 28.3875 85.482 28.3395 85.77H21.0495C21.1095 86.49 21.3615 87.054 21.8055 87.462C22.2495 87.87 22.7955 88.074 23.4435 88.074C24.3795 88.074 25.0455 87.672 25.4415 86.868H28.1595C27.8715 87.828 27.3195 88.62 26.5035 89.244C25.6875 89.856 24.6855 90.162 23.4975 90.162C22.5375 90.162 21.6735 89.952 20.9055 89.532C20.1495 89.1 19.5555 88.494 19.1235 87.714C18.7035 86.934 18.4935 86.034 18.4935 85.014C18.4935 83.982 18.7035 83.076 19.1235 82.296C19.5435 81.516 20.1315 80.916 20.8875 80.496C21.6435 80.076 22.5135 79.866 23.4975 79.866C24.4455 79.866 25.2915 80.07 26.0355 80.478C26.7915 80.886 27.3735 81.468 27.7815 82.224C28.2015 82.968 28.4115 83.826 28.4115 84.798ZM25.8015 84.078C25.7895 83.43 25.5555 82.914 25.0995 82.53C24.6435 82.134 24.0855 81.936 23.4255 81.936C22.8015 81.936 22.2735 82.128 21.8415 82.512C21.4215 82.884 21.1635 83.406 21.0675 84.078H25.8015ZM32.2308 81.486C32.5548 81.006 32.9988 80.616 33.5628 80.316C34.1388 80.016 34.7928 79.866 35.5248 79.866C36.3768 79.866 37.1448 80.076 37.8288 80.496C38.5248 80.916 39.0708 81.516 39.4668 82.296C39.8748 83.064 40.0788 83.958 40.0788 84.978C40.0788 85.998 39.8748 86.904 39.4668 87.696C39.0708 88.476 38.5248 89.082 37.8288 89.514C37.1448 89.946 36.3768 90.162 35.5248 90.162C34.7808 90.162 34.1268 90.018 33.5628 89.73C33.0108 89.43 32.5668 89.046 32.2308 88.578V90H29.7108V76.68H32.2308V81.486ZM37.5048 84.978C37.5048 84.378 37.3788 83.862 37.1268 83.43C36.8868 82.986 36.5628 82.65 36.1548 82.422C35.7588 82.194 35.3268 82.08 34.8588 82.08C34.4028 82.08 33.9708 82.2 33.5628 82.44C33.1668 82.668 32.8428 83.004 32.5908 83.448C32.3508 83.892 32.2308 84.414 32.2308 85.014C32.2308 85.614 32.3508 86.136 32.5908 86.58C32.8428 87.024 33.1668 87.366 33.5628 87.606C33.9708 87.834 34.4028 87.948 34.8588 87.948C35.3268 87.948 35.7588 87.828 36.1548 87.588C36.5628 87.348 36.8868 87.006 37.1268 86.562C37.3788 86.118 37.5048 85.59 37.5048 84.978ZM46.986 79.884C47.742 79.884 48.414 80.052 49.002 80.388C49.59 80.712 50.046 81.198 50.37 81.846C50.706 82.482 50.874 83.25 50.874 84.15V90H48.354V84.492C48.354 83.7 48.156 83.094 47.76 82.674C47.364 82.242 46.824 82.026 46.14 82.026C45.444 82.026 44.892 82.242 44.484 82.674C44.088 83.094 43.89 83.7 43.89 84.492V90H41.37V76.68H43.89V81.27C44.214 80.838 44.646 80.502 45.186 80.262C45.726 80.01 46.326 79.884 46.986 79.884ZM57.1584 90.162C56.1984 90.162 55.3344 89.952 54.5664 89.532C53.7984 89.1 53.1924 88.494 52.7484 87.714C52.3164 86.934 52.1004 86.034 52.1004 85.014C52.1004 83.994 52.3224 83.094 52.7664 82.314C53.2224 81.534 53.8404 80.934 54.6204 80.514C55.4004 80.082 56.2704 79.866 57.2304 79.866C58.1904 79.866 59.0604 80.082 59.8404 80.514C60.6204 80.934 61.2324 81.534 61.6764 82.314C62.1324 83.094 62.3604 83.994 62.3604 85.014C62.3604 86.034 62.1264 86.934 61.6584 87.714C61.2024 88.494 60.5784 89.1 59.7864 89.532C59.0064 89.952 58.1304 90.162 57.1584 90.162ZM57.1584 87.966C57.6144 87.966 58.0404 87.858 58.4364 87.642C58.8444 87.414 59.1684 87.078 59.4084 86.634C59.6484 86.19 59.7684 85.65 59.7684 85.014C59.7684 84.066 59.5164 83.34 59.0124 82.836C58.5204 82.32 57.9144 82.062 57.1944 82.062C56.4744 82.062 55.8684 82.32 55.3764 82.836C54.8964 83.34 54.6564 84.066 54.6564 85.014C54.6564 85.962 54.8904 86.694 55.3584 87.21C55.8384 87.714 56.4384 87.966 57.1584 87.966ZM68.097 90.162C67.137 90.162 66.273 89.952 65.505 89.532C64.737 89.1 64.131 88.494 63.687 87.714C63.255 86.934 63.039 86.034 63.039 85.014C63.039 83.994 63.261 83.094 63.705 82.314C64.161 81.534 64.779 80.934 65.559 80.514C66.339 80.082 67.209 79.866 68.169 79.866C69.129 79.866 69.999 80.082 70.779 80.514C71.559 80.934 72.171 81.534 72.615 82.314C73.071 83.094 73.299 83.994 73.299 85.014C73.299 86.034 73.065 86.934 72.597 87.714C72.141 88.494 71.517 89.1 70.725 89.532C69.945 89.952 69.069 90.162 68.097 90.162ZM68.097 87.966C68.553 87.966 68.979 87.858 69.375 87.642C69.783 87.414 70.107 87.078 70.347 86.634C70.587 86.19 70.707 85.65 70.707 85.014C70.707 84.066 70.455 83.34 69.951 82.836C69.459 82.32 68.853 82.062 68.133 82.062C67.413 82.062 66.807 82.32 66.315 82.836C65.835 83.34 65.595 84.066 65.595 85.014C65.595 85.962 65.829 86.694 66.297 87.21C66.777 87.714 67.377 87.966 68.097 87.966ZM80.5115 90L77.1275 85.752V90H74.6075V76.68H77.1275V84.258L80.4755 80.028H83.7515L79.3595 85.032L83.7875 90H80.5115ZM91.2623 82.098V86.922C91.2623 87.258 91.3403 87.504 91.4963 87.66C91.6643 87.804 91.9403 87.876 92.3243 87.876H93.4943V90H91.9103C89.7863 90 88.7243 88.968 88.7243 86.904V82.098H87.5363V80.028H88.7243V77.562H91.2623V80.028H93.4943V82.098H91.2623ZM99.1948 90.162C98.2348 90.162 97.3708 89.952 96.6028 89.532C95.8348 89.1 95.2288 88.494 94.7848 87.714C94.3528 86.934 94.1368 86.034 94.1368 85.014C94.1368 83.994 94.3588 83.094 94.8028 82.314C95.2588 81.534 95.8768 80.934 96.6568 80.514C97.4368 80.082 98.3068 79.866 99.2668 79.866C100.227 79.866 101.097 80.082 101.877 80.514C102.657 80.934 103.269 81.534 103.713 82.314C104.169 83.094 104.397 83.994 104.397 85.014C104.397 86.034 104.163 86.934 103.695 87.714C103.239 88.494 102.615 89.1 101.823 89.532C101.043 89.952 100.167 90.162 99.1948 90.162ZM99.1948 87.966C99.6508 87.966 100.077 87.858 100.473 87.642C100.881 87.414 101.205 87.078 101.445 86.634C101.685 86.19 101.805 85.65 101.805 85.014C101.805 84.066 101.553 83.34 101.049 82.836C100.557 82.32 99.9508 82.062 99.2308 82.062C98.5108 82.062 97.9048 82.32 97.4128 82.836C96.9328 83.34 96.6928 84.066 96.6928 85.014C96.6928 85.962 96.9268 86.694 97.3948 87.21C97.8748 87.714 98.4748 87.966 99.1948 87.966ZM113.792 90.126C112.916 90.126 112.124 89.976 111.416 89.676C110.72 89.376 110.168 88.944 109.76 88.38C109.352 87.816 109.142 87.15 109.13 86.382H111.83C111.866 86.898 112.046 87.306 112.37 87.606C112.706 87.906 113.162 88.056 113.738 88.056C114.326 88.056 114.788 87.918 115.124 87.642C115.46 87.354 115.628 86.982 115.628 86.526C115.628 86.154 115.514 85.848 115.286 85.608C115.058 85.368 114.77 85.182 114.422 85.05C114.086 84.906 113.618 84.75 113.018 84.582C112.202 84.342 111.536 84.108 111.02 83.88C110.516 83.64 110.078 83.286 109.706 82.818C109.346 82.338 109.166 81.702 109.166 80.91C109.166 80.166 109.352 79.518 109.724 78.966C110.096 78.414 110.618 77.994 111.29 77.706C111.962 77.406 112.73 77.256 113.594 77.256C114.89 77.256 115.94 77.574 116.744 78.21C117.56 78.834 118.01 79.71 118.094 80.838H115.322C115.298 80.406 115.112 80.052 114.764 79.776C114.428 79.488 113.978 79.344 113.414 79.344C112.922 79.344 112.526 79.47 112.226 79.722C111.938 79.974 111.794 80.34 111.794 80.82C111.794 81.156 111.902 81.438 112.118 81.666C112.346 81.882 112.622 82.062 112.946 82.206C113.282 82.338 113.75 82.494 114.35 82.674C115.166 82.914 115.832 83.154 116.348 83.394C116.864 83.634 117.308 83.994 117.68 84.474C118.052 84.954 118.238 85.584 118.238 86.364C118.238 87.036 118.064 87.66 117.716 88.236C117.368 88.812 116.858 89.274 116.186 89.622C115.514 89.958 114.716 90.126 113.792 90.126ZM129.153 84.798C129.153 85.158 129.129 85.482 129.081 85.77H121.791C121.851 86.49 122.103 87.054 122.547 87.462C122.991 87.87 123.537 88.074 124.185 88.074C125.121 88.074 125.787 87.672 126.183 86.868H128.901C128.613 87.828 128.061 88.62 127.245 89.244C126.429 89.856 125.427 90.162 124.239 90.162C123.279 90.162 122.415 89.952 121.647 89.532C120.891 89.1 120.297 88.494 119.865 87.714C119.445 86.934 119.235 86.034 119.235 85.014C119.235 83.982 119.445 83.076 119.865 82.296C120.285 81.516 120.873 80.916 121.629 80.496C122.385 80.076 123.255 79.866 124.239 79.866C125.187 79.866 126.033 80.07 126.777 80.478C127.533 80.886 128.115 81.468 128.523 82.224C128.943 82.968 129.153 83.826 129.153 84.798ZM126.543 84.078C126.531 83.43 126.297 82.914 125.841 82.53C125.385 82.134 124.827 81.936 124.167 81.936C123.543 81.936 123.015 82.128 122.583 82.512C122.163 82.884 121.905 83.406 121.809 84.078H126.543ZM135.978 79.884C137.166 79.884 138.126 80.262 138.858 81.018C139.59 81.762 139.956 82.806 139.956 84.15V90H137.436V84.492C137.436 83.7 137.238 83.094 136.842 82.674C136.446 82.242 135.906 82.026 135.222 82.026C134.526 82.026 133.974 82.242 133.566 82.674C133.17 83.094 132.972 83.7 132.972 84.492V90H130.452V80.028H132.972V81.27C133.308 80.838 133.734 80.502 134.25 80.262C134.778 80.01 135.354 79.884 135.978 79.884ZM141.165 84.978C141.165 83.97 141.363 83.076 141.759 82.296C142.167 81.516 142.719 80.916 143.415 80.496C144.111 80.076 144.885 79.866 145.737 79.866C146.385 79.866 147.003 80.01 147.591 80.298C148.179 80.574 148.647 80.946 148.995 81.414V76.68H151.551V90H148.995V88.524C148.683 89.016 148.245 89.412 147.681 89.712C147.117 90.012 146.463 90.162 145.719 90.162C144.879 90.162 144.111 89.946 143.415 89.514C142.719 89.082 142.167 88.476 141.759 87.696C141.363 86.904 141.165 85.998 141.165 84.978ZM149.013 85.014C149.013 84.402 148.893 83.88 148.653 83.448C148.413 83.004 148.089 82.668 147.681 82.44C147.273 82.2 146.835 82.08 146.367 82.08C145.899 82.08 145.467 82.194 145.071 82.422C144.675 82.65 144.351 82.986 144.099 83.43C143.859 83.862 143.739 84.378 143.739 84.978C143.739 85.578 143.859 86.106 144.099 86.562C144.351 87.006 144.675 87.348 145.071 87.588C145.479 87.828 145.911 87.948 146.367 87.948C146.835 87.948 147.273 87.834 147.681 87.606C148.089 87.366 148.413 87.03 148.653 86.598C148.893 86.154 149.013 85.626 149.013 85.014ZM156.573 84.978C156.573 83.97 156.771 83.076 157.167 82.296C157.575 81.516 158.127 80.916 158.823 80.496C159.519 80.076 160.293 79.866 161.145 79.866C161.793 79.866 162.411 80.01 162.999 80.298C163.587 80.574 164.055 80.946 164.403 81.414V76.68H166.959V90H164.403V88.524C164.091 89.016 163.653 89.412 163.089 89.712C162.525 90.012 161.871 90.162 161.127 90.162C160.287 90.162 159.519 89.946 158.823 89.514C158.127 89.082 157.575 88.476 157.167 87.696C156.771 86.904 156.573 85.998 156.573 84.978ZM164.421 85.014C164.421 84.402 164.301 83.88 164.061 83.448C163.821 83.004 163.497 82.668 163.089 82.44C162.681 82.2 162.243 82.08 161.775 82.08C161.307 82.08 160.875 82.194 160.479 82.422C160.083 82.65 159.759 82.986 159.507 83.43C159.267 83.862 159.147 84.378 159.147 84.978C159.147 85.578 159.267 86.106 159.507 86.562C159.759 87.006 160.083 87.348 160.479 87.588C160.887 87.828 161.319 87.948 161.775 87.948C162.243 87.948 162.681 87.834 163.089 87.606C163.497 87.366 163.821 87.03 164.061 86.598C164.301 86.154 164.421 85.626 164.421 85.014ZM168.232 84.978C168.232 83.97 168.43 83.076 168.826 82.296C169.234 81.516 169.78 80.916 170.464 80.496C171.16 80.076 171.934 79.866 172.786 79.866C173.53 79.866 174.178 80.016 174.73 80.316C175.294 80.616 175.744 80.994 176.08 81.45V80.028H178.618V90H176.08V88.542C175.756 89.01 175.306 89.4 174.73 89.712C174.166 90.012 173.512 90.162 172.768 90.162C171.928 90.162 171.16 89.946 170.464 89.514C169.78 89.082 169.234 88.476 168.826 87.696C168.43 86.904 168.232 85.998 168.232 84.978ZM176.08 85.014C176.08 84.402 175.96 83.88 175.72 83.448C175.48 83.004 175.156 82.668 174.748 82.44C174.34 82.2 173.902 82.08 173.434 82.08C172.966 82.08 172.534 82.194 172.138 82.422C171.742 82.65 171.418 82.986 171.166 83.43C170.926 83.862 170.806 84.378 170.806 84.978C170.806 85.578 170.926 86.106 171.166 86.562C171.418 87.006 171.742 87.348 172.138 87.588C172.546 87.828 172.978 87.948 173.434 87.948C173.902 87.948 174.34 87.834 174.748 87.606C175.156 87.366 175.48 87.03 175.72 86.598C175.96 86.154 176.08 85.626 176.08 85.014ZM183.474 82.098V86.922C183.474 87.258 183.552 87.504 183.708 87.66C183.876 87.804 184.152 87.876 184.536 87.876H185.706V90H184.122C181.998 90 180.936 88.968 180.936 86.904V82.098H179.748V80.028H180.936V77.562H183.474V80.028H185.706V82.098H183.474ZM186.33 84.978C186.33 83.97 186.528 83.076 186.924 82.296C187.332 81.516 187.878 80.916 188.562 80.496C189.258 80.076 190.032 79.866 190.884 79.866C191.628 79.866 192.276 80.016 192.828 80.316C193.392 80.616 193.842 80.994 194.178 81.45V80.028H196.716V90H194.178V88.542C193.854 89.01 193.404 89.4 192.828 89.712C192.264 90.012 191.61 90.162 190.866 90.162C190.026 90.162 189.258 89.946 188.562 89.514C187.878 89.082 187.332 88.476 186.924 87.696C186.528 86.904 186.33 85.998 186.33 84.978ZM194.178 85.014C194.178 84.402 194.058 83.88 193.818 83.448C193.578 83.004 193.254 82.668 192.846 82.44C192.438 82.2 192 82.08 191.532 82.08C191.064 82.08 190.632 82.194 190.236 82.422C189.84 82.65 189.516 82.986 189.264 83.43C189.024 83.862 188.904 84.378 188.904 84.978C188.904 85.578 189.024 86.106 189.264 86.562C189.516 87.006 189.84 87.348 190.236 87.588C190.644 87.828 191.076 87.948 191.532 87.948C192 87.948 192.438 87.834 192.846 87.606C193.254 87.366 193.578 87.03 193.818 86.598C194.058 86.154 194.178 85.626 194.178 85.014Z"
          fill="black"
        />
        <path
          d="M22.0396 14.272H16.8556V17.008C17.0796 16.7307 17.3996 16.5067 17.8156 16.336C18.2316 16.1547 18.6742 16.064 19.1436 16.064C19.9969 16.064 20.6956 16.2507 21.2396 16.624C21.7836 16.9973 22.1782 17.4773 22.4236 18.064C22.6689 18.64 22.7916 19.2587 22.7916 19.92C22.7916 21.1467 22.4396 22.1333 21.7356 22.88C21.0422 23.6267 20.0502 24 18.7596 24C17.5436 24 16.5729 23.696 15.8476 23.088C15.1222 22.48 14.7116 21.6853 14.6156 20.704H16.7916C16.8876 21.1307 17.1009 21.472 17.4316 21.728C17.7729 21.984 18.2049 22.112 18.7276 22.112C19.3569 22.112 19.8316 21.9147 20.1516 21.52C20.4716 21.1253 20.6316 20.6027 20.6316 19.952C20.6316 19.2907 20.4662 18.7893 20.1356 18.448C19.8156 18.096 19.3409 17.92 18.7116 17.92C18.2636 17.92 17.8902 18.032 17.5916 18.256C17.2929 18.48 17.0796 18.7787 16.9516 19.152H14.8076V12.304H22.0396V14.272Z"
          fill="black"
        />
        <path
          d="M8 169.5H370C374.142 169.5 377.5 172.858 377.5 177V197C377.5 201.142 374.142 204.5 370 204.5H7.99999C3.85786 204.5 0.5 201.142 0.5 197V177C0.5 172.858 3.85786 169.5 8 169.5Z"
          fill="white"
          stroke="#DDDDDD"
        />
        <path
          d="M19.91 182.242L16.732 188.318V192H15.458V188.318L12.266 182.242H13.68L16.088 187.184L18.496 182.242H19.91ZM24.5998 192.126C23.8811 192.126 23.2278 191.963 22.6398 191.636C22.0611 191.309 21.6038 190.847 21.2678 190.25C20.9411 189.643 20.7778 188.943 20.7778 188.15C20.7778 187.366 20.9458 186.675 21.2818 186.078C21.6271 185.471 22.0938 185.009 22.6818 184.692C23.2698 184.365 23.9278 184.202 24.6558 184.202C25.3838 184.202 26.0418 184.365 26.6298 184.692C27.2178 185.009 27.6798 185.467 28.0158 186.064C28.3611 186.661 28.5338 187.357 28.5338 188.15C28.5338 188.943 28.3564 189.643 28.0018 190.25C27.6564 190.847 27.1851 191.309 26.5878 191.636C25.9904 191.963 25.3278 192.126 24.5998 192.126ZM24.5998 191.006C25.0571 191.006 25.4864 190.899 25.8878 190.684C26.2891 190.469 26.6111 190.147 26.8538 189.718C27.1058 189.289 27.2318 188.766 27.2318 188.15C27.2318 187.534 27.1104 187.011 26.8678 186.582C26.6251 186.153 26.3078 185.835 25.9158 185.63C25.5238 185.415 25.0991 185.308 24.6418 185.308C24.1751 185.308 23.7458 185.415 23.3538 185.63C22.9711 185.835 22.6631 186.153 22.4298 186.582C22.1964 187.011 22.0798 187.534 22.0798 188.15C22.0798 188.775 22.1918 189.303 22.4158 189.732C22.6491 190.161 22.9571 190.483 23.3398 190.698C23.7224 190.903 24.1424 191.006 24.5998 191.006ZM37.0129 184.328V192H35.7389V190.866C35.4962 191.258 35.1555 191.566 34.7169 191.79C34.2875 192.005 33.8115 192.112 33.2889 192.112C32.6915 192.112 32.1549 191.991 31.6789 191.748C31.2029 191.496 30.8249 191.123 30.5449 190.628C30.2742 190.133 30.1389 189.531 30.1389 188.822V184.328H31.3989V188.654C31.3989 189.41 31.5902 189.993 31.9729 190.404C32.3555 190.805 32.8782 191.006 33.5409 191.006C34.2222 191.006 34.7589 190.796 35.1509 190.376C35.5429 189.956 35.7389 189.345 35.7389 188.542V184.328H37.0129ZM40.4379 185.574C40.6619 185.135 40.9793 184.795 41.3899 184.552C41.8099 184.309 42.3186 184.188 42.9159 184.188V185.504H42.5799C41.1519 185.504 40.4379 186.279 40.4379 187.828V192H39.1639V184.328H40.4379V185.574ZM60.383 182.242L57.555 192H56.127L53.859 184.146L51.507 192L50.093 192.014L47.363 182.242H48.721L50.849 190.516L53.201 182.242H54.629L56.869 190.488L59.011 182.242H60.383ZM68.7772 187.87C68.7772 188.113 68.7632 188.369 68.7352 188.64H62.6032C62.6499 189.396 62.9066 189.989 63.3732 190.418C63.8492 190.838 64.4232 191.048 65.0952 191.048C65.6459 191.048 66.1032 190.922 66.4672 190.67C66.8406 190.409 67.1019 190.063 67.2512 189.634H68.6232C68.4179 190.371 68.0072 190.973 67.3912 191.44C66.7752 191.897 66.0099 192.126 65.0952 192.126C64.3672 192.126 63.7139 191.963 63.1352 191.636C62.5659 191.309 62.1179 190.847 61.7912 190.25C61.4646 189.643 61.3012 188.943 61.3012 188.15C61.3012 187.357 61.4599 186.661 61.7772 186.064C62.0946 185.467 62.5379 185.009 63.1072 184.692C63.6859 184.365 64.3486 184.202 65.0952 184.202C65.8232 184.202 66.4672 184.361 67.0272 184.678C67.5872 184.995 68.0166 185.434 68.3152 185.994C68.6232 186.545 68.7772 187.17 68.7772 187.87ZM67.4612 187.604C67.4612 187.119 67.3539 186.703 67.1392 186.358C66.9246 186.003 66.6306 185.737 66.2572 185.56C65.8932 185.373 65.4872 185.28 65.0392 185.28C64.3952 185.28 63.8446 185.485 63.3872 185.896C62.9392 186.307 62.6826 186.876 62.6172 187.604H67.4612ZM71.7329 185.756C71.9942 185.299 72.3769 184.925 72.8809 184.636C73.3849 184.347 73.9589 184.202 74.6029 184.202C75.2935 184.202 75.9142 184.365 76.4649 184.692C77.0155 185.019 77.4495 185.481 77.7669 186.078C78.0842 186.666 78.2429 187.352 78.2429 188.136C78.2429 188.911 78.0842 189.601 77.7669 190.208C77.4495 190.815 77.0109 191.286 76.4509 191.622C75.9002 191.958 75.2842 192.126 74.6029 192.126C73.9402 192.126 73.3569 191.981 72.8529 191.692C72.3582 191.403 71.9849 191.034 71.7329 190.586V192H70.4589V181.64H71.7329V185.756ZM76.9409 188.136C76.9409 187.557 76.8242 187.053 76.5909 186.624C76.3575 186.195 76.0402 185.868 75.6389 185.644C75.2469 185.42 74.8129 185.308 74.3369 185.308C73.8702 185.308 73.4362 185.425 73.0349 185.658C72.6429 185.882 72.3255 186.213 72.0829 186.652C71.8495 187.081 71.7329 187.581 71.7329 188.15C71.7329 188.729 71.8495 189.237 72.0829 189.676C72.3255 190.105 72.6429 190.437 73.0349 190.67C73.4362 190.894 73.8702 191.006 74.3369 191.006C74.8129 191.006 75.2469 190.894 75.6389 190.67C76.0402 190.437 76.3575 190.105 76.5909 189.676C76.8242 189.237 76.9409 188.724 76.9409 188.136ZM83.7278 184.188C84.3065 184.188 84.8291 184.314 85.2958 184.566C85.7625 184.809 86.1265 185.177 86.3878 185.672C86.6585 186.167 86.7938 186.769 86.7938 187.478V192H85.5338V187.66C85.5338 186.895 85.3425 186.311 84.9598 185.91C84.5771 185.499 84.0545 185.294 83.3918 185.294C82.7198 185.294 82.1831 185.504 81.7818 185.924C81.3898 186.344 81.1938 186.955 81.1938 187.758V192H79.9198V181.64H81.1938V185.42C81.4458 185.028 81.7911 184.725 82.2298 184.51C82.6778 184.295 83.1771 184.188 83.7278 184.188ZM92.2209 192.126C91.5022 192.126 90.8489 191.963 90.2609 191.636C89.6822 191.309 89.2249 190.847 88.8889 190.25C88.5622 189.643 88.3989 188.943 88.3989 188.15C88.3989 187.366 88.5669 186.675 88.9029 186.078C89.2482 185.471 89.7149 185.009 90.3029 184.692C90.8909 184.365 91.5489 184.202 92.2769 184.202C93.0049 184.202 93.6629 184.365 94.2509 184.692C94.8389 185.009 95.3009 185.467 95.6369 186.064C95.9822 186.661 96.1549 187.357 96.1549 188.15C96.1549 188.943 95.9775 189.643 95.6229 190.25C95.2775 190.847 94.8062 191.309 94.2089 191.636C93.6115 191.963 92.9489 192.126 92.2209 192.126ZM92.2209 191.006C92.6782 191.006 93.1075 190.899 93.5089 190.684C93.9102 190.469 94.2322 190.147 94.4749 189.718C94.7269 189.289 94.8529 188.766 94.8529 188.15C94.8529 187.534 94.7315 187.011 94.4889 186.582C94.2462 186.153 93.9289 185.835 93.5369 185.63C93.1449 185.415 92.7202 185.308 92.2629 185.308C91.7962 185.308 91.3669 185.415 90.9749 185.63C90.5922 185.835 90.2842 186.153 90.0509 186.582C89.8175 187.011 89.7009 187.534 89.7009 188.15C89.7009 188.775 89.8129 189.303 90.0369 189.732C90.2702 190.161 90.5782 190.483 90.9609 190.698C91.3435 190.903 91.7635 191.006 92.2209 191.006ZM101.176 192.126C100.457 192.126 99.804 191.963 99.216 191.636C98.6373 191.309 98.18 190.847 97.844 190.25C97.5173 189.643 97.354 188.943 97.354 188.15C97.354 187.366 97.522 186.675 97.858 186.078C98.2033 185.471 98.67 185.009 99.258 184.692C99.846 184.365 100.504 184.202 101.232 184.202C101.96 184.202 102.618 184.365 103.206 184.692C103.794 185.009 104.256 185.467 104.592 186.064C104.937 186.661 105.11 187.357 105.11 188.15C105.11 188.943 104.933 189.643 104.578 190.25C104.233 190.847 103.761 191.309 103.164 191.636C102.567 191.963 101.904 192.126 101.176 192.126ZM101.176 191.006C101.633 191.006 102.063 190.899 102.464 190.684C102.865 190.469 103.187 190.147 103.43 189.718C103.682 189.289 103.808 188.766 103.808 188.15C103.808 187.534 103.687 187.011 103.444 186.582C103.201 186.153 102.884 185.835 102.492 185.63C102.1 185.415 101.675 185.308 101.218 185.308C100.751 185.308 100.322 185.415 99.93 185.63C99.5473 185.835 99.2393 186.153 99.006 186.582C98.7726 187.011 98.656 187.534 98.656 188.15C98.656 188.775 98.768 189.303 98.992 189.732C99.2253 190.161 99.5333 190.483 99.916 190.698C100.299 190.903 100.719 191.006 101.176 191.006ZM111.069 192L108.059 188.612V192H106.785V181.64H108.059V187.73L111.013 184.328H112.791L109.179 188.15L112.805 192H111.069ZM118.969 182.242V188.416C118.969 189.284 119.179 189.928 119.599 190.348C120.028 190.768 120.621 190.978 121.377 190.978C122.123 190.978 122.707 190.768 123.127 190.348C123.556 189.928 123.771 189.284 123.771 188.416V182.242H125.045V188.402C125.045 189.214 124.881 189.9 124.555 190.46C124.228 191.011 123.785 191.421 123.225 191.692C122.674 191.963 122.053 192.098 121.363 192.098C120.672 192.098 120.047 191.963 119.487 191.692C118.936 191.421 118.497 191.011 118.171 190.46C117.853 189.9 117.695 189.214 117.695 188.402V182.242H118.969ZM132.308 192L129.984 188.01H128.444V192H127.17V182.242H130.32C131.057 182.242 131.678 182.368 132.182 182.62C132.695 182.872 133.078 183.213 133.33 183.642C133.582 184.071 133.708 184.561 133.708 185.112C133.708 185.784 133.512 186.377 133.12 186.89C132.737 187.403 132.158 187.744 131.384 187.912L133.834 192H132.308ZM128.444 186.988H130.32C131.01 186.988 131.528 186.82 131.874 186.484C132.219 186.139 132.392 185.681 132.392 185.112C132.392 184.533 132.219 184.085 131.874 183.768C131.538 183.451 131.02 183.292 130.32 183.292H128.444V186.988ZM136.961 190.964H140.377V192H135.687V182.242H136.961V190.964Z"
          fill="#999999"
        />
        <path
          d="M2.352 122.278V125.54H5.908V126.59H2.352V129.95H6.328V131H1.078V121.228H6.328V122.278H2.352ZM11.9937 123.188C12.9271 123.188 13.6831 123.473 14.2617 124.042C14.8404 124.602 15.1297 125.414 15.1297 126.478V131H13.8697V126.66C13.8697 125.895 13.6784 125.311 13.2957 124.91C12.9131 124.499 12.3904 124.294 11.7277 124.294C11.0557 124.294 10.5191 124.504 10.1177 124.924C9.72573 125.344 9.52973 125.955 9.52973 126.758V131H8.25573V123.328H9.52973V124.42C9.78173 124.028 10.1224 123.725 10.5517 123.51C10.9904 123.295 11.4711 123.188 11.9937 123.188ZM18.7648 124.378V128.9C18.7648 129.273 18.8441 129.539 19.0028 129.698C19.1615 129.847 19.4368 129.922 19.8288 129.922H20.7668V131H19.6188C18.9095 131 18.3775 130.837 18.0228 130.51C17.6681 130.183 17.4908 129.647 17.4908 128.9V124.378H16.4968V123.328H17.4908V121.396H18.7648V123.328H20.7668V124.378H18.7648ZM29.3104 126.87C29.3104 127.113 29.2964 127.369 29.2684 127.64H23.1364C23.1831 128.396 23.4398 128.989 23.9064 129.418C24.3824 129.838 24.9564 130.048 25.6284 130.048C26.1791 130.048 26.6364 129.922 27.0004 129.67C27.3738 129.409 27.6351 129.063 27.7844 128.634H29.1564C28.9511 129.371 28.5404 129.973 27.9244 130.44C27.3084 130.897 26.5431 131.126 25.6284 131.126C24.9004 131.126 24.2471 130.963 23.6684 130.636C23.0991 130.309 22.6511 129.847 22.3244 129.25C21.9978 128.643 21.8344 127.943 21.8344 127.15C21.8344 126.357 21.9931 125.661 22.3104 125.064C22.6278 124.467 23.0711 124.009 23.6404 123.692C24.2191 123.365 24.8818 123.202 25.6284 123.202C26.3564 123.202 27.0004 123.361 27.5604 123.678C28.1204 123.995 28.5498 124.434 28.8484 124.994C29.1564 125.545 29.3104 126.17 29.3104 126.87ZM27.9944 126.604C27.9944 126.119 27.8871 125.703 27.6724 125.358C27.4578 125.003 27.1638 124.737 26.7904 124.56C26.4264 124.373 26.0204 124.28 25.5724 124.28C24.9284 124.28 24.3778 124.485 23.9204 124.896C23.4724 125.307 23.2158 125.876 23.1504 126.604H27.9944ZM32.2661 124.574C32.4901 124.135 32.8074 123.795 33.2181 123.552C33.6381 123.309 34.1467 123.188 34.7441 123.188V124.504H34.4081C32.9801 124.504 32.2661 125.279 32.2661 126.828V131H30.9921V123.328H32.2661V124.574ZM46.5551 123.328L41.9351 134.612H40.6191L42.1311 130.916L39.0371 123.328H40.4511L42.8591 129.544L45.2391 123.328H46.5551ZM51.1818 131.126C50.4631 131.126 49.8098 130.963 49.2218 130.636C48.6431 130.309 48.1858 129.847 47.8498 129.25C47.5231 128.643 47.3598 127.943 47.3598 127.15C47.3598 126.366 47.5278 125.675 47.8638 125.078C48.2091 124.471 48.6758 124.009 49.2638 123.692C49.8518 123.365 50.5098 123.202 51.2378 123.202C51.9658 123.202 52.6238 123.365 53.2118 123.692C53.7998 124.009 54.2618 124.467 54.5978 125.064C54.9431 125.661 55.1158 126.357 55.1158 127.15C55.1158 127.943 54.9385 128.643 54.5838 129.25C54.2385 129.847 53.7671 130.309 53.1698 130.636C52.5725 130.963 51.9098 131.126 51.1818 131.126ZM51.1818 130.006C51.6391 130.006 52.0685 129.899 52.4698 129.684C52.8711 129.469 53.1931 129.147 53.4358 128.718C53.6878 128.289 53.8138 127.766 53.8138 127.15C53.8138 126.534 53.6925 126.011 53.4498 125.582C53.2071 125.153 52.8898 124.835 52.4978 124.63C52.1058 124.415 51.6811 124.308 51.2238 124.308C50.7571 124.308 50.3278 124.415 49.9358 124.63C49.5531 124.835 49.2451 125.153 49.0118 125.582C48.7785 126.011 48.6618 126.534 48.6618 127.15C48.6618 127.775 48.7738 128.303 48.9978 128.732C49.2311 129.161 49.5391 129.483 49.9218 129.698C50.3045 129.903 50.7245 130.006 51.1818 130.006ZM63.5949 123.328V131H62.3209V129.866C62.0782 130.258 61.7376 130.566 61.2989 130.79C60.8696 131.005 60.3936 131.112 59.8709 131.112C59.2736 131.112 58.7369 130.991 58.2609 130.748C57.7849 130.496 57.4069 130.123 57.1269 129.628C56.8562 129.133 56.7209 128.531 56.7209 127.822V123.328H57.9809V127.654C57.9809 128.41 58.1722 128.993 58.5549 129.404C58.9376 129.805 59.4602 130.006 60.1229 130.006C60.8042 130.006 61.3409 129.796 61.7329 129.376C62.1249 128.956 62.3209 128.345 62.3209 127.542V123.328H63.5949ZM72.746 126.87C72.746 127.113 72.732 127.369 72.704 127.64H66.572C66.6186 128.396 66.8753 128.989 67.342 129.418C67.818 129.838 68.392 130.048 69.064 130.048C69.6146 130.048 70.072 129.922 70.436 129.67C70.8093 129.409 71.0706 129.063 71.22 128.634H72.592C72.3866 129.371 71.976 129.973 71.36 130.44C70.744 130.897 69.9786 131.126 69.064 131.126C68.336 131.126 67.6826 130.963 67.104 130.636C66.5346 130.309 66.0866 129.847 65.76 129.25C65.4333 128.643 65.27 127.943 65.27 127.15C65.27 126.357 65.4286 125.661 65.746 125.064C66.0633 124.467 66.5066 124.009 67.076 123.692C67.6546 123.365 68.3173 123.202 69.064 123.202C69.792 123.202 70.436 123.361 70.996 123.678C71.556 123.995 71.9853 124.434 72.284 124.994C72.592 125.545 72.746 126.17 72.746 126.87ZM71.43 126.604C71.43 126.119 71.3226 125.703 71.108 125.358C70.8933 125.003 70.5993 124.737 70.226 124.56C69.862 124.373 69.456 124.28 69.008 124.28C68.364 124.28 67.8133 124.485 67.356 124.896C66.908 125.307 66.6513 125.876 66.586 126.604H71.43ZM90.424 121.242L87.596 131H86.168L83.9 123.146L81.548 131L80.134 131.014L77.404 121.242H78.762L80.89 129.516L83.242 121.242H84.67L86.91 129.488L89.052 121.242H90.424ZM98.8182 126.87C98.8182 127.113 98.8042 127.369 98.7762 127.64H92.6442C92.6909 128.396 92.9476 128.989 93.4142 129.418C93.8902 129.838 94.4642 130.048 95.1362 130.048C95.6869 130.048 96.1442 129.922 96.5082 129.67C96.8816 129.409 97.1429 129.063 97.2922 128.634H98.6642C98.4589 129.371 98.0482 129.973 97.4322 130.44C96.8162 130.897 96.0509 131.126 95.1362 131.126C94.4082 131.126 93.7549 130.963 93.1762 130.636C92.6069 130.309 92.1589 129.847 91.8322 129.25C91.5056 128.643 91.3422 127.943 91.3422 127.15C91.3422 126.357 91.5009 125.661 91.8182 125.064C92.1356 124.467 92.5789 124.009 93.1482 123.692C93.7269 123.365 94.3896 123.202 95.1362 123.202C95.8642 123.202 96.5082 123.361 97.0682 123.678C97.6282 123.995 98.0576 124.434 98.3562 124.994C98.6642 125.545 98.8182 126.17 98.8182 126.87ZM97.5022 126.604C97.5022 126.119 97.3949 125.703 97.1802 125.358C96.9656 125.003 96.6716 124.737 96.2982 124.56C95.9342 124.373 95.5282 124.28 95.0802 124.28C94.4362 124.28 93.8856 124.485 93.4282 124.896C92.9802 125.307 92.7236 125.876 92.6582 126.604H97.5022ZM101.774 124.756C102.035 124.299 102.418 123.925 102.922 123.636C103.426 123.347 104 123.202 104.644 123.202C105.335 123.202 105.955 123.365 106.506 123.692C107.057 124.019 107.491 124.481 107.808 125.078C108.125 125.666 108.284 126.352 108.284 127.136C108.284 127.911 108.125 128.601 107.808 129.208C107.491 129.815 107.052 130.286 106.492 130.622C105.941 130.958 105.325 131.126 104.644 131.126C103.981 131.126 103.398 130.981 102.894 130.692C102.399 130.403 102.026 130.034 101.774 129.586V131H100.5V120.64H101.774V124.756ZM106.982 127.136C106.982 126.557 106.865 126.053 106.632 125.624C106.399 125.195 106.081 124.868 105.68 124.644C105.288 124.42 104.854 124.308 104.378 124.308C103.911 124.308 103.477 124.425 103.076 124.658C102.684 124.882 102.367 125.213 102.124 125.652C101.891 126.081 101.774 126.581 101.774 127.15C101.774 127.729 101.891 128.237 102.124 128.676C102.367 129.105 102.684 129.437 103.076 129.67C103.477 129.894 103.911 130.006 104.378 130.006C104.854 130.006 105.288 129.894 105.68 129.67C106.081 129.437 106.399 129.105 106.632 128.676C106.865 128.237 106.982 127.724 106.982 127.136ZM113.769 123.188C114.347 123.188 114.87 123.314 115.337 123.566C115.803 123.809 116.167 124.177 116.429 124.672C116.699 125.167 116.835 125.769 116.835 126.478V131H115.575V126.66C115.575 125.895 115.383 125.311 115.001 124.91C114.618 124.499 114.095 124.294 113.433 124.294C112.761 124.294 112.224 124.504 111.823 124.924C111.431 125.344 111.235 125.955 111.235 126.758V131H109.961V120.64H111.235V124.42C111.487 124.028 111.832 123.725 112.271 123.51C112.719 123.295 113.218 123.188 113.769 123.188ZM122.262 131.126C121.543 131.126 120.89 130.963 120.302 130.636C119.723 130.309 119.266 129.847 118.93 129.25C118.603 128.643 118.44 127.943 118.44 127.15C118.44 126.366 118.608 125.675 118.944 125.078C119.289 124.471 119.756 124.009 120.344 123.692C120.932 123.365 121.59 123.202 122.318 123.202C123.046 123.202 123.704 123.365 124.292 123.692C124.88 124.009 125.342 124.467 125.678 125.064C126.023 125.661 126.196 126.357 126.196 127.15C126.196 127.943 126.019 128.643 125.664 129.25C125.319 129.847 124.847 130.309 124.25 130.636C123.653 130.963 122.99 131.126 122.262 131.126ZM122.262 130.006C122.719 130.006 123.149 129.899 123.55 129.684C123.951 129.469 124.273 129.147 124.516 128.718C124.768 128.289 124.894 127.766 124.894 127.15C124.894 126.534 124.773 126.011 124.53 125.582C124.287 125.153 123.97 124.835 123.578 124.63C123.186 124.415 122.761 124.308 122.304 124.308C121.837 124.308 121.408 124.415 121.016 124.63C120.633 124.835 120.325 125.153 120.092 125.582C119.859 126.011 119.742 126.534 119.742 127.15C119.742 127.775 119.854 128.303 120.078 128.732C120.311 129.161 120.619 129.483 121.002 129.698C121.385 129.903 121.805 130.006 122.262 130.006ZM131.217 131.126C130.498 131.126 129.845 130.963 129.257 130.636C128.678 130.309 128.221 129.847 127.885 129.25C127.558 128.643 127.395 127.943 127.395 127.15C127.395 126.366 127.563 125.675 127.899 125.078C128.244 124.471 128.711 124.009 129.299 123.692C129.887 123.365 130.545 123.202 131.273 123.202C132.001 123.202 132.659 123.365 133.247 123.692C133.835 124.009 134.297 124.467 134.633 125.064C134.978 125.661 135.151 126.357 135.151 127.15C135.151 127.943 134.974 128.643 134.619 129.25C134.274 129.847 133.802 130.309 133.205 130.636C132.608 130.963 131.945 131.126 131.217 131.126ZM131.217 130.006C131.674 130.006 132.104 129.899 132.505 129.684C132.906 129.469 133.228 129.147 133.471 128.718C133.723 128.289 133.849 127.766 133.849 127.15C133.849 126.534 133.728 126.011 133.485 125.582C133.242 125.153 132.925 124.835 132.533 124.63C132.141 124.415 131.716 124.308 131.259 124.308C130.792 124.308 130.363 124.415 129.971 124.63C129.588 124.835 129.28 125.153 129.047 125.582C128.814 126.011 128.697 126.534 128.697 127.15C128.697 127.775 128.809 128.303 129.033 128.732C129.266 129.161 129.574 129.483 129.957 129.698C130.34 129.903 130.76 130.006 131.217 130.006ZM141.11 131L138.1 127.612V131H136.826V120.64H138.1V126.73L141.054 123.328H142.832L139.22 127.15L142.846 131H141.11ZM149.01 121.242V127.416C149.01 128.284 149.22 128.928 149.64 129.348C150.069 129.768 150.662 129.978 151.418 129.978C152.164 129.978 152.748 129.768 153.168 129.348C153.597 128.928 153.812 128.284 153.812 127.416V121.242H155.086V127.402C155.086 128.214 154.922 128.9 154.596 129.46C154.269 130.011 153.826 130.421 153.266 130.692C152.715 130.963 152.094 131.098 151.404 131.098C150.713 131.098 150.088 130.963 149.528 130.692C148.977 130.421 148.538 130.011 148.212 129.46C147.894 128.9 147.736 128.214 147.736 127.402V121.242H149.01ZM162.349 131L160.025 127.01H158.485V131H157.211V121.242H160.361C161.098 121.242 161.719 121.368 162.223 121.62C162.736 121.872 163.119 122.213 163.371 122.642C163.623 123.071 163.749 123.561 163.749 124.112C163.749 124.784 163.553 125.377 163.161 125.89C162.778 126.403 162.199 126.744 161.425 126.912L163.875 131H162.349ZM158.485 125.988H160.361C161.051 125.988 161.569 125.82 161.915 125.484C162.26 125.139 162.433 124.681 162.433 124.112C162.433 123.533 162.26 123.085 161.915 122.768C161.579 122.451 161.061 122.292 160.361 122.292H158.485V125.988ZM167.002 129.964H170.418V131H165.728V121.242H167.002V129.964Z"
          fill="black"
        />
        <path
          d="M6.78 142.636L4.056 147.844V151H2.964V147.844L0.228 142.636H1.44L3.504 146.872L5.568 142.636H6.78ZM10.7998 151.108C10.1838 151.108 9.62381 150.968 9.11981 150.688C8.62381 150.408 8.23181 150.012 7.94381 149.5C7.66381 148.98 7.52381 148.38 7.52381 147.7C7.52381 147.028 7.66781 146.436 7.95581 145.924C8.25181 145.404 8.65181 145.008 9.15581 144.736C9.65981 144.456 10.2238 144.316 10.8478 144.316C11.4718 144.316 12.0358 144.456 12.5398 144.736C13.0438 145.008 13.4398 145.4 13.7278 145.912C14.0238 146.424 14.1718 147.02 14.1718 147.7C14.1718 148.38 14.0198 148.98 13.7158 149.5C13.4198 150.012 13.0158 150.408 12.5038 150.688C11.9918 150.968 11.4238 151.108 10.7998 151.108ZM10.7998 150.148C11.1918 150.148 11.5598 150.056 11.9038 149.872C12.2478 149.688 12.5238 149.412 12.7318 149.044C12.9478 148.676 13.0558 148.228 13.0558 147.7C13.0558 147.172 12.9518 146.724 12.7438 146.356C12.5358 145.988 12.2638 145.716 11.9278 145.54C11.5918 145.356 11.2278 145.264 10.8358 145.264C10.4358 145.264 10.0678 145.356 9.73181 145.54C9.40381 145.716 9.13981 145.988 8.93981 146.356C8.73981 146.724 8.63981 147.172 8.63981 147.7C8.63981 148.236 8.73581 148.688 8.92781 149.056C9.12781 149.424 9.39181 149.7 9.71981 149.884C10.0478 150.06 10.4078 150.148 10.7998 150.148ZM21.4396 144.424V151H20.3476V150.028C20.1396 150.364 19.8476 150.628 19.4716 150.82C19.1036 151.004 18.6956 151.096 18.2476 151.096C17.7356 151.096 17.2756 150.992 16.8676 150.784C16.4596 150.568 16.1356 150.248 15.8956 149.824C15.6636 149.4 15.5476 148.884 15.5476 148.276V144.424H16.6276V148.132C16.6276 148.78 16.7916 149.28 17.1196 149.632C17.4476 149.976 17.8956 150.148 18.4636 150.148C19.0476 150.148 19.5076 149.968 19.8436 149.608C20.1796 149.248 20.3476 148.724 20.3476 148.036V144.424H21.4396ZM26.0746 147.7C26.0746 147.02 26.2106 146.428 26.4826 145.924C26.7546 145.412 27.1306 145.016 27.6106 144.736C28.0986 144.456 28.6546 144.316 29.2786 144.316C30.0866 144.316 30.7506 144.512 31.2706 144.904C31.7986 145.296 32.1466 145.84 32.3146 146.536H31.1386C31.0266 146.136 30.8066 145.82 30.4786 145.588C30.1586 145.356 29.7586 145.24 29.2786 145.24C28.6546 145.24 28.1506 145.456 27.7666 145.888C27.3826 146.312 27.1906 146.916 27.1906 147.7C27.1906 148.492 27.3826 149.104 27.7666 149.536C28.1506 149.968 28.6546 150.184 29.2786 150.184C29.7586 150.184 30.1586 150.072 30.4786 149.848C30.7986 149.624 31.0186 149.304 31.1386 148.888H32.3146C32.1386 149.56 31.7866 150.1 31.2586 150.508C30.7306 150.908 30.0706 151.108 29.2786 151.108C28.6546 151.108 28.0986 150.968 27.6106 150.688C27.1306 150.408 26.7546 150.012 26.4826 149.5C26.2106 148.988 26.0746 148.388 26.0746 147.7ZM33.3637 147.688C33.3637 147.016 33.4997 146.428 33.7717 145.924C34.0437 145.412 34.4157 145.016 34.8877 144.736C35.3677 144.456 35.8997 144.316 36.4837 144.316C37.0597 144.316 37.5597 144.44 37.9837 144.688C38.4077 144.936 38.7237 145.248 38.9317 145.624V144.424H40.0357V151H38.9317V149.776C38.7157 150.16 38.3917 150.48 37.9597 150.736C37.5357 150.984 37.0397 151.108 36.4717 151.108C35.8877 151.108 35.3597 150.964 34.8877 150.676C34.4157 150.388 34.0437 149.984 33.7717 149.464C33.4997 148.944 33.3637 148.352 33.3637 147.688ZM38.9317 147.7C38.9317 147.204 38.8317 146.772 38.6317 146.404C38.4317 146.036 38.1597 145.756 37.8157 145.564C37.4797 145.364 37.1077 145.264 36.6997 145.264C36.2917 145.264 35.9197 145.36 35.5837 145.552C35.2477 145.744 34.9797 146.024 34.7797 146.392C34.5797 146.76 34.4797 147.192 34.4797 147.688C34.4797 148.192 34.5797 148.632 34.7797 149.008C34.9797 149.376 35.2477 149.66 35.5837 149.86C35.9197 150.052 36.2917 150.148 36.6997 150.148C37.1077 150.148 37.4797 150.052 37.8157 149.86C38.1597 149.66 38.4317 149.376 38.6317 149.008C38.8317 148.632 38.9317 148.196 38.9317 147.7ZM45.085 144.304C45.885 144.304 46.533 144.548 47.029 145.036C47.525 145.516 47.773 146.212 47.773 147.124V151H46.693V147.28C46.693 146.624 46.529 146.124 46.201 145.78C45.873 145.428 45.425 145.252 44.857 145.252C44.281 145.252 43.821 145.432 43.477 145.792C43.141 146.152 42.973 146.676 42.973 147.364V151H41.881V144.424H42.973V145.36C43.189 145.024 43.481 144.764 43.849 144.58C44.225 144.396 44.637 144.304 45.085 144.304ZM55.5473 147.7C55.5473 147.02 55.6833 146.428 55.9553 145.924C56.2273 145.412 56.6033 145.016 57.0833 144.736C57.5713 144.456 58.1273 144.316 58.7513 144.316C59.5593 144.316 60.2233 144.512 60.7433 144.904C61.2713 145.296 61.6193 145.84 61.7873 146.536H60.6113C60.4993 146.136 60.2793 145.82 59.9513 145.588C59.6313 145.356 59.2313 145.24 58.7513 145.24C58.1273 145.24 57.6233 145.456 57.2393 145.888C56.8553 146.312 56.6633 146.916 56.6633 147.7C56.6633 148.492 56.8553 149.104 57.2393 149.536C57.6233 149.968 58.1273 150.184 58.7513 150.184C59.2313 150.184 59.6313 150.072 59.9513 149.848C60.2713 149.624 60.4913 149.304 60.6113 148.888H61.7873C61.6113 149.56 61.2593 150.1 60.7313 150.508C60.2033 150.908 59.5433 151.108 58.7513 151.108C58.1273 151.108 57.5713 150.968 57.0833 150.688C56.6033 150.408 56.2273 150.012 55.9553 149.5C55.6833 148.988 55.5473 148.388 55.5473 147.7ZM64.3363 145.492C64.5283 145.116 64.8003 144.824 65.1523 144.616C65.5123 144.408 65.9483 144.304 66.4603 144.304V145.432H66.1723C64.9483 145.432 64.3363 146.096 64.3363 147.424V151H63.2443V144.424H64.3363V145.492ZM73.7209 147.46C73.7209 147.668 73.7089 147.888 73.6849 148.12H68.4289C68.4689 148.768 68.6889 149.276 69.0889 149.644C69.4969 150.004 69.9889 150.184 70.5649 150.184C71.0369 150.184 71.4289 150.076 71.7409 149.86C72.0609 149.636 72.2849 149.34 72.4129 148.972H73.5889C73.4129 149.604 73.0609 150.12 72.5329 150.52C72.0049 150.912 71.3489 151.108 70.5649 151.108C69.9409 151.108 69.3809 150.968 68.8849 150.688C68.3969 150.408 68.0129 150.012 67.7329 149.5C67.4529 148.98 67.3129 148.38 67.3129 147.7C67.3129 147.02 67.4489 146.424 67.7209 145.912C67.9929 145.4 68.3729 145.008 68.8609 144.736C69.3569 144.456 69.9249 144.316 70.5649 144.316C71.1889 144.316 71.7409 144.452 72.2209 144.724C72.7009 144.996 73.0689 145.372 73.3249 145.852C73.5889 146.324 73.7209 146.86 73.7209 147.46ZM72.5929 147.232C72.5929 146.816 72.5009 146.46 72.3169 146.164C72.1329 145.86 71.8809 145.632 71.5609 145.48C71.2489 145.32 70.9009 145.24 70.5169 145.24C69.9649 145.24 69.4929 145.416 69.1009 145.768C68.7169 146.12 68.4969 146.608 68.4409 147.232H72.5929ZM74.7543 147.688C74.7543 147.016 74.8903 146.428 75.1623 145.924C75.4343 145.412 75.8063 145.016 76.2783 144.736C76.7583 144.456 77.2903 144.316 77.8743 144.316C78.4503 144.316 78.9503 144.44 79.3743 144.688C79.7983 144.936 80.1143 145.248 80.3223 145.624V144.424H81.4263V151H80.3223V149.776C80.1063 150.16 79.7823 150.48 79.3503 150.736C78.9263 150.984 78.4303 151.108 77.8623 151.108C77.2783 151.108 76.7503 150.964 76.2783 150.676C75.8063 150.388 75.4343 149.984 75.1623 149.464C74.8903 148.944 74.7543 148.352 74.7543 147.688ZM80.3223 147.7C80.3223 147.204 80.2223 146.772 80.0223 146.404C79.8223 146.036 79.5503 145.756 79.2063 145.564C78.8703 145.364 78.4983 145.264 78.0903 145.264C77.6823 145.264 77.3103 145.36 76.9743 145.552C76.6383 145.744 76.3703 146.024 76.1703 146.392C75.9703 146.76 75.8703 147.192 75.8703 147.688C75.8703 148.192 75.9703 148.632 76.1703 149.008C76.3703 149.376 76.6383 149.66 76.9743 149.86C77.3103 150.052 77.6823 150.148 78.0903 150.148C78.4983 150.148 78.8703 150.052 79.2063 149.86C79.5503 149.66 79.8223 149.376 80.0223 149.008C80.2223 148.632 80.3223 148.196 80.3223 147.7ZM84.6037 145.324V149.2C84.6037 149.52 84.6717 149.748 84.8077 149.884C84.9437 150.012 85.1797 150.076 85.5157 150.076H86.3197V151H85.3357C84.7277 151 84.2717 150.86 83.9677 150.58C83.6637 150.3 83.5117 149.84 83.5117 149.2V145.324H82.6597V144.424H83.5117V142.768H84.6037V144.424H86.3197V145.324H84.6037ZM93.6428 147.46C93.6428 147.668 93.6308 147.888 93.6068 148.12H88.3508C88.3908 148.768 88.6108 149.276 89.0108 149.644C89.4188 150.004 89.9108 150.184 90.4868 150.184C90.9588 150.184 91.3508 150.076 91.6628 149.86C91.9828 149.636 92.2068 149.34 92.3348 148.972H93.5108C93.3348 149.604 92.9828 150.12 92.4548 150.52C91.9268 150.912 91.2708 151.108 90.4868 151.108C89.8628 151.108 89.3028 150.968 88.8068 150.688C88.3188 150.408 87.9348 150.012 87.6548 149.5C87.3748 148.98 87.2348 148.38 87.2348 147.7C87.2348 147.02 87.3708 146.424 87.6428 145.912C87.9148 145.4 88.2948 145.008 88.7828 144.736C89.2788 144.456 89.8468 144.316 90.4868 144.316C91.1108 144.316 91.6628 144.452 92.1428 144.724C92.6228 144.996 92.9908 145.372 93.2468 145.852C93.5108 146.324 93.6428 146.86 93.6428 147.46ZM92.5148 147.232C92.5148 146.816 92.4228 146.46 92.2388 146.164C92.0548 145.86 91.8028 145.632 91.4828 145.48C91.1708 145.32 90.8228 145.24 90.4388 145.24C89.8868 145.24 89.4148 145.416 89.0228 145.768C88.6388 146.12 88.4188 146.608 88.3628 147.232H92.5148ZM97.8754 147.688C97.8754 147.016 98.0114 146.428 98.2834 145.924C98.5554 145.412 98.9274 145.016 99.3994 144.736C99.8794 144.456 100.411 144.316 100.995 144.316C101.571 144.316 102.071 144.44 102.495 144.688C102.919 144.936 103.235 145.248 103.443 145.624V144.424H104.547V151H103.443V149.776C103.227 150.16 102.903 150.48 102.471 150.736C102.047 150.984 101.551 151.108 100.983 151.108C100.399 151.108 99.8714 150.964 99.3994 150.676C98.9274 150.388 98.5554 149.984 98.2834 149.464C98.0114 148.944 97.8754 148.352 97.8754 147.688ZM103.443 147.7C103.443 147.204 103.343 146.772 103.143 146.404C102.943 146.036 102.671 145.756 102.327 145.564C101.991 145.364 101.619 145.264 101.211 145.264C100.803 145.264 100.431 145.36 100.095 145.552C99.7594 145.744 99.4914 146.024 99.2914 146.392C99.0914 146.76 98.9914 147.192 98.9914 147.688C98.9914 148.192 99.0914 148.632 99.2914 149.008C99.4914 149.376 99.7594 149.66 100.095 149.86C100.431 150.052 100.803 150.148 101.211 150.148C101.619 150.148 101.991 150.052 102.327 149.86C102.671 149.66 102.943 149.376 103.143 149.008C103.343 148.632 103.443 148.196 103.443 147.7ZM111.92 151.108C111.416 151.108 110.964 151.024 110.564 150.856C110.164 150.68 109.848 150.44 109.616 150.136C109.384 149.824 109.256 149.468 109.232 149.068H110.36C110.392 149.396 110.544 149.664 110.816 149.872C111.096 150.08 111.46 150.184 111.908 150.184C112.324 150.184 112.652 150.092 112.892 149.908C113.132 149.724 113.252 149.492 113.252 149.212C113.252 148.924 113.124 148.712 112.868 148.576C112.612 148.432 112.216 148.292 111.68 148.156C111.192 148.028 110.792 147.9 110.48 147.772C110.176 147.636 109.912 147.44 109.688 147.184C109.472 146.92 109.364 146.576 109.364 146.152C109.364 145.816 109.464 145.508 109.664 145.228C109.864 144.948 110.148 144.728 110.516 144.568C110.884 144.4 111.304 144.316 111.776 144.316C112.504 144.316 113.092 144.5 113.54 144.868C113.988 145.236 114.228 145.74 114.26 146.38H113.168C113.144 146.036 113.004 145.76 112.748 145.552C112.5 145.344 112.164 145.24 111.74 145.24C111.348 145.24 111.036 145.324 110.804 145.492C110.572 145.66 110.456 145.88 110.456 146.152C110.456 146.368 110.524 146.548 110.66 146.692C110.804 146.828 110.98 146.94 111.188 147.028C111.404 147.108 111.7 147.2 112.076 147.304C112.548 147.432 112.932 147.56 113.228 147.688C113.524 147.808 113.776 147.992 113.984 148.24C114.2 148.488 114.312 148.812 114.32 149.212C114.32 149.572 114.22 149.896 114.02 150.184C113.82 150.472 113.536 150.7 113.168 150.868C112.808 151.028 112.392 151.108 111.92 151.108ZM116.426 143.356C116.218 143.356 116.042 143.284 115.898 143.14C115.754 142.996 115.682 142.82 115.682 142.612C115.682 142.404 115.754 142.228 115.898 142.084C116.042 141.94 116.218 141.868 116.426 141.868C116.626 141.868 116.794 141.94 116.93 142.084C117.074 142.228 117.146 142.404 117.146 142.612C117.146 142.82 117.074 142.996 116.93 143.14C116.794 143.284 116.626 143.356 116.426 143.356ZM116.954 144.424V151H115.862V144.424H116.954ZM126.723 144.304C127.235 144.304 127.691 144.412 128.091 144.628C128.491 144.836 128.807 145.152 129.039 145.576C129.271 146 129.387 146.516 129.387 147.124V151H128.307V147.28C128.307 146.624 128.143 146.124 127.815 145.78C127.495 145.428 127.059 145.252 126.507 145.252C125.939 145.252 125.487 145.436 125.151 145.804C124.815 146.164 124.647 146.688 124.647 147.376V151H123.567V147.28C123.567 146.624 123.403 146.124 123.075 145.78C122.755 145.428 122.319 145.252 121.767 145.252C121.199 145.252 120.747 145.436 120.411 145.804C120.075 146.164 119.907 146.688 119.907 147.376V151H118.815V144.424H119.907V145.372C120.123 145.028 120.411 144.764 120.771 144.58C121.139 144.396 121.543 144.304 121.983 144.304C122.535 144.304 123.023 144.428 123.447 144.676C123.871 144.924 124.187 145.288 124.395 145.768C124.579 145.304 124.883 144.944 125.307 144.688C125.731 144.432 126.203 144.304 126.723 144.304ZM132.27 145.636C132.486 145.26 132.806 144.948 133.23 144.7C133.662 144.444 134.162 144.316 134.73 144.316C135.314 144.316 135.842 144.456 136.314 144.736C136.794 145.016 137.17 145.412 137.442 145.924C137.714 146.428 137.85 147.016 137.85 147.688C137.85 148.352 137.714 148.944 137.442 149.464C137.17 149.984 136.794 150.388 136.314 150.676C135.842 150.964 135.314 151.108 134.73 151.108C134.17 151.108 133.674 150.984 133.242 150.736C132.818 150.48 132.494 150.164 132.27 149.788V154.12H131.178V144.424H132.27V145.636ZM136.734 147.688C136.734 147.192 136.634 146.76 136.434 146.392C136.234 146.024 135.962 145.744 135.618 145.552C135.282 145.36 134.91 145.264 134.502 145.264C134.102 145.264 133.73 145.364 133.386 145.564C133.05 145.756 132.778 146.04 132.57 146.416C132.37 146.784 132.27 147.212 132.27 147.7C132.27 148.196 132.37 148.632 132.57 149.008C132.778 149.376 133.05 149.66 133.386 149.86C133.73 150.052 134.102 150.148 134.502 150.148C134.91 150.148 135.282 150.052 135.618 149.86C135.962 149.66 136.234 149.376 136.434 149.008C136.634 148.632 136.734 148.192 136.734 147.688ZM140.379 142.12V151H139.287V142.12H140.379ZM148.24 147.46C148.24 147.668 148.228 147.888 148.204 148.12H142.948C142.988 148.768 143.208 149.276 143.608 149.644C144.016 150.004 144.508 150.184 145.084 150.184C145.556 150.184 145.948 150.076 146.26 149.86C146.58 149.636 146.804 149.34 146.932 148.972H148.108C147.932 149.604 147.58 150.12 147.052 150.52C146.524 150.912 145.868 151.108 145.084 151.108C144.46 151.108 143.9 150.968 143.404 150.688C142.916 150.408 142.532 150.012 142.252 149.5C141.972 148.98 141.832 148.38 141.832 147.7C141.832 147.02 141.968 146.424 142.24 145.912C142.512 145.4 142.892 145.008 143.38 144.736C143.876 144.456 144.444 144.316 145.084 144.316C145.708 144.316 146.26 144.452 146.74 144.724C147.22 144.996 147.588 145.372 147.844 145.852C148.108 146.324 148.24 146.86 148.24 147.46ZM147.112 147.232C147.112 146.816 147.02 146.46 146.836 146.164C146.652 145.86 146.4 145.632 146.08 145.48C145.768 145.32 145.42 145.24 145.036 145.24C144.484 145.24 144.012 145.416 143.62 145.768C143.236 146.12 143.016 146.608 142.96 147.232H147.112ZM155.749 151.108C155.133 151.108 154.573 150.968 154.069 150.688C153.573 150.408 153.181 150.012 152.893 149.5C152.613 148.98 152.473 148.38 152.473 147.7C152.473 147.028 152.617 146.436 152.905 145.924C153.201 145.404 153.601 145.008 154.105 144.736C154.609 144.456 155.173 144.316 155.797 144.316C156.421 144.316 156.985 144.456 157.489 144.736C157.993 145.008 158.389 145.4 158.677 145.912C158.973 146.424 159.121 147.02 159.121 147.7C159.121 148.38 158.969 148.98 158.665 149.5C158.369 150.012 157.965 150.408 157.453 150.688C156.941 150.968 156.373 151.108 155.749 151.108ZM155.749 150.148C156.141 150.148 156.509 150.056 156.853 149.872C157.197 149.688 157.473 149.412 157.681 149.044C157.897 148.676 158.005 148.228 158.005 147.7C158.005 147.172 157.901 146.724 157.693 146.356C157.485 145.988 157.213 145.716 156.877 145.54C156.541 145.356 156.177 145.264 155.785 145.264C155.385 145.264 155.017 145.356 154.681 145.54C154.353 145.716 154.089 145.988 153.889 146.356C153.689 146.724 153.589 147.172 153.589 147.7C153.589 148.236 153.685 148.688 153.877 149.056C154.077 149.424 154.341 149.7 154.669 149.884C154.997 150.06 155.357 150.148 155.749 150.148ZM163.761 144.304C164.561 144.304 165.209 144.548 165.705 145.036C166.201 145.516 166.449 146.212 166.449 147.124V151H165.369V147.28C165.369 146.624 165.205 146.124 164.877 145.78C164.549 145.428 164.101 145.252 163.533 145.252C162.957 145.252 162.497 145.432 162.153 145.792C161.817 146.152 161.649 146.676 161.649 147.364V151H160.557V144.424H161.649V145.36C161.865 145.024 162.157 144.764 162.525 144.58C162.901 144.396 163.313 144.304 163.761 144.304ZM174.233 147.46C174.233 147.668 174.221 147.888 174.197 148.12H168.941C168.981 148.768 169.201 149.276 169.601 149.644C170.009 150.004 170.501 150.184 171.077 150.184C171.549 150.184 171.941 150.076 172.253 149.86C172.573 149.636 172.797 149.34 172.925 148.972H174.101C173.925 149.604 173.573 150.12 173.045 150.52C172.517 150.912 171.861 151.108 171.077 151.108C170.453 151.108 169.893 150.968 169.397 150.688C168.909 150.408 168.525 150.012 168.245 149.5C167.965 148.98 167.825 148.38 167.825 147.7C167.825 147.02 167.961 146.424 168.233 145.912C168.505 145.4 168.885 145.008 169.373 144.736C169.869 144.456 170.437 144.316 171.077 144.316C171.701 144.316 172.253 144.452 172.733 144.724C173.213 144.996 173.581 145.372 173.837 145.852C174.101 146.324 174.233 146.86 174.233 147.46ZM173.105 147.232C173.105 146.816 173.013 146.46 172.829 146.164C172.645 145.86 172.393 145.632 172.073 145.48C171.761 145.32 171.413 145.24 171.029 145.24C170.477 145.24 170.005 145.416 169.613 145.768C169.229 146.12 169.009 146.608 168.953 147.232H173.105ZM187.633 144.424L185.581 151H184.453L182.869 145.78L181.285 151H180.157L178.093 144.424H179.209L180.721 149.944L182.353 144.424H183.469L185.065 149.956L186.553 144.424H187.633ZM189.281 143.356C189.073 143.356 188.897 143.284 188.753 143.14C188.609 142.996 188.537 142.82 188.537 142.612C188.537 142.404 188.609 142.228 188.753 142.084C188.897 141.94 189.073 141.868 189.281 141.868C189.481 141.868 189.649 141.94 189.785 142.084C189.929 142.228 190.001 142.404 190.001 142.612C190.001 142.82 189.929 142.996 189.785 143.14C189.649 143.284 189.481 143.356 189.281 143.356ZM189.809 144.424V151H188.717V144.424H189.809ZM193.002 145.324V149.2C193.002 149.52 193.07 149.748 193.206 149.884C193.342 150.012 193.578 150.076 193.914 150.076H194.718V151H193.734C193.126 151 192.67 150.86 192.366 150.58C192.062 150.3 191.91 149.84 191.91 149.2V145.324H191.058V144.424H191.91V142.768H193.002V144.424H194.718V145.324H193.002ZM199.305 144.304C199.801 144.304 200.249 144.412 200.649 144.628C201.049 144.836 201.361 145.152 201.585 145.576C201.817 146 201.933 146.516 201.933 147.124V151H200.853V147.28C200.853 146.624 200.689 146.124 200.361 145.78C200.033 145.428 199.585 145.252 199.017 145.252C198.441 145.252 197.981 145.432 197.637 145.792C197.301 146.152 197.133 146.676 197.133 147.364V151H196.041V142.12H197.133V145.36C197.349 145.024 197.645 144.764 198.021 144.58C198.405 144.396 198.833 144.304 199.305 144.304ZM215.076 144.256C215.892 144.256 216.548 144.508 217.044 145.012C217.548 145.508 217.8 146.204 217.8 147.1V151H216.12V147.328C216.12 146.808 215.988 146.412 215.724 146.14C215.46 145.86 215.1 145.72 214.644 145.72C214.188 145.72 213.824 145.86 213.552 146.14C213.288 146.412 213.156 146.808 213.156 147.328V151H211.476V147.328C211.476 146.808 211.344 146.412 211.08 146.14C210.816 145.86 210.456 145.72 210 145.72C209.536 145.72 209.168 145.86 208.896 146.14C208.632 146.412 208.5 146.808 208.5 147.328V151H206.82V144.352H208.5V145.156C208.716 144.876 208.992 144.656 209.328 144.496C209.672 144.336 210.048 144.256 210.456 144.256C210.976 144.256 211.44 144.368 211.848 144.592C212.256 144.808 212.572 145.12 212.796 145.528C213.012 145.144 213.324 144.836 213.732 144.604C214.148 144.372 214.596 144.256 215.076 144.256ZM218.962 147.652C218.962 146.98 219.094 146.384 219.358 145.864C219.63 145.344 219.994 144.944 220.45 144.664C220.914 144.384 221.43 144.244 221.998 144.244C222.494 144.244 222.926 144.344 223.294 144.544C223.67 144.744 223.97 144.996 224.194 145.3V144.352H225.886V151H224.194V150.028C223.978 150.34 223.678 150.6 223.294 150.808C222.918 151.008 222.482 151.108 221.986 151.108C221.426 151.108 220.914 150.964 220.45 150.676C219.994 150.388 219.63 149.984 219.358 149.464C219.094 148.936 218.962 148.332 218.962 147.652ZM224.194 147.676C224.194 147.268 224.114 146.92 223.954 146.632C223.794 146.336 223.578 146.112 223.306 145.96C223.034 145.8 222.742 145.72 222.43 145.72C222.118 145.72 221.83 145.796 221.566 145.948C221.302 146.1 221.086 146.324 220.918 146.62C220.758 146.908 220.678 147.252 220.678 147.652C220.678 148.052 220.758 148.404 220.918 148.708C221.086 149.004 221.302 149.232 221.566 149.392C221.838 149.552 222.126 149.632 222.43 149.632C222.742 149.632 223.034 149.556 223.306 149.404C223.578 149.244 223.794 149.02 223.954 148.732C224.114 148.436 224.194 148.084 224.194 147.676ZM231.463 151L229.207 148.168V151H227.527V142.12H229.207V147.172L231.439 144.352H233.623L230.695 147.688L233.647 151H231.463ZM240.715 147.532C240.715 147.772 240.699 147.988 240.667 148.18H235.807C235.847 148.66 236.015 149.036 236.311 149.308C236.607 149.58 236.971 149.716 237.403 149.716C238.027 149.716 238.471 149.448 238.735 148.912H240.547C240.355 149.552 239.987 150.08 239.443 150.496C238.899 150.904 238.231 151.108 237.439 151.108C236.799 151.108 236.223 150.968 235.711 150.688C235.207 150.4 234.811 149.996 234.523 149.476C234.243 148.956 234.103 148.356 234.103 147.676C234.103 146.988 234.243 146.384 234.523 145.864C234.803 145.344 235.195 144.944 235.699 144.664C236.203 144.384 236.783 144.244 237.439 144.244C238.071 144.244 238.635 144.38 239.131 144.652C239.635 144.924 240.023 145.312 240.295 145.816C240.575 146.312 240.715 146.884 240.715 147.532ZM238.975 147.052C238.967 146.62 238.811 146.276 238.507 146.02C238.203 145.756 237.831 145.624 237.391 145.624C236.975 145.624 236.623 145.752 236.335 146.008C236.055 146.256 235.883 146.604 235.819 147.052H238.975ZM242.685 151.084C242.381 151.084 242.129 150.992 241.929 150.808C241.737 150.616 241.641 150.38 241.641 150.1C241.641 149.82 241.737 149.588 241.929 149.404C242.129 149.212 242.381 149.116 242.685 149.116C242.981 149.116 243.225 149.212 243.417 149.404C243.609 149.588 243.705 149.82 243.705 150.1C243.705 150.38 243.609 150.616 243.417 150.808C243.225 150.992 242.981 151.084 242.685 151.084ZM244.626 147.676C244.626 146.988 244.766 146.388 245.046 145.876C245.326 145.356 245.714 144.956 246.21 144.676C246.706 144.388 247.274 144.244 247.914 144.244C248.738 144.244 249.418 144.452 249.954 144.868C250.498 145.276 250.862 145.852 251.046 146.596H249.234C249.138 146.308 248.974 146.084 248.742 145.924C248.518 145.756 248.238 145.672 247.902 145.672C247.422 145.672 247.042 145.848 246.762 146.2C246.482 146.544 246.342 147.036 246.342 147.676C246.342 148.308 246.482 148.8 246.762 149.152C247.042 149.496 247.422 149.668 247.902 149.668C248.582 149.668 249.026 149.364 249.234 148.756H251.046C250.862 149.476 250.498 150.048 249.954 150.472C249.41 150.896 248.73 151.108 247.914 151.108C247.274 151.108 246.706 150.968 246.21 150.688C245.714 150.4 245.326 150 245.046 149.488C244.766 148.968 244.626 148.364 244.626 147.676ZM255.229 151.108C254.589 151.108 254.013 150.968 253.501 150.688C252.989 150.4 252.585 149.996 252.289 149.476C252.001 148.956 251.857 148.356 251.857 147.676C251.857 146.996 252.005 146.396 252.301 145.876C252.605 145.356 253.017 144.956 253.537 144.676C254.057 144.388 254.637 144.244 255.277 144.244C255.917 144.244 256.497 144.388 257.017 144.676C257.537 144.956 257.945 145.356 258.241 145.876C258.545 146.396 258.697 146.996 258.697 147.676C258.697 148.356 258.541 148.956 258.229 149.476C257.925 149.996 257.509 150.4 256.981 150.688C256.461 150.968 255.877 151.108 255.229 151.108ZM255.229 149.644C255.533 149.644 255.817 149.572 256.081 149.428C256.353 149.276 256.569 149.052 256.729 148.756C256.889 148.46 256.969 148.1 256.969 147.676C256.969 147.044 256.801 146.56 256.465 146.224C256.137 145.88 255.733 145.708 255.253 145.708C254.773 145.708 254.369 145.88 254.041 146.224C253.721 146.56 253.561 147.044 253.561 147.676C253.561 148.308 253.717 148.796 254.029 149.14C254.349 149.476 254.749 149.644 255.229 149.644ZM268.186 144.256C269.002 144.256 269.658 144.508 270.154 145.012C270.658 145.508 270.91 146.204 270.91 147.1V151H269.23V147.328C269.23 146.808 269.098 146.412 268.834 146.14C268.57 145.86 268.21 145.72 267.754 145.72C267.298 145.72 266.934 145.86 266.662 146.14C266.398 146.412 266.266 146.808 266.266 147.328V151H264.586V147.328C264.586 146.808 264.454 146.412 264.19 146.14C263.926 145.86 263.566 145.72 263.11 145.72C262.646 145.72 262.278 145.86 262.006 146.14C261.742 146.412 261.61 146.808 261.61 147.328V151H259.93V144.352H261.61V145.156C261.826 144.876 262.102 144.656 262.438 144.496C262.782 144.336 263.158 144.256 263.566 144.256C264.086 144.256 264.55 144.368 264.958 144.592C265.366 144.808 265.682 145.12 265.906 145.528C266.122 145.144 266.434 144.836 266.842 144.604C267.258 144.372 267.706 144.256 268.186 144.256Z"
          fill="black"
        />
        <path
          d="M32.172 234.098C31.528 234.098 30.9493 233.986 30.436 233.762C29.932 233.529 29.5353 233.211 29.246 232.81C28.9567 232.399 28.8073 231.928 28.798 231.396H30.156C30.2027 231.853 30.3893 232.241 30.716 232.558C31.052 232.866 31.5373 233.02 32.172 233.02C32.7787 233.02 33.2547 232.871 33.6 232.572C33.9547 232.264 34.132 231.872 34.132 231.396C34.132 231.023 34.0293 230.719 33.824 230.486C33.6187 230.253 33.362 230.075 33.054 229.954C32.746 229.833 32.3307 229.702 31.808 229.562C31.164 229.394 30.646 229.226 30.254 229.058C29.8713 228.89 29.54 228.629 29.26 228.274C28.9893 227.91 28.854 227.425 28.854 226.818C28.854 226.286 28.9893 225.815 29.26 225.404C29.5307 224.993 29.9087 224.676 30.394 224.452C30.8887 224.228 31.4533 224.116 32.088 224.116C33.0027 224.116 33.7493 224.345 34.328 224.802C34.916 225.259 35.2473 225.866 35.322 226.622H33.922C33.8753 226.249 33.6793 225.922 33.334 225.642C32.9887 225.353 32.5313 225.208 31.962 225.208C31.43 225.208 30.996 225.348 30.66 225.628C30.324 225.899 30.156 226.281 30.156 226.776C30.156 227.131 30.254 227.42 30.45 227.644C30.6553 227.868 30.9027 228.041 31.192 228.162C31.4907 228.274 31.906 228.405 32.438 228.554C33.082 228.731 33.6 228.909 33.992 229.086C34.384 229.254 34.72 229.52 35 229.884C35.28 230.239 35.42 230.724 35.42 231.34C35.42 231.816 35.294 232.264 35.042 232.684C34.79 233.104 34.4167 233.445 33.922 233.706C33.4273 233.967 32.844 234.098 32.172 234.098ZM44.2948 229.87C44.2948 230.113 44.2808 230.369 44.2528 230.64H38.1208C38.1675 231.396 38.4241 231.989 38.8908 232.418C39.3668 232.838 39.9408 233.048 40.6128 233.048C41.1635 233.048 41.6208 232.922 41.9848 232.67C42.3581 232.409 42.6195 232.063 42.7688 231.634H44.1408C43.9355 232.371 43.5248 232.973 42.9088 233.44C42.2928 233.897 41.5275 234.126 40.6128 234.126C39.8848 234.126 39.2315 233.963 38.6528 233.636C38.0835 233.309 37.6355 232.847 37.3088 232.25C36.9821 231.643 36.8188 230.943 36.8188 230.15C36.8188 229.357 36.9775 228.661 37.2948 228.064C37.6121 227.467 38.0555 227.009 38.6248 226.692C39.2035 226.365 39.8661 226.202 40.6128 226.202C41.3408 226.202 41.9848 226.361 42.5448 226.678C43.1048 226.995 43.5341 227.434 43.8328 227.994C44.1408 228.545 44.2948 229.17 44.2948 229.87ZM42.9788 229.604C42.9788 229.119 42.8715 228.703 42.6568 228.358C42.4421 228.003 42.1481 227.737 41.7748 227.56C41.4108 227.373 41.0048 227.28 40.5568 227.28C39.9128 227.28 39.3621 227.485 38.9048 227.896C38.4568 228.307 38.2001 228.876 38.1348 229.604H42.9788ZM49.7144 226.188C50.6478 226.188 51.4038 226.473 51.9824 227.042C52.5611 227.602 52.8504 228.414 52.8504 229.478V234H51.5904V229.66C51.5904 228.895 51.3991 228.311 51.0164 227.91C50.6338 227.499 50.1111 227.294 49.4484 227.294C48.7764 227.294 48.2398 227.504 47.8384 227.924C47.4464 228.344 47.2504 228.955 47.2504 229.758V234H45.9764V226.328H47.2504V227.42C47.5024 227.028 47.8431 226.725 48.2724 226.51C48.7111 226.295 49.1918 226.188 49.7144 226.188ZM54.4555 230.136C54.4555 229.352 54.6142 228.666 54.9315 228.078C55.2488 227.481 55.6828 227.019 56.2335 226.692C56.7935 226.365 57.4188 226.202 58.1095 226.202C58.7068 226.202 59.2622 226.342 59.7755 226.622C60.2888 226.893 60.6808 227.252 60.9515 227.7V223.64H62.2395V234H60.9515V232.558C60.6995 233.015 60.3262 233.393 59.8315 233.692C59.3368 233.981 58.7582 234.126 58.0955 234.126C57.4142 234.126 56.7935 233.958 56.2335 233.622C55.6828 233.286 55.2488 232.815 54.9315 232.208C54.6142 231.601 54.4555 230.911 54.4555 230.136ZM60.9515 230.15C60.9515 229.571 60.8348 229.067 60.6015 228.638C60.3682 228.209 60.0508 227.882 59.6495 227.658C59.2575 227.425 58.8235 227.308 58.3475 227.308C57.8715 227.308 57.4375 227.42 57.0455 227.644C56.6535 227.868 56.3408 228.195 56.1075 228.624C55.8742 229.053 55.7575 229.557 55.7575 230.136C55.7575 230.724 55.8742 231.237 56.1075 231.676C56.3408 232.105 56.6535 232.437 57.0455 232.67C57.4375 232.894 57.8715 233.006 58.3475 233.006C58.8235 233.006 59.2575 232.894 59.6495 232.67C60.0508 232.437 60.3682 232.105 60.6015 231.676C60.8348 231.237 60.9515 230.729 60.9515 230.15ZM71.2469 227.378H69.6369V234H68.3629V227.378H67.3689V226.328H68.3629V225.782C68.3629 224.923 68.5822 224.298 69.0209 223.906C69.4689 223.505 70.1829 223.304 71.1629 223.304V224.368C70.6029 224.368 70.2062 224.48 69.9729 224.704C69.7489 224.919 69.6369 225.278 69.6369 225.782V226.328H71.2469V227.378ZM76.0783 234.126C75.3596 234.126 74.7063 233.963 74.1183 233.636C73.5396 233.309 73.0823 232.847 72.7463 232.25C72.4196 231.643 72.2563 230.943 72.2563 230.15C72.2563 229.366 72.4243 228.675 72.7603 228.078C73.1056 227.471 73.5723 227.009 74.1603 226.692C74.7483 226.365 75.4063 226.202 76.1343 226.202C76.8623 226.202 77.5203 226.365 78.1083 226.692C78.6963 227.009 79.1583 227.467 79.4943 228.064C79.8396 228.661 80.0123 229.357 80.0123 230.15C80.0123 230.943 79.835 231.643 79.4803 232.25C79.135 232.847 78.6636 233.309 78.0663 233.636C77.469 233.963 76.8063 234.126 76.0783 234.126ZM76.0783 233.006C76.5356 233.006 76.965 232.899 77.3663 232.684C77.7676 232.469 78.0896 232.147 78.3323 231.718C78.5843 231.289 78.7103 230.766 78.7103 230.15C78.7103 229.534 78.589 229.011 78.3463 228.582C78.1036 228.153 77.7863 227.835 77.3943 227.63C77.0023 227.415 76.5776 227.308 76.1203 227.308C75.6536 227.308 75.2243 227.415 74.8323 227.63C74.4496 227.835 74.1416 228.153 73.9083 228.582C73.675 229.011 73.5583 229.534 73.5583 230.15C73.5583 230.775 73.6703 231.303 73.8943 231.732C74.1276 232.161 74.4356 232.483 74.8183 232.698C75.201 232.903 75.621 233.006 76.0783 233.006ZM82.9614 227.574C83.1854 227.135 83.5027 226.795 83.9134 226.552C84.3334 226.309 84.842 226.188 85.4394 226.188V227.504H85.1034C83.6754 227.504 82.9614 228.279 82.9614 229.828V234H81.6874V226.328H82.9614V227.574ZM96.136 226.188C96.7334 226.188 97.2654 226.314 97.732 226.566C98.1987 226.809 98.5674 227.177 98.838 227.672C99.1087 228.167 99.244 228.769 99.244 229.478V234H97.984V229.66C97.984 228.895 97.7927 228.311 97.41 227.91C97.0367 227.499 96.528 227.294 95.884 227.294C95.2214 227.294 94.694 227.509 94.302 227.938C93.91 228.358 93.714 228.969 93.714 229.772V234H92.454V229.66C92.454 228.895 92.2627 228.311 91.88 227.91C91.5067 227.499 90.998 227.294 90.354 227.294C89.6914 227.294 89.164 227.509 88.772 227.938C88.38 228.358 88.184 228.969 88.184 229.772V234H86.91V226.328H88.184V227.434C88.436 227.033 88.772 226.725 89.192 226.51C89.6214 226.295 90.0927 226.188 90.606 226.188C91.25 226.188 91.8194 226.333 92.314 226.622C92.8087 226.911 93.1774 227.336 93.42 227.896C93.6347 227.355 93.9894 226.935 94.484 226.636C94.9787 226.337 95.5294 226.188 96.136 226.188ZM107.782 234.126C107.194 234.126 106.667 234.028 106.2 233.832C105.734 233.627 105.365 233.347 105.094 232.992C104.824 232.628 104.674 232.213 104.646 231.746H105.962C106 232.129 106.177 232.441 106.494 232.684C106.821 232.927 107.246 233.048 107.768 233.048C108.254 233.048 108.636 232.941 108.916 232.726C109.196 232.511 109.336 232.241 109.336 231.914C109.336 231.578 109.187 231.331 108.888 231.172C108.59 231.004 108.128 230.841 107.502 230.682C106.933 230.533 106.466 230.383 106.102 230.234C105.748 230.075 105.44 229.847 105.178 229.548C104.926 229.24 104.8 228.839 104.8 228.344C104.8 227.952 104.917 227.593 105.15 227.266C105.384 226.939 105.715 226.683 106.144 226.496C106.574 226.3 107.064 226.202 107.614 226.202C108.464 226.202 109.15 226.417 109.672 226.846C110.195 227.275 110.475 227.863 110.512 228.61H109.238C109.21 228.209 109.047 227.887 108.748 227.644C108.459 227.401 108.067 227.28 107.572 227.28C107.115 227.28 106.751 227.378 106.48 227.574C106.21 227.77 106.074 228.027 106.074 228.344C106.074 228.596 106.154 228.806 106.312 228.974C106.48 229.133 106.686 229.263 106.928 229.366C107.18 229.459 107.526 229.567 107.964 229.688C108.515 229.837 108.963 229.987 109.308 230.136C109.654 230.276 109.948 230.491 110.19 230.78C110.442 231.069 110.573 231.447 110.582 231.914C110.582 232.334 110.466 232.712 110.232 233.048C109.999 233.384 109.668 233.65 109.238 233.846C108.818 234.033 108.333 234.126 107.782 234.126ZM119.185 226.328V234H117.911V232.866C117.668 233.258 117.327 233.566 116.889 233.79C116.459 234.005 115.983 234.112 115.461 234.112C114.863 234.112 114.327 233.991 113.851 233.748C113.375 233.496 112.997 233.123 112.717 232.628C112.446 232.133 112.311 231.531 112.311 230.822V226.328H113.571V230.654C113.571 231.41 113.762 231.993 114.145 232.404C114.527 232.805 115.05 233.006 115.713 233.006C116.394 233.006 116.931 232.796 117.323 232.376C117.715 231.956 117.911 231.345 117.911 230.542V226.328H119.185ZM122.61 227.756C122.871 227.299 123.254 226.925 123.758 226.636C124.262 226.347 124.836 226.202 125.48 226.202C126.17 226.202 126.791 226.365 127.342 226.692C127.892 227.019 128.326 227.481 128.644 228.078C128.961 228.666 129.12 229.352 129.12 230.136C129.12 230.911 128.961 231.601 128.644 232.208C128.326 232.815 127.888 233.286 127.328 233.622C126.777 233.958 126.161 234.126 125.48 234.126C124.817 234.126 124.234 233.981 123.73 233.692C123.235 233.403 122.862 233.034 122.61 232.586V234H121.336V223.64H122.61V227.756ZM127.818 230.136C127.818 229.557 127.701 229.053 127.468 228.624C127.234 228.195 126.917 227.868 126.516 227.644C126.124 227.42 125.69 227.308 125.214 227.308C124.747 227.308 124.313 227.425 123.912 227.658C123.52 227.882 123.202 228.213 122.96 228.652C122.726 229.081 122.61 229.581 122.61 230.15C122.61 230.729 122.726 231.237 122.96 231.676C123.202 232.105 123.52 232.437 123.912 232.67C124.313 232.894 124.747 233.006 125.214 233.006C125.69 233.006 126.124 232.894 126.516 232.67C126.917 232.437 127.234 232.105 127.468 231.676C127.701 231.237 127.818 230.724 127.818 230.136ZM140.023 226.188C140.62 226.188 141.152 226.314 141.619 226.566C142.085 226.809 142.454 227.177 142.725 227.672C142.995 228.167 143.131 228.769 143.131 229.478V234H141.871V229.66C141.871 228.895 141.679 228.311 141.297 227.91C140.923 227.499 140.415 227.294 139.771 227.294C139.108 227.294 138.581 227.509 138.189 227.938C137.797 228.358 137.601 228.969 137.601 229.772V234H136.341V229.66C136.341 228.895 136.149 228.311 135.767 227.91C135.393 227.499 134.885 227.294 134.241 227.294C133.578 227.294 133.051 227.509 132.659 227.938C132.267 228.358 132.071 228.969 132.071 229.772V234H130.797V226.328H132.071V227.434C132.323 227.033 132.659 226.725 133.079 226.51C133.508 226.295 133.979 226.188 134.493 226.188C135.137 226.188 135.706 226.333 136.201 226.622C136.695 226.911 137.064 227.336 137.307 227.896C137.521 227.355 137.876 226.935 138.371 226.636C138.865 226.337 139.416 226.188 140.023 226.188ZM145.879 225.082C145.636 225.082 145.431 224.998 145.263 224.83C145.095 224.662 145.011 224.457 145.011 224.214C145.011 223.971 145.095 223.766 145.263 223.598C145.431 223.43 145.636 223.346 145.879 223.346C146.112 223.346 146.308 223.43 146.467 223.598C146.635 223.766 146.719 223.971 146.719 224.214C146.719 224.457 146.635 224.662 146.467 224.83C146.308 224.998 146.112 225.082 145.879 225.082ZM146.495 226.328V234H145.221V226.328H146.495ZM151.382 234.126C150.794 234.126 150.267 234.028 149.8 233.832C149.333 233.627 148.965 233.347 148.694 232.992C148.423 232.628 148.274 232.213 148.246 231.746H149.562C149.599 232.129 149.777 232.441 150.094 232.684C150.421 232.927 150.845 233.048 151.368 233.048C151.853 233.048 152.236 232.941 152.516 232.726C152.796 232.511 152.936 232.241 152.936 231.914C152.936 231.578 152.787 231.331 152.488 231.172C152.189 231.004 151.727 230.841 151.102 230.682C150.533 230.533 150.066 230.383 149.702 230.234C149.347 230.075 149.039 229.847 148.778 229.548C148.526 229.24 148.4 228.839 148.4 228.344C148.4 227.952 148.517 227.593 148.75 227.266C148.983 226.939 149.315 226.683 149.744 226.496C150.173 226.3 150.663 226.202 151.214 226.202C152.063 226.202 152.749 226.417 153.272 226.846C153.795 227.275 154.075 227.863 154.112 228.61H152.838C152.81 228.209 152.647 227.887 152.348 227.644C152.059 227.401 151.667 227.28 151.172 227.28C150.715 227.28 150.351 227.378 150.08 227.574C149.809 227.77 149.674 228.027 149.674 228.344C149.674 228.596 149.753 228.806 149.912 228.974C150.08 229.133 150.285 229.263 150.528 229.366C150.78 229.459 151.125 229.567 151.564 229.688C152.115 229.837 152.563 229.987 152.908 230.136C153.253 230.276 153.547 230.491 153.79 230.78C154.042 231.069 154.173 231.447 154.182 231.914C154.182 232.334 154.065 232.712 153.832 233.048C153.599 233.384 153.267 233.65 152.838 233.846C152.418 234.033 151.933 234.126 151.382 234.126ZM158.696 234.126C158.108 234.126 157.581 234.028 157.114 233.832C156.648 233.627 156.279 233.347 156.008 232.992C155.738 232.628 155.588 232.213 155.56 231.746H156.876C156.914 232.129 157.091 232.441 157.408 232.684C157.735 232.927 158.16 233.048 158.682 233.048C159.168 233.048 159.55 232.941 159.83 232.726C160.11 232.511 160.25 232.241 160.25 231.914C160.25 231.578 160.101 231.331 159.802 231.172C159.504 231.004 159.042 230.841 158.416 230.682C157.847 230.533 157.38 230.383 157.016 230.234C156.662 230.075 156.354 229.847 156.092 229.548C155.84 229.24 155.714 228.839 155.714 228.344C155.714 227.952 155.831 227.593 156.064 227.266C156.298 226.939 156.629 226.683 157.058 226.496C157.488 226.3 157.978 226.202 158.528 226.202C159.378 226.202 160.064 226.417 160.586 226.846C161.109 227.275 161.389 227.863 161.426 228.61H160.152C160.124 228.209 159.961 227.887 159.662 227.644C159.373 227.401 158.981 227.28 158.486 227.28C158.029 227.28 157.665 227.378 157.394 227.574C157.124 227.77 156.988 228.027 156.988 228.344C156.988 228.596 157.068 228.806 157.226 228.974C157.394 229.133 157.6 229.263 157.842 229.366C158.094 229.459 158.44 229.567 158.878 229.688C159.429 229.837 159.877 229.987 160.222 230.136C160.568 230.276 160.862 230.491 161.104 230.78C161.356 231.069 161.487 231.447 161.496 231.914C161.496 232.334 161.38 232.712 161.146 233.048C160.913 233.384 160.582 233.65 160.152 233.846C159.732 234.033 159.247 234.126 158.696 234.126ZM163.953 225.082C163.71 225.082 163.505 224.998 163.337 224.83C163.169 224.662 163.085 224.457 163.085 224.214C163.085 223.971 163.169 223.766 163.337 223.598C163.505 223.43 163.71 223.346 163.953 223.346C164.186 223.346 164.382 223.43 164.541 223.598C164.709 223.766 164.793 223.971 164.793 224.214C164.793 224.457 164.709 224.662 164.541 224.83C164.382 224.998 164.186 225.082 163.953 225.082ZM164.569 226.328V234H163.295V226.328H164.569ZM170.086 234.126C169.367 234.126 168.714 233.963 168.126 233.636C167.547 233.309 167.09 232.847 166.754 232.25C166.427 231.643 166.264 230.943 166.264 230.15C166.264 229.366 166.432 228.675 166.768 228.078C167.113 227.471 167.58 227.009 168.168 226.692C168.756 226.365 169.414 226.202 170.142 226.202C170.87 226.202 171.528 226.365 172.116 226.692C172.704 227.009 173.166 227.467 173.502 228.064C173.847 228.661 174.02 229.357 174.02 230.15C174.02 230.943 173.843 231.643 173.488 232.25C173.143 232.847 172.671 233.309 172.074 233.636C171.477 233.963 170.814 234.126 170.086 234.126ZM170.086 233.006C170.543 233.006 170.973 232.899 171.374 232.684C171.775 232.469 172.097 232.147 172.34 231.718C172.592 231.289 172.718 230.766 172.718 230.15C172.718 229.534 172.597 229.011 172.354 228.582C172.111 228.153 171.794 227.835 171.402 227.63C171.01 227.415 170.585 227.308 170.128 227.308C169.661 227.308 169.232 227.415 168.84 227.63C168.457 227.835 168.149 228.153 167.916 228.582C167.683 229.011 167.566 229.534 167.566 230.15C167.566 230.775 167.678 231.303 167.902 231.732C168.135 232.161 168.443 232.483 168.826 232.698C169.209 232.903 169.629 233.006 170.086 233.006ZM179.433 226.188C180.367 226.188 181.123 226.473 181.701 227.042C182.28 227.602 182.569 228.414 182.569 229.478V234H181.309V229.66C181.309 228.895 181.118 228.311 180.735 227.91C180.353 227.499 179.83 227.294 179.167 227.294C178.495 227.294 177.959 227.504 177.557 227.924C177.165 228.344 176.969 228.955 176.969 229.758V234H175.695V226.328H176.969V227.42C177.221 227.028 177.562 226.725 177.991 226.51C178.43 226.295 178.911 226.188 179.433 226.188ZM187.366 234.126C186.778 234.126 186.251 234.028 185.784 233.832C185.318 233.627 184.949 233.347 184.678 232.992C184.408 232.628 184.258 232.213 184.23 231.746H185.546C185.584 232.129 185.761 232.441 186.078 232.684C186.405 232.927 186.83 233.048 187.352 233.048C187.838 233.048 188.22 232.941 188.5 232.726C188.78 232.511 188.92 232.241 188.92 231.914C188.92 231.578 188.771 231.331 188.472 231.172C188.174 231.004 187.712 230.841 187.086 230.682C186.517 230.533 186.05 230.383 185.686 230.234C185.332 230.075 185.024 229.847 184.762 229.548C184.51 229.24 184.384 228.839 184.384 228.344C184.384 227.952 184.501 227.593 184.734 227.266C184.968 226.939 185.299 226.683 185.728 226.496C186.158 226.3 186.648 226.202 187.198 226.202C188.048 226.202 188.734 226.417 189.256 226.846C189.779 227.275 190.059 227.863 190.096 228.61H188.822C188.794 228.209 188.631 227.887 188.332 227.644C188.043 227.401 187.651 227.28 187.156 227.28C186.699 227.28 186.335 227.378 186.064 227.574C185.794 227.77 185.658 228.027 185.658 228.344C185.658 228.596 185.738 228.806 185.896 228.974C186.064 229.133 186.27 229.263 186.512 229.366C186.764 229.459 187.11 229.567 187.548 229.688C188.099 229.837 188.547 229.987 188.892 230.136C189.238 230.276 189.532 230.491 189.774 230.78C190.026 231.069 190.157 231.447 190.166 231.914C190.166 232.334 190.05 232.712 189.816 233.048C189.583 233.384 189.252 233.65 188.822 233.846C188.402 234.033 187.917 234.126 187.366 234.126Z"
          fill="black"
        />
        <path
          d="M32.172 267.098C31.528 267.098 30.9493 266.986 30.436 266.762C29.932 266.529 29.5353 266.211 29.246 265.81C28.9567 265.399 28.8073 264.928 28.798 264.396H30.156C30.2027 264.853 30.3893 265.241 30.716 265.558C31.052 265.866 31.5373 266.02 32.172 266.02C32.7787 266.02 33.2547 265.871 33.6 265.572C33.9547 265.264 34.132 264.872 34.132 264.396C34.132 264.023 34.0293 263.719 33.824 263.486C33.6187 263.253 33.362 263.075 33.054 262.954C32.746 262.833 32.3307 262.702 31.808 262.562C31.164 262.394 30.646 262.226 30.254 262.058C29.8713 261.89 29.54 261.629 29.26 261.274C28.9893 260.91 28.854 260.425 28.854 259.818C28.854 259.286 28.9893 258.815 29.26 258.404C29.5307 257.993 29.9087 257.676 30.394 257.452C30.8887 257.228 31.4533 257.116 32.088 257.116C33.0027 257.116 33.7493 257.345 34.328 257.802C34.916 258.259 35.2473 258.866 35.322 259.622H33.922C33.8753 259.249 33.6793 258.922 33.334 258.642C32.9887 258.353 32.5313 258.208 31.962 258.208C31.43 258.208 30.996 258.348 30.66 258.628C30.324 258.899 30.156 259.281 30.156 259.776C30.156 260.131 30.254 260.42 30.45 260.644C30.6553 260.868 30.9027 261.041 31.192 261.162C31.4907 261.274 31.906 261.405 32.438 261.554C33.082 261.731 33.6 261.909 33.992 262.086C34.384 262.254 34.72 262.52 35 262.884C35.28 263.239 35.42 263.724 35.42 264.34C35.42 264.816 35.294 265.264 35.042 265.684C34.79 266.104 34.4167 266.445 33.922 266.706C33.4273 266.967 32.844 267.098 32.172 267.098ZM44.2948 262.87C44.2948 263.113 44.2808 263.369 44.2528 263.64H38.1208C38.1675 264.396 38.4241 264.989 38.8908 265.418C39.3668 265.838 39.9408 266.048 40.6128 266.048C41.1635 266.048 41.6208 265.922 41.9848 265.67C42.3581 265.409 42.6195 265.063 42.7688 264.634H44.1408C43.9355 265.371 43.5248 265.973 42.9088 266.44C42.2928 266.897 41.5275 267.126 40.6128 267.126C39.8848 267.126 39.2315 266.963 38.6528 266.636C38.0835 266.309 37.6355 265.847 37.3088 265.25C36.9821 264.643 36.8188 263.943 36.8188 263.15C36.8188 262.357 36.9775 261.661 37.2948 261.064C37.6121 260.467 38.0555 260.009 38.6248 259.692C39.2035 259.365 39.8661 259.202 40.6128 259.202C41.3408 259.202 41.9848 259.361 42.5448 259.678C43.1048 259.995 43.5341 260.434 43.8328 260.994C44.1408 261.545 44.2948 262.17 44.2948 262.87ZM42.9788 262.604C42.9788 262.119 42.8715 261.703 42.6568 261.358C42.4421 261.003 42.1481 260.737 41.7748 260.56C41.4108 260.373 41.0048 260.28 40.5568 260.28C39.9128 260.28 39.3621 260.485 38.9048 260.896C38.4568 261.307 38.2001 261.876 38.1348 262.604H42.9788ZM49.7144 259.188C50.6478 259.188 51.4038 259.473 51.9824 260.042C52.5611 260.602 52.8504 261.414 52.8504 262.478V267H51.5904V262.66C51.5904 261.895 51.3991 261.311 51.0164 260.91C50.6338 260.499 50.1111 260.294 49.4484 260.294C48.7764 260.294 48.2398 260.504 47.8384 260.924C47.4464 261.344 47.2504 261.955 47.2504 262.758V267H45.9764V259.328H47.2504V260.42C47.5024 260.028 47.8431 259.725 48.2724 259.51C48.7111 259.295 49.1918 259.188 49.7144 259.188ZM54.4555 263.136C54.4555 262.352 54.6142 261.666 54.9315 261.078C55.2488 260.481 55.6828 260.019 56.2335 259.692C56.7935 259.365 57.4188 259.202 58.1095 259.202C58.7068 259.202 59.2622 259.342 59.7755 259.622C60.2888 259.893 60.6808 260.252 60.9515 260.7V256.64H62.2395V267H60.9515V265.558C60.6995 266.015 60.3262 266.393 59.8315 266.692C59.3368 266.981 58.7582 267.126 58.0955 267.126C57.4142 267.126 56.7935 266.958 56.2335 266.622C55.6828 266.286 55.2488 265.815 54.9315 265.208C54.6142 264.601 54.4555 263.911 54.4555 263.136ZM60.9515 263.15C60.9515 262.571 60.8348 262.067 60.6015 261.638C60.3682 261.209 60.0508 260.882 59.6495 260.658C59.2575 260.425 58.8235 260.308 58.3475 260.308C57.8715 260.308 57.4375 260.42 57.0455 260.644C56.6535 260.868 56.3408 261.195 56.1075 261.624C55.8742 262.053 55.7575 262.557 55.7575 263.136C55.7575 263.724 55.8742 264.237 56.1075 264.676C56.3408 265.105 56.6535 265.437 57.0455 265.67C57.4375 265.894 57.8715 266.006 58.3475 266.006C58.8235 266.006 59.2575 265.894 59.6495 265.67C60.0508 265.437 60.3682 265.105 60.6015 264.676C60.8348 264.237 60.9515 263.729 60.9515 263.15ZM67.6489 263.15C67.6489 262.357 67.8075 261.666 68.1249 261.078C68.4422 260.481 68.8809 260.019 69.4409 259.692C70.0102 259.365 70.6589 259.202 71.3869 259.202C72.3295 259.202 73.1042 259.431 73.7109 259.888C74.3269 260.345 74.7329 260.98 74.9289 261.792H73.5569C73.4262 261.325 73.1695 260.957 72.7869 260.686C72.4135 260.415 71.9469 260.28 71.3869 260.28C70.6589 260.28 70.0709 260.532 69.6229 261.036C69.1749 261.531 68.9509 262.235 68.9509 263.15C68.9509 264.074 69.1749 264.788 69.6229 265.292C70.0709 265.796 70.6589 266.048 71.3869 266.048C71.9469 266.048 72.4135 265.917 72.7869 265.656C73.1602 265.395 73.4169 265.021 73.5569 264.536H74.9289C74.7235 265.32 74.3129 265.95 73.6969 266.426C73.0809 266.893 72.3109 267.126 71.3869 267.126C70.6589 267.126 70.0102 266.963 69.4409 266.636C68.8809 266.309 68.4422 265.847 68.1249 265.25C67.8075 264.653 67.6489 263.953 67.6489 263.15ZM77.9028 256.64V267H76.6288V256.64H77.9028ZM80.7321 258.082C80.4894 258.082 80.2841 257.998 80.1161 257.83C79.9481 257.662 79.8641 257.457 79.8641 257.214C79.8641 256.971 79.9481 256.766 80.1161 256.598C80.2841 256.43 80.4894 256.346 80.7321 256.346C80.9654 256.346 81.1614 256.43 81.3201 256.598C81.4881 256.766 81.5721 256.971 81.5721 257.214C81.5721 257.457 81.4881 257.662 81.3201 257.83C81.1614 257.998 80.9654 258.082 80.7321 258.082ZM81.3481 259.328V267H80.0741V259.328H81.3481ZM83.0434 263.15C83.0434 262.357 83.2021 261.666 83.5194 261.078C83.8367 260.481 84.2754 260.019 84.8354 259.692C85.4047 259.365 86.0534 259.202 86.7814 259.202C87.7241 259.202 88.4987 259.431 89.1054 259.888C89.7214 260.345 90.1274 260.98 90.3234 261.792H88.9514C88.8207 261.325 88.5641 260.957 88.1814 260.686C87.8081 260.415 87.3414 260.28 86.7814 260.28C86.0534 260.28 85.4654 260.532 85.0174 261.036C84.5694 261.531 84.3454 262.235 84.3454 263.15C84.3454 264.074 84.5694 264.788 85.0174 265.292C85.4654 265.796 86.0534 266.048 86.7814 266.048C87.3414 266.048 87.8081 265.917 88.1814 265.656C88.5547 265.395 88.8114 265.021 88.9514 264.536H90.3234C90.1181 265.32 89.7074 265.95 89.0914 266.426C88.4754 266.893 87.7054 267.126 86.7814 267.126C86.0534 267.126 85.4047 266.963 84.8354 266.636C84.2754 266.309 83.8367 265.847 83.5194 265.25C83.2021 264.653 83.0434 263.953 83.0434 263.15ZM96.3073 267L93.2973 263.612V267H92.0233V256.64H93.2973V262.73L96.2513 259.328H98.0293L94.4173 263.15L98.0433 267H96.3073ZM102.485 263.136C102.485 262.352 102.643 261.666 102.961 261.078C103.278 260.481 103.712 260.019 104.263 259.692C104.823 259.365 105.448 259.202 106.139 259.202C106.736 259.202 107.291 259.342 107.805 259.622C108.318 259.893 108.71 260.252 108.981 260.7V256.64H110.269V267H108.981V265.558C108.729 266.015 108.355 266.393 107.861 266.692C107.366 266.981 106.787 267.126 106.125 267.126C105.443 267.126 104.823 266.958 104.263 266.622C103.712 266.286 103.278 265.815 102.961 265.208C102.643 264.601 102.485 263.911 102.485 263.136ZM108.981 263.15C108.981 262.571 108.864 262.067 108.631 261.638C108.397 261.209 108.08 260.882 107.679 260.658C107.287 260.425 106.853 260.308 106.377 260.308C105.901 260.308 105.467 260.42 105.075 260.644C104.683 260.868 104.37 261.195 104.137 261.624C103.903 262.053 103.787 262.557 103.787 263.136C103.787 263.724 103.903 264.237 104.137 264.676C104.37 265.105 104.683 265.437 105.075 265.67C105.467 265.894 105.901 266.006 106.377 266.006C106.853 266.006 107.287 265.894 107.679 265.67C108.08 265.437 108.397 265.105 108.631 264.676C108.864 264.237 108.981 263.729 108.981 263.15ZM111.946 263.136C111.946 262.352 112.104 261.666 112.422 261.078C112.739 260.481 113.173 260.019 113.724 259.692C114.284 259.365 114.904 259.202 115.586 259.202C116.258 259.202 116.841 259.347 117.336 259.636C117.83 259.925 118.199 260.289 118.442 260.728V259.328H119.73V267H118.442V265.572C118.19 266.02 117.812 266.393 117.308 266.692C116.813 266.981 116.234 267.126 115.572 267.126C114.89 267.126 114.274 266.958 113.724 266.622C113.173 266.286 112.739 265.815 112.422 265.208C112.104 264.601 111.946 263.911 111.946 263.136ZM118.442 263.15C118.442 262.571 118.325 262.067 118.092 261.638C117.858 261.209 117.541 260.882 117.14 260.658C116.748 260.425 116.314 260.308 115.838 260.308C115.362 260.308 114.928 260.42 114.536 260.644C114.144 260.868 113.831 261.195 113.598 261.624C113.364 262.053 113.248 262.557 113.248 263.136C113.248 263.724 113.364 264.237 113.598 264.676C113.831 265.105 114.144 265.437 114.536 265.67C114.928 265.894 115.362 266.006 115.838 266.006C116.314 266.006 116.748 265.894 117.14 265.67C117.541 265.437 117.858 265.105 118.092 264.676C118.325 264.237 118.442 263.729 118.442 263.15ZM123.437 260.378V264.9C123.437 265.273 123.516 265.539 123.675 265.698C123.833 265.847 124.109 265.922 124.501 265.922H125.439V267H124.291C123.581 267 123.049 266.837 122.695 266.51C122.34 266.183 122.163 265.647 122.163 264.9V260.378H121.169V259.328H122.163V257.396H123.437V259.328H125.439V260.378H123.437ZM126.506 263.136C126.506 262.352 126.665 261.666 126.982 261.078C127.3 260.481 127.734 260.019 128.284 259.692C128.844 259.365 129.465 259.202 130.146 259.202C130.818 259.202 131.402 259.347 131.896 259.636C132.391 259.925 132.76 260.289 133.002 260.728V259.328H134.29V267H133.002V265.572C132.75 266.02 132.372 266.393 131.868 266.692C131.374 266.981 130.795 267.126 130.132 267.126C129.451 267.126 128.835 266.958 128.284 266.622C127.734 266.286 127.3 265.815 126.982 265.208C126.665 264.601 126.506 263.911 126.506 263.136ZM133.002 263.15C133.002 262.571 132.886 262.067 132.652 261.638C132.419 261.209 132.102 260.882 131.7 260.658C131.308 260.425 130.874 260.308 130.398 260.308C129.922 260.308 129.488 260.42 129.096 260.644C128.704 260.868 128.392 261.195 128.158 261.624C127.925 262.053 127.808 262.557 127.808 263.136C127.808 263.724 127.925 264.237 128.158 264.676C128.392 265.105 128.704 265.437 129.096 265.67C129.488 265.894 129.922 266.006 130.398 266.006C130.874 266.006 131.308 265.894 131.7 265.67C132.102 265.437 132.419 265.105 132.652 264.676C132.886 264.237 133.002 263.729 133.002 263.15Z"
          fill="black"
        />
        <rect
          x="0.5"
          y="253.5"
          width="17"
          height="17"
          rx="3.5"
          stroke="#BBBBBB"
        />
        <rect y="220" width="18" height="18" rx="4" fill="#7D4AEA" />
        <path
          d="M7.31211 231.363L4.94961 229L4.16211 229.788L7.31211 232.938L14.0621 226.188L13.2746 225.4L7.31211 231.363Z"
          fill="white"
        />
      </svg>
      <div className="grid gap-y-2">
        <div className="flex items-center space-x-4 mt-12">
          <p className="flex p-2 bg-custom-dark-gray text-center rounded-full w-9 h-9 font-bold place-content-center items-center">
            5
          </p>
          <h3 className="text-lg font-semibold">Settings and Code</h3>
        </div>
        <h4 className="text-lg font-semibold mt-4">Webhook to Send data</h4>
        <p>Enter your Webhook URL</p>
        <p>You a</p>
      </div>
    </div>
  );
};

export default TemplateDetails;
