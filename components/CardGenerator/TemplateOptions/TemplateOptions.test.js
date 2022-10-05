import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Templates from "./TemplateOptions";
import React from "react";

describe("Templates Component", () => {
  test("renders the title", () => {
    render(<Templates />);

    const mainTitle = screen.getByText("measure your", { exact: false });
    expect(mainTitle).toBeInTheDocument();
  });

  test("renders the templates div", () => {
    render(<Templates />);

    const templateButtons = screen.getByTestId("current-templates");
    expect(templateButtons).toBeInTheDocument();
  });
});
