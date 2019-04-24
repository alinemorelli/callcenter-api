'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      {
        id: '86bf68c1-4214-44cf-84b9-42d0405f6f9e',
        phone: '11991910000'
      },
      {
        id: '636042b7-2f8c-46ca-b8cf-d2a5e2c8ded2',
        phone: '11991910001'
      },
      {
        id: '3fed3f02-f4c2-4eab-b234-bb0a0ef2e348',
        phone: '11991910002'
      }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
