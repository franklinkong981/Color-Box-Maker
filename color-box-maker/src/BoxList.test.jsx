import React from "react";
import {render} from "@testing-library/react";
import BoxList from "./BoxList.jsx";
import { expect, it } from "vitest";

it("renders without crashing", function() {
  render(<BoxList/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<BoxList/>);
  expect(asFragment()).toMatchSnapshot();
});