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
  it("shows default open gate", () => {
    // const openCloseButton = tools.queryByTestId("openCloseControl");
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
    rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
    expect(wrapper.queryByText(/open/i)).not.toBeInTheDocument();
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
  });
  
//   it("shows default open gate", () => {
//     // const openCloseButton = tools.queryByTestId("openCloseControl");
//     expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
//     rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
//     expect(wrapper.queryByText(/open/i)).not.toBeInTheDocument();
//     expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
//   });
// });
