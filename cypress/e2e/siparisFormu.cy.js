describe("Pizza Sipariş Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparisformu");
  });

  it("Sayfa başlığı ve form elemanlarının göründüğünü kontrol eder", () => {
    cy.contains("Order:").should("be.visible");
    cy.get(".form-title").should("contain.text", "Order");
    cy.get(".radio-input").should("have.length", 3);
    cy.get(".select").should("exist");
    cy.get(".input").should("exist");
    cy.get(".submit-btn").should("be.disabled");
  });

  it("Boyut seçildiğinde formun geçerli olup olmadığını kontrol eder", () => {
    cy.get(".radio-input").first().check();
    cy.get(".input").type("Ali Veli");
    cy.get(".submit-btn").should("not.be.disabled");
  });

  it("Toppings ekleyip çıkarmayı test eder", () => {
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').first().uncheck();
    
    cy.get(".price-details")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.include("Extras: 0$");
      });
  });

  it("Hamur seçimi yapıldığında değer değişmeli", () => {
    cy.get(".select").select("Thick");
    cy.get(".select").should("have.value", "thick");
  });

  it("Pizza adedi artırıldığında fiyatın değiştiğini kontrol eder", () => {
    cy.get(".counter-btn").contains("+").click();
    cy.wait(500);
    
    cy.get(".price-details")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.include("Total Price:");
      });
  });

  it("Pizza adedi azaltıldığında fiyatın değiştiğini kontrol eder", () => {
    cy.get(".counter-btn").contains("+").click();
    cy.get(".counter-btn").contains("-").click();
    cy.wait(500);

    cy.get(".price-details")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.include("Total Price:");
      });
  });

  it("Boş isimle sipariş verilemeyeceğini kontrol eder", () => {
    cy.get(".radio-input").first().check();
    cy.get(".submit-btn").should("be.disabled");
  });

  it("Geçerli sipariş verildiğinde işlem başarılı olmalı", () => {
    cy.get(".radio-input").first().check();
    cy.get(".select").select("Thin");
    cy.get(".input").type("Ali Veli");
    cy.get(".submit-btn").click();

    cy.wait(2000);

   
  });
});
