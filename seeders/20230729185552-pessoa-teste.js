'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Pessoas', [{
      nome: 'John Doe',
      email: 'john@doe.com',
      senha: '123',
      status: 'A',
      tipo: 'A',
      createdAt: new Date ('2023-08-29'),
      updatedAt: new Date ('2023-08-29')

     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
