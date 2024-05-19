const username = 'david.lml.95@gmail.com'
const password = 'David.1234'

describe('Main page load', () => {
	it('Redirects to login page', () => {
		cy.visit('http://localhost:3000')
		cy.location('host')
			.should('have.string', Cypress.env('auth_url'))

		cy.get('input[id=username]')
			.type(username)
		cy.get('input[id=password]')
			.type(password)
		cy.get('button[type=submit][name=action]')
			.click()
			.then(() => {
				cy.location('host')
					.should('have.string', Cypress.env('base_url'))
			})
	})
})