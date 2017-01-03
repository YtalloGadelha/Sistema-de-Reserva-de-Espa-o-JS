angular.module("hellosystem").controller("pessoacontroller", function(pessoaservice){

  this.novo = {};

  this.listar = () => eventoservice.buscapessoas().then( (ret) => {
    this.pessoas = ret.data;
  });

  // carregar a lista imediatamente após carregar o controlador
  this.listar();

  this.salvapessoa = () => {
    eventoservice.salvapessoa(this.novo).then( (ret) => {
      alert("Pessoa salva com id "+ret.data.id_pessoa);
      this.listar();
      this.novo = {};
    });
  };
});

// roteamento
angular.module("hellosystem").config(($routeProvider) => {

  $routeProvider.when("/pessoas", {
    controller:"pessoacontroller",
    templateUrl:"pessoas.html",
    controllerAs:"ctl"
  });

  $routeProvider.otherwise("/pessoas");

});