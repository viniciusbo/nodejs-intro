var Promise = new require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

var filepath = __dirname + '/dummydir/1';

fs.writeFileAsync(filepath, Date.now())
  .then(fs.readFileAsync.bind(null, filepath, 'utf-8'))
  .then(console.log)
  .then(fs.appendFileAsync.bind(null, filepath, '!!!!'))
  .then(fs.readFileAsync.bind(null, filepath, 'utf-8'))
  .then(console.log)
  .then(fs.unlinkAsync.bind(null, filepath))
  .catch(function(err) {
    console.log('Um erro ocorreu');
    console.error(err);
  });
