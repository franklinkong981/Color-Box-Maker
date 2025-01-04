import React from "react";
import {render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList.jsx";
import { expect, it } from "vitest";
import { input } from "@testing-library/user-event/dist/cjs/event/input.js";

it("renders without crashing", function() {
  render(<BoxList/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<BoxList/>);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new box to the page after the form is submitted", async function() {
  const {container, getByLabelText, queryByText, findByText} = render(<BoxList/>);

  //at first, there shouldn't be any boxes on the page.
  let firstBox = container.querySelector(".Box");
  expect(firstBox).not.toBeInTheDocument();
  let firstBoxRemoveButton = queryByText("DELETE BOX");
  expect(firstBoxRemoveButton).not.toBeInTheDocument();

  //the form, however, should be present.
  let newBoxForm = container.querySelector(".NewBoxForm");
  expect(newBoxForm).toBeInTheDocument();

  //the user should be able to change form input values.
  const colorInput = getByLabelText("Select Color:");
  const heightInput = getByLabelText("Height (pixels):");
  const widthInput = getByLabelText("Width (pixels):");

  expect(colorInput.value).toEqual("white");
  fireEvent.change(colorInput, {target: {value: "magenta"}});
  expect(colorInput.value).toEqual("magenta");
  
  expect(heightInput.value).toEqual("10");
  fireEvent.change(heightInput, {target: {value: 100}});
  expect(heightInput.value).toEqual("100");
  
  expect(widthInput.value).toEqual("10");
  fireEvent.change(widthInput, {target: {value: 200}});
  expect(widthInput.value).toEqual("200");

  //The user should be able to submit the form and a new box corresponding to the form's input should be added to the page.
  const addBoxButton = queryByText("Add box");
  fireEvent.click(addBoxButton);

  firstBoxRemoveButton = await findByText("DELETE BOX");
  expect(firstBoxRemoveButton).toBeInTheDocument();

  let firstBoxDisplay = firstBoxRemoveButton.previousSibling;
  expect(firstBoxDisplay).toBeInTheDocument();
  expect(firstBoxDisplay.style.backgroundColor).toEqual("magenta");
  expect(firstBoxDisplay.style.height).toEqual("100px");
  expect(firstBoxDisplay.style.width).toEqual("200px");

  //The user should be able to delete the box, and afterwards the box should no longer show up on the page.
  fireEvent.click(firstBoxRemoveButton);
  expect(firstBoxRemoveButton).not.toBeInTheDocument();
  expect(firstBoxDisplay).not.toBeInTheDocument();
});