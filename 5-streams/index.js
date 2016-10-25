var fs = require('fs');
var dummyfile = __dirname + '/../4-callback-hell/dummydir/1';

// fs.createReadStream(dummyfile).pipe(process.stdout);

// process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  console.log(data);
});