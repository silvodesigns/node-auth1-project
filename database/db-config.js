const knex = require('knex');
const knexfile = require('../knexfile.js');

const db = knex(config.development);
module.exports = db;