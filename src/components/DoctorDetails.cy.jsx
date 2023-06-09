/* eslint-disable no-undef */
import React from "react";
import LogInUser from "./LogInUser";
import DoctorDetails from "./DoctorDetails";
import { render } from "@testing-library/react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import "tailwindcss/dist/tailwind.min.css";

describe("Tambah Pasien", () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <LogInUser />
      </Router>
    );
    cy.get("#email").type("tesppl@gmail.com");
    cy.get("#password").type("tesppl");
    cy.get("#btnSubmit").click();
  });

  it("Menambahkan perjanjian", () => {
    cy.mount(
      <Router>
        <DoctorDetails />
      </Router>
    );
    cy.get("#subjek").type("tespasienppl");
    cy.get("#explanation").type("tespplexplanation");
    cy.get("#date").type("2023-06-09");
    cy.get("#time").type("13:46");
    cy.get(".text-[#24E8DE]").type(150000);
    cy.get("#btnsubmit").click();
  });
});

// it("Login dan menambah pasien", () => {
//   cy.mount(
//     <Router>
//       <AddPasien />
//     </Router>
//   );
//   cy.get("#NIK").type(11223344);
//   cy.get("#nama").type("tesppl");
//   cy.get("#tempatlahir").type("sleman");
//   cy.get("#tanggallahir").type("2023-06-09");
//   cy.get("#alamat").type("tesalamat");
//   cy.get("#nohp").type(821123);

//   cy.get("#btnsubmit").click();
// });
