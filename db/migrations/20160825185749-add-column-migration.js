'use strict';


// first part is timestamp, important to computers to exe. migration files in order
// second and third part is just for human readibility


// run sequelize db:migrate 
// or npm migrate

module.exports = {
    // add funcs to ADD to DB
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      queryInterface.addColumn(
          'Todos',
          'status',
          {
              type: Sequelize.BOOLEAN,
              defaultValue: false,
              allowNull: true
          });
  },

    // roll it back
  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
//    queryInterface.removeColumn({
//        tableName: 'Todos',
//        schema: 'public' // this is indeed public, the db name
//    }, 'signature');
      queryInterface.removeColumn('Todos', 'status');
  }
};
