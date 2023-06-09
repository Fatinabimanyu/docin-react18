/* eslint-disable no-undef */
import React from "react";
import LogInUser from "./LogInUser";
import AddPasien from "./AddPasien";
import { render } from "@testing-library/react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import "tailwindcss/dist/tailwind.min.css";

describe("Login", () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <LogInUser />
      </Router>
    );
  });

  it("Login berhasil", () => {
    cy.get("#email").type("tesppl@gmail.com");
    cy.get("#password").type("tesppl");
    cy.get("#btnSubmit").click();
  });

  it("Login gagal (email salah)", () => {
    cy.get("#email").type("lalala@gmail.com");
    cy.get("#password").type("tes");
    cy.get("#btnSubmit").click();
  });

  it("Login gagal (password salah)", () => {
    cy.get("#email").type("tes@gmail.com");
    cy.get("#password").type("lalala");
    cy.get("#btnSubmit").click();
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
