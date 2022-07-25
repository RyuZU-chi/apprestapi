'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = function(req, res) {
  response.ok('Aplikasi REST API berjalan')
}