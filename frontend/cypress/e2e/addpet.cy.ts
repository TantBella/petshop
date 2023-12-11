// describe("AddPet-test", () => {
// it('can add a new pet to the petshop', () => {
//   const newPet = {
//     name: 'Mathea',
//     animal: 'Katt',
//     color: 'Brun',
//     age: 10,
//     price: 600
//   };
//   cy.request('http://localhost:5173/addpet', newPet);

//   cy.get('[data-test=petName]').type(newPet.name);
//   cy.get('[data-test=animal]').type(newPet.animal);
//   cy.get('[data-test=color]').type(newPet.color);
//   cy.get('[data-test=age]').type(newPet.age + "");
//   cy.get('[data-test=price]').type(newPet.price + "");
//   cy.get('[data-test=submit]').click();
//   cy.get('.pet-list-item')
//     // .should('have.length.greaterThan', 9)
//     .last()
//     .should('contain.text', newPet.name)
//     .and('contain.text', newPet.animal)
//     .and('contain.text', newPet.color)
//     .and('contain.text', newPet.age)
//     .and('contain.text', newPet.price);
// })
// });


describe("AddPet-test", () => {
it('can add a new pet to the petshop', () => {
cy.request('POST', 'http://localhost:5173/addpet', { name: 'Mathea', animal: 'katt', color: 'brun', age: 10, price: 123456789 }).then(
  (response) => {
    expect(response.body).to.have.property( 'name', 'Mathea' )
  })
})
});
