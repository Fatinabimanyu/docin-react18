import LogInUser from "../../src/App";
import LogInForm from "../../src/components/LogInUser";

describe("Pengalihan ke Komponen", () => {
  it("Mengakses halaman yang mengarahkan", () => {
    cy.request("/login-user") // Ganti dengan URL halaman yang mengarahkan yang sesuai
      .then((response) => {
        expect(response.status).to.eq(200); // Verifikasi respons berhasil
        // Lanjutkan ke komponen yang diinginkan
        cy.get('[data-testid=""]').should("be.visible"); // Ganti dengan selector yang sesuai
        // Tambahkan langkah-langkah pengujian berikutnya di komponen yang diarahkan
      });
  });
});
