function funcao(param1, param2) {
  console.log(param1, param2);
  console.log(this);
}
// funcao('oi');
// var x = 10;

var novafuncao = function novafuncao(param1, param2) {
  // console.log(x);
  console.log(param1, param2);
  // console.log(arguments);
  // console.log(this);
};

// novafuncao('oi');
// novafuncao(funcao, 'oi');

// BIND e CALL

var funcbind = novafuncao.bind(null, 'oi');
funcbind();

novafuncao.call(null, 'oi');

var meuarray = [1, 2, 3, 4, 5];
var arraymaisdois = meuarray.map(function(num) {
  return num + 2;
});

var arraymaiscinco = meuarray.map(function(num) {
  return num + 5;
});

var somaqtd = function(qtd) {
  return function(num) {
    return num + qtd;
  }
};

// Highorder func
function highorder(data) {
  return function(item) {

  }
}