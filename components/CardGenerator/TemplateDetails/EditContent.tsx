import React, { Fragment } from "react";
import Template from "../../models/template";

const editContentInputClasses =
  "border-2 rounded-xl px-3 py-2 w-[450px] ring-2 ring-transparent ring-inset focus:ring-custom-purple focus:ring-opacity-50 focus:drop-shadow-xl";

const EditContent: React.FC<{
  templateProps: Template;
  changeContentHandler: (event: any) => void;
  selectedTemplate: any;
  selectFileHandler: (event: any) => void;
  resetFileHandler: (event: any) => void;
}> = ({
  templateProps,
  changeContentHandler,
  selectedTemplate,
  selectFileHandler,
  resetFileHandler,
}) => {
  return (
    <Fragment>
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
        {templateProps.text2 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.text2}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.text3 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.text3}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.text4 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.text4}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.text5 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.text5}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.inputText !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.inputText}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.inputText2 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.inputText2}
            onChange={changeContentHandler}
            className={editContentInputClasses}
          />
        )}
        {templateProps.inputText3 !== undefined && (
          <input
            type="text"
            defaultValue={templateProps.inputText3}
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
            <label
              htmlFor="imgInput"
              className="w-fit cursor-pointer px-4 py-2 bg-custom-purple text-custom-white rounded-lg hover:brightness-125 transition-all"
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
    </Fragment>
  );
};

export default EditContent;
