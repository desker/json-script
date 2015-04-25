var fs = require('fs');
var jsons = module.exports = require('./lib/json-script');

fs.readFile('./test/script.js', function(err, data) {
  if (err) throw err;
  var json = data.toString();
  jsons.js2json(json);
});
