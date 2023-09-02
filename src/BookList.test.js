import React from "react";
import { render, screen, getAllByRole } from "@testing-library/react";

import BookList from "./BookList";

describe("BookList", () => {
  it("loading", () => {
    const props = {
      loading: true,
    };

    render(<BookList {...props} />);
    screen.getByText(/LOADING.../i);
  });
  it("error", () => {
    const props = {
      error: true,
    };

    render(<BookList {...props} />);
    screen.getByText(/ERROR.../i);
  });
  it("redner books", () => {
    const props = {
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Domain-driven design", id: 2 },
      ],
    };
    render(<BookList {...props} />);
    const titleItemList = screen.getAllByTestId("title-item");
    const titles = [...titleItemList].map(x => x.textContent);
    expect(titles).toEqual(["Refactoring", "Domain-driven design"]);

  });
});
