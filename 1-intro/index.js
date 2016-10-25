var name = 'Vinícius';
var gender = 'male';
var age = 25;

if (age < 25) {
  console.log('Menor');
} else {
  console.log('Maior ou igual');
}

switch (gender) {
  case 'male':
    console.log('Homem');
    break;

  case 'female':
    console.log('Mulher');
    break;

  default:
    console.log('None');
    break;
}

for (var i = 0; i < age; i++) {
  console.log(i);
}

var j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

var k = 0;
do {
  k++;
  console.log(k);
} while (k < 10);

var objeto = {
  propriedade: 'valor',

  funcao: function(param) {
    console.log(param);
  }
};