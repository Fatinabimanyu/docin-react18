import App from "../App";

it("mounts", () => {
  cy.mount(<App />);
  //Stepper should have initial count of 0 (default)
  cy.get("[data-cy=counter]").should("have.text", "0");
});
