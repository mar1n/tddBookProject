import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  it("renders input", async () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };
    render(<SearchBox {...props} />);
    const element = screen.getByRole("textbox");

    userEvent.type(element, "Domain");
    
    expect(props.onSearch).toHaveBeenCalled();
  });
  it("trim empty strings", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(<SearchBox {...props} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, " ");

    expect(props.onSearch).not.toHaveBeenCalled();
  });
});
