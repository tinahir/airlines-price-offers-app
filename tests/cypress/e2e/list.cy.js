describe("List", () => {
  it("displays PriceOffers", () => {
    cy.visit("/PriceOffers");

    cy.get('[data-test="price-offers"]').within(() => {
      cy.get('[data-test="price-offer-origin"]');
      cy.get('[data-test="price-offer-destination"]');
      cy.get('[data-test="price-offer-price"]');
      cy.get('[data-test="price-offer-seat"]');
      cy.get('[data-test="price-offer-departuredate"]');
      cy.get('[data-test="price-offer-returndate"]');
    });
  });
});
