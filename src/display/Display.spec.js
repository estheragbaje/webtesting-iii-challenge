// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

// let wrapper;

// beforeEach(() => {
//   wrapper = rtl.render(<Display />);
// });

describe("Display Component", () => {
  it("can debug the output", () => {
    const wrapper = rtl.render(<Display />);
    wrapper.debug();
  });

  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const wrapper = rtl.render(<Display />);
    const display = wrapper.queryByTestId("display");
    expect(display).toBeInTheDocument();
  });

  it("displays Open if closed props is false", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText("Open")).toBeInTheDocument();
  });

  it("displays Closed if the closed prop is true", () => {
    const wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText("Closed")).toBeInTheDocument();
  });

  it("displays Unlocked if locked props is false", () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.queryByText("Unlocked")).toBeInTheDocument();
  });

  it("displays Locked if the locked prop is true", () => {
    const wrapper = rtl.render(<Display locked={true} />);
    expect(wrapper.queryByText("Locked")).toBeInTheDocument();
  });

  it("displays red-led class when locked is passed", () => {
    const wrapper = rtl.render(<Display locked={true} />);
    const elem = wrapper.queryByText("Locked");
    expect(elem.classList.contains("red-led")).toBe(true);
  });

  it("displays red-led class when closed is passed", () => {
    const wrapper = rtl.render(<Display closed={true} />);
    const elem = wrapper.queryByText("Closed");
    expect(elem.classList.contains("red-led")).toBe(true);
  });

  it("displays green-led class when unlocked is passed", () => {
    const wrapper = rtl.render(<Display />);
    const elem = wrapper.queryByText("Unlocked");
    expect(elem.classList.contains("green-led")).toBe(true);
  });

  it("displays green-led class when open is passed", () => {
    const wrapper = rtl.render(<Display />);
    const elem = wrapper.queryByText("Open");
    expect(elem.classList.contains("green-led")).toBe(true);
  });
});
