angular.module("hellosystem").service("pessoaservice", function ($http){

  this.buscapessoas = () => $http.get("pessoas");

  this.salvapessoa = (ev) => $http.post("pessoas",ev);

});

angular.module("hellosystem").service("espacoservice", function ($http){

  this.buscaespacos = () => $http.get("espacos");

  this.salvaespaco = (ev) => $http.post("espacos",ev);

});