import { render, screen } from "@testing-library/react";
import BookDetail from "./BookDetail";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        name: "Domain-driven design",
      },
    };

    render(<BookDetail {...props} />);

    screen.getAllByText("Domain-driven design");
  });
  it("renders description", () => {
    const props = {
      book: {
        name: "Refactoring",
        description:
          "Martin Flowers Refactoring defined core ideas and techniques that hundres of thousands of developers have used to improve their software.",
      },
    };

    render(<BookDetail {...props} />);

    const findThisText = props.book.description;
    screen.getByText(new RegExp(findThisText, "i"));
  });
  it("displays the book name when no description was given", () => {
    const props = {
      book: {
        name: "Refactoring",
      },
    };

    render(<BookDetail {...props} />);

    const description = screen.getByTestId("book-description");
    expect(description.innerHTML).toEqual(props.book.name);
  });
  it("Shows *more* link when description is too long", () => {
    const props = {
      book: {
        name: "Refactoring",
        description: "The book about how to do refactoring ...",
      },
    };

    render(<BookDetail {...props} />);

    const link = screen.getByTestId("show-more");
    const title = screen.getByTestId("book-description");
    expect(link.innerHTML).toEqual("Show more");
  });
});
