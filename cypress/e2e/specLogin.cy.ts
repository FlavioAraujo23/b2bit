describe('Login and Logout Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login successfully with correct credentials', () => {
    cy.get('input[name=email]').type('cliente@youdrive.com');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/profile');
  });

  it('should show error on invalid credentials', () => {
    cy.get('input[name=email]').type('wronguser@youdrive.com');
    cy.get('input[name=password]').type('wrongpassword');
    cy.get('button[type=submit]').click();

    cy.get('.error-message').should('contain', 'Invalid credentials');
  });

  it('should logout successfully', () => {
    cy.get('input[name=email]').type('cliente@youdrive.com');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/profile');

    cy.get('button.logoutButton').click();

    cy.url().should('include', '/login');
  });
});