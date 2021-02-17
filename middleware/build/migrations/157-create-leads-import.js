'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leads_import', {


      
      
      
      
      
      
      
      
      
      "PROSPECCION": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "OFICIAL": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "MES": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      "CLIENTE": {
        type: 'Sequelize.STRING',
        length: 250
      },
      
      "LUGAR O RUBRO DE TRABAJO": {
        type: 'Sequelize.STRING',
        length: 50
      },
      
      "TELÉFONO": {
        type: 'Sequelize.STRING',
        length: 25
      },
      
      
      
      
      "FECHA": {
        type: 'Sequelize.DATE'
      },
      
      
      

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('leads_import');
  }
};
