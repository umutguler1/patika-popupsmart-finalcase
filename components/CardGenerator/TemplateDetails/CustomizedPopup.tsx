import React from "react";
import Template from "../../models/template";

const CustomizedPopup: React.FC<{
  template: React.FC<{
    templateProps: Template;
  }>;
  templateProps: Template;
}> = (props) => {
  return (
    <div>
      <props.template templateProps={props.templateProps} />
    </div>
  );
};

export default CustomizedPopup;
