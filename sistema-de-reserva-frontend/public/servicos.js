angular.module("hellosystem").service("pessoaservice", function ($http){

  this.buscapessoas = () => $http.get("pessoas");

  this.salvapessoa = (ev) => $http.post("pessoa",ev);

});

angular.module("hellosystem").service("espacoservice", function ($http){

  this.buscaespacos = () => $http.get("espacos");

  this.salvaespaco = (ev) => $http.post("espaco",ev);

});