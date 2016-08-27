'use strict';

const Sequelize = require('sequelize');
const db = require('./db');

let Todo = db.define('Todo', {
  title: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
});

module.exports = Todo;
