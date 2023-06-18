/* eslint-disable no-undef */
import React from "react";
import LogInUser from "./LogInUser";
import AddPasien from "./AddPasien";
import { render } from "@testing-library/react";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import Root from "../index";
// import "tailwindcss/dist/tailwind.min.css";

describe("Tambah Pasien", () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        {/* <Root> */}
        <AddPasien />
        {/* </Root> */}
      </Router>
    );
    // cy.visit("http://localhost:3000/");
  });

  it("Berhasil menambahkan pasien", () => {
    cy.get("#NIK").type(12345678);
    cy.get("#nama").type("tesppl");
    cy.get("#tempatlahir").type("sleman");
    cy.get("#tanggallahir").type("2023-06-09");
    cy.get("#alamat").type("tesalamat");
    cy.get("#nohp").type(8211233);

    cy.get("#btnsubmit").click();
  });

  it("Gagal menambahkan pasien (telah terdapat pasien yang sama berdasarkan NIK di basis data)", () => {
    cy.get("#NIK").type(12345678);
    cy.get("#nama").type("tesppl");
    cy.get("#tempatlahir").type("sleman");
    cy.get("#tanggallahir").type("2023-06-09");
    cy.get("#alamat").type("tesalamat");
    cy.get("#nohp").type(8211233);

    cy.get("#btnsubmit").click();
  });

  it("Gagal menambahkan pasien (form tidak lengkap)", () => {
    // cy.get("#NIK").type(1122334455);
    // cy.get("#nama").type("tesppl");
    cy.get("#tempatlahir").type("sleman");
    cy.get("#tanggallahir").type("2023-06-09");
    cy.get("#alamat").type("tesalamat");
    cy.get("#nohp").type(8211233);

    cy.get("#btnsubmit").click();
  });
});
