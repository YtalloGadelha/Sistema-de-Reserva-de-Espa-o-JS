angular.module("hellosystem").service("pessoaservice", function ($http){

  this.buscapessoas = () => $http.get("pessoas");

  this.salvapessoa = (ev) => $http.post("pessoas",ev);

});