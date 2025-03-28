class Header {
  constructor() {
    this.headerLogo = '.Header__LogoLink';
    this.logoPrimary = '.Header__LogoImage--primary';
    this.logoTransparent = '.Header__LogoImage--transparent';
    this.logoPrimaryUrl =
      '//theconnectedshop.es/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137';
    this.logoTransparentUrl =
      '//theconnectedshop.es/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163';
    this.miniMenu =
      '.HorizontalList--spacingLoose.HorizontalList.hidden-pocket';
    this.search = '[href="/search"].Heading.Link--primary.Text--subdued.u-h8';
    this.account = '[href="/account"].Heading.Link--primary.Text--subdued.u-h8';
    this.cart = '[href="/cart"].Heading.u-h6';
  }

  getLogo() {
    cy.get(this.headerLogo).should('be.visible').and('have.attr', 'href', '/');
  }
  getLogoPrimary() {
    cy.getLogoPrimaryOrTransparent(
      this.logoPrimary,
      this.logoPrimaryUrl,
      '250',
      '75px'
    );
  }
  getLogoTransparent() {
    cy.cy.getLogoPrimaryOrTransparent(
      this.logoTransparent,
      this.logoTransparentUrl,
      '250',
      '75px'
    );
  }
  checkHorizontalMiniMenu() {
    cy.get(this.miniMenu, {
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
    cy.get(this.search)
      .should('have.attr', 'href', '/search')
      .and('be.visible');
  }
  checkClickableAccount() {
    cy.get(this.account)
      .should('have.attr', 'href', '/account')
      .and('be.visible');
  }
  checkClickableCart() {
    cy.get(this.cart).should('have.attr', 'href', '/cart').and('be.visible');
  }
}

export default Header;
