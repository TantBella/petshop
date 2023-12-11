import GetPet from "../../src/components/GetPet";

describe("GetPe-component", () => {
  it("visar korrekt antal djur eller ett meddelande när inga djur är finns i databasen", () => {
    cy.intercept("/api");
    cy.mount(<GetPet />);

    //     cy.get(".petlist").should("have.length.greaterThan", 0);
    //     cy.get("p").should("contain.text", "Alla djur är sålda");
    //   });
    // });

    cy.window().then((win) => {
      const petlistLength = win.document.querySelectorAll(".petlist").length;

      if (petlistLength > 0) {
        cy.get(".petlist").should("have.length.greaterThan", 0);
      } else {
        cy.get("p").should("contain.text", "Alla djur är sålda");
      }
    });
  });
});
