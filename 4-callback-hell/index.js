var fs = require('fs');
var dummyfile = __dirname + '/dummydir/1';

fs.writeFile(dummyfile, Date.now(), function(err) {
  if (err) throw err;

  console.log('Escreveu arquivo no ' + dummyfile);

  fs.readFile(dummyfile, 'utf-8', function(err, data) {
    if (err) throw err;

    console.log('Leu o arquivo: ' + data);

    fs.appendFile(dummyfile, '!!!!', function(err) {
      if (err) throw err;

      console.log('Adicionou dados ao fim do arquivo');

      fs.readFile(dummyfile, 'utf-8', function(err, data) {
        if (err) throw err;

        console.log('Leu o arquivo: ' + data);

        fs.unlink(dummyfile, function(err) {
          if (err) throw err;

          console.log('Removeu o arquivo ' + dummyfile);
        });
      })
    });
  });
});