angular.module("hellosystem").controller("pessoacontroller", function(pessoaservice){

  this.nova_pessoa = {};

  this.listar = () => pessoaservice.buscapessoas().then( (ret) => {
    this.pessoas = ret.data;
  });

  // carregar a lista imediatamente após carregar o controlador
  this.listar();

  this.salvapessoa = () => {
    pessoaservice.salvapessoa(this.nova_pessoa).then( (ret) => {
      alert("Pessoa salva com id "+ret.data.id_pessoa);
      this.listar();
      this.nova_pessoa = {};
    });
  };
});

angular.module("hellosystem").controller("espacocontroller", function(espacoservice){

  this.novo_espaco = {};

  this.listar = () => espacoservice.buscaespaco().then( (ret) => {
    this.espacos = ret.data;
  });

  // carregar a lista imediatamente após carregar o controlador
  this.listar();

  this.salvapessoa = () => {
    espacoservice.salvaespacos(this.novo_espaco).then( (ret) => {
      alert("Espaço salvo com id "+ret.data.id_espaco);
      this.listar();
      this.novo_espaco = {};
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

   $routeProvider.when("/espacos", {
    controller:"espacocontroller",
    templateUrl:"espacos.html",
    controllerAs:"ctl"
  });

  $routeProvider.otherwise("/pessoas");

});