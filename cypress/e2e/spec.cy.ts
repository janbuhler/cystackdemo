describe('Automate full demo website',()=>{
    it('first sign in page automation',()=>{
    cy.visit('https://bstackdemo.com/')
    cy.wait(6000)
    cy.get('#signin').click()
    cy.get('.login_wrapper')
    
    //cy.get('hashtag#username').click()
    cy.get('#username > .css-yk16xz-control > .css-1hwfws3').type('fav_user')
    //cy.contains('fav_user').click()
    cy.get('#react-select-2-option-0-3').click();

    //cy.get('[class=" css-1wa3eu0-placeholder"]').click()
    cy.get('#password > .css-yk16xz-control > .css-1hwfws3').type('testingisfun99')
    cy.get('#react-select-3-option-0-0').contains('testingisfun99').click();
    
    })
   })