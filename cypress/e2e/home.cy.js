describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=I8mb5fAvjxFTdnhIuVO54H9H3OHo0qvk`,
      { fixture: "articles" }
    );
  });

  it("A user should see a list of articles on load", () => {
    cy.get(":nth-child(1) > h2").should(
      "have.text",
      "Here’s how abortion rights supporters won in conservative Kansas."
    );
    cy.get(":nth-child(2) > h2").should(
      "have.text",
      "Tracking the States Where Abortion Is Now Banned"
    );
  });

  it("a user should be able to sort the articles by date", () => {
    cy.get(":nth-child(1) > h2").should(
      "have.text",
      "Here’s how abortion rights supporters won in conservative Kansas."
    );
    cy.get(".home > select").select("earliest");
    cy.get(":nth-child(1) > h2").should(
      "have.text",
      "Tracking the States Where Abortion Is Now Banned"
    );
  });

	it("a user should be able to view a page with more details about an article", () => {
		cy.get(':nth-child(1) > .button-date-container > button > a')
		.click()
		cy.get('h2')
		.should('have.text', "Here’s how abortion rights supporters won in conservative Kansas.")
		cy.get('h1')
		.click()
		cy.get('.home > h1')
		.should('have.text', 'Stories Titles')
	})
});
