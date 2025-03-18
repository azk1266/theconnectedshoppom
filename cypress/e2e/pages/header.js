class Header {
  visit() {
    cy.visit('/');
  }
  getLogo() {
    cy.get('.Header__LogoLink')
      .should('be.visible')
      .and('have.attr', 'href', '/');
  }
  getLogoPrimary() {
    cy.get('.Header__LogoImage--primary')
      .should('exist')
      .and(
        'have.attr',
        'src',
        '//theconnectedshop.es/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137'
      )
      .and('have.attr', 'width', '250')
      .and('have.attr', 'height', '75px');
  }
  getLogoTransparent() {
    cy.get('.Header__LogoImage--transparent')
      .should('be.visible')
      .and(
        'have.attr',
        'src',
        '//theconnectedshop.es/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163'
      )
      .and('have.attr', 'width', '250')
      .and('have.attr', 'height', '75px');
  }
  checkHorizontalMiniMenu() {
    cy.get('.HorizontalList--spacingLoose.HorizontalList.hidden-pocket', {
      timeout: 10000,
    })
      .find('li a')
      .should('have.length', 3)
      .then((links) => {
        expect(links[0]).to.contain.text('Cuenta');
        expect(links[1]).to.contain.text('Buscar');
        expect(links[2]).to.contain.text('Carrito');
      });
  }
  checkClickableSearch() {
    cy.get('[href="/search"].Heading.Link--primary.Text--subdued.u-h8')
      .should('have.attr', 'href', '/search')
      .and('be.visible');
  }
  checkClickableAccount() {
    cy.get('[href="/account"].Heading.Link--primary.Text--subdued.u-h8')
      .should('have.attr', 'href', '/account')
      .and('be.visible');
  }
  checkClickableCart() {
    cy.get('[href="/cart"].Heading.u-h6')
      .should('have.attr', 'href', '/cart')
      .and('be.visible');
  }
}

export default Header;
