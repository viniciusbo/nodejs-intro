var fs = require('fs');
var async = require('async');
var dummyfile = __dirname + '/dummydir/1';

async.waterfall([
  function writeFileAsync(callback) {
    fs.writeFile(dummyfile, Date.now(), callback);
  },
  function readFileAsync(callback) {
    fs.readFile(dummyfile, 'utf-8', callback);
  },
  function appendFileAsync(callback) {
    fs.appendFile(dummyfile, '!!!!!', callback);
  },
  function readFileAgainAsync(callback) {
    fs.readFile(dummyfile, 'utf-8', callback);
  },
  function unlinkFileAsync(callback) {
    fs.unlink(dummyfile, callback);
  }
], function(err, result) {
  if (err) throw err;

  console.log('Terminou');
  console.log(result);
});

// async.parallel();
// async.series();