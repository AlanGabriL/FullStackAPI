const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-html', 'postgres', '102030', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
