/* eslint-disable no-undef */
import React from "react";
import SignUpUser from "./SignUpUser";
import AddPasien from "./AddPasien";
import { render } from "@testing-library/react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import "tailwindcss/dist/tailwind.min.css";

describe("Daftar", () => {
  beforeEach("Signup test", () => {
    cy.mount(
      <Router>
        <SignUpUser />
      </Router>
    );
  });

  it("Berhasil menambahkan pengguna baru", () => {
    cy.get("#firstname").type("tes");
    cy.get("#lastname").type("ppl");
    cy.get("#email").type("tesppl@gmail.com");
    cy.get("#username").type("tesppl");
    cy.get("#alamat").type("tesalamat");
    cy.get("#password").type("tesppl");
    cy.get("#btnsubmit").click();
  });

  it("Gagal menambahkan pengguna baru (form tidak lengkap)", () => {
    // cy.get("#firstname").type("tes");
    // cy.get("#lastname").type("ppl");
    // cy.get("#email").type("tesppl@gmail.com");
    cy.get("#username").type("tesppl");
    cy.get("#alamat").type("tesalamat");
    cy.get("#password").type("tesppl");
    cy.get("#btnsubmit").click();
  });
});

// cy.mount(
//   <Router>
//     <AddPasien />
//   </Router>
// );
// cy.get("#NIK").type(121123);
// cy.get("#nama").type("tesppl");
// cy.get("#tempatlahir").type("sleman");
// cy.get("#tanggallahir").type("2023-06-09");
// cy.get("#alamat").type("tesalamat");
// cy.get("#nohp").type(821123);
// cy.get("#btnsubmit").click();
// // cy.request("http://localhost:5000/appointments/").as("janjian");
// // cy.get("@janjian").then((janjian) => {
// //   expect(janjian.status).to.eq(200);
// // });
