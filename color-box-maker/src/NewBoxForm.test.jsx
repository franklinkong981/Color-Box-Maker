import React from "react";
import {render} from "@testing-library/react";
import NewBoxForm from "./NewBoxForm.jsx";
import { expect, it } from "vitest";

const addBox = () => {
  console.log("Box added");
}

it("renders without crashing", function() {
  render(<NewBoxForm addBox={addBox}/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<NewBoxForm addBox={addBox}/>);
  expect(asFragment()).toMatchSnapshot();
});