// Test away
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe("Dashboard Component", () => {
  it("can debug the output", () => {
    wrapper.debug();
  });

  it("shows the controls", () => {
    const controls = wrapper.queryByTestId("controls");
    expect(controls).toBeInTheDocument();
  });

  it("shows the display", () => {
    const display = wrapper.queryByTestId("display");
    expect(display).toBeInTheDocument();
  });

  it("defaults to unlocked and open", () => {
    expect(wrapper.queryByText("Unlocked")).toBeInTheDocument();
    expect(wrapper.queryByText("Open")).toBeInTheDocument();
  });

  it("cannot be closed or opened if it is locked", () => {
    // step 1: Click the close gate button
    // step 2: Click the lock gate button
    // step 3: Open/Close gate button is disabled
    // step 4: Displays locked and closed
    const ocButton = wrapper.queryByTestId("open-close-button");
    expect(ocButton).toBeInTheDocument();
    rtl.fireEvent.click(ocButton);
    expect(wrapper.queryByText("Closed")).toBeInTheDocument();
    expect(wrapper.queryByText("Lock Gate")).toBeInTheDocument();
    //
    const luButton = wrapper.queryByTestId("lock-unlock-button");
    expect(luButton).toBeInTheDocument();
    rtl.fireEvent.click(luButton);
    expect(wrapper.queryByText("Locked")).toBeInTheDocument();
    expect(wrapper.queryByText("Closed")).toBeInTheDocument();
  });
});
