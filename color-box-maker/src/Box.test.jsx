import React from "react";
import {render} from "@testing-library/react";
import Box from "./Box.jsx";
import { expect, it } from "vitest";

const removeBox = () => {
  console.log("Box removed");
}

it("renders without crashing", function() {
  render(<Box id={1} color="blue" height={100} width={100} removBox={removeBox}/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Box id={1} color="blue" height={100} width={100} removBox={removeBox}/>);
  expect(asFragment()).toMatchSnapshot();
});