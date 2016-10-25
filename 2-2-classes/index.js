var util = require('util');

function Pessoa(nome, idade) {
  // Construtor
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function(distancia) {
  console.log(this.name + ' andou ' + distancia + ' metros');
};

Pessoa.prototype.falar = function(mensagem) {
  console.log(this.name + ': ' + mensagem);
};

var joao = new Pessoa('João', 15);
var maria = new Pessoa('Maria', 18);

joao.andar(500);
maria.andar(30);

joao.falar('Oi, Maria!');
maria.falar('Olá, João!');

function Estudante(nome, idade, periodo) {
  Pessoa.call(this, nome, idade);
  this.periodo = periodo;

  this.passarDePeriodo = function() {
    this.periodo++;
  }

  this.dormir = function(horas) {
    console.log(this.nome + ' dormiu ' + horas + ' horas');
  }

  this.dormirCincoHoras = this.dormir.bind(this, 5);
}

util.inherits(Estudante, Pessoa);
// Estudante.prototype = Object.create(Pessoa.prototype)

var estudante = new Estudante('Pedro', 19, 5);
console.log(estudante instanceof Estudante);
console.log(estudante instanceof Pessoa);

estudante.dormirCincoHoras();