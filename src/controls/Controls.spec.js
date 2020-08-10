import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Controls />);
});

describe("Controls Component", () => {
  it("can debug the output", () => {
    wrapper.debug();
  });

  it("provide buttons to toggle the closed and locked states", () => {
    const lockButton = wrapper.queryByTestId("lock-unlock-button");
    expect(lockButton).toBeInTheDocument();

    const closeButton = wrapper.queryByTestId("open-close-button");
    expect(closeButton).toBeInTheDocument();
  });
});
