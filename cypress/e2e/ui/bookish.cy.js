// import cy from "cypress";

import axios from "axios";

describe("Bookish application", () => {
  beforeEach(() => {
    const books = [
      { id: 3, name: "Building Micro-service" },
      { id: 2, name: "Domain-driven design" },
      { id: 1, name: "Refactoring" },
    ];

    return books.map((item) =>
      axios.post("http://localhost:8080/books", item, {
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  afterEach(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });
  it("Visits the bookish ", () => {
    cy.visit("http://localhost:3000/");
    cy.get('h2[data-test="heading"').contains("Bookish");
  });
  it("Shows a book list", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should("have.length", 3);
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design", "Building Micro-service"]);
    });
  });
});
