describe('首页', () => {
	it('搜索展示', () => {
		cy.visit('http://localhost:7777/')
		cy.get('.search-input>input').eq(0).type('test')
		cy.get('.search-result').should('contain', 'test')
	})
})