//controller pessoas
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

//controller espaços
angular.module("hellosystem").controller("espacocontroller", function(espacoservice){

  this.novo_espaco = {};

  this.listar = () => espacoservice.buscaespacos().then( (ret) => {
    this.espacos = ret.data;
  });

  // carregar a lista imediatamente após carregar o controlador
  this.listar();

  this.salvaespaco = () => {
    espacoservice.salvaespaco(this.novo_espaco).then( (ret) => {
      alert("Espaço salvo com id "+ret.data.id_espaco);
      this.listar();
      this.novo_espaco = {};
    });
  };
});

//controller reservas
angular.module("hellosystem").controller("reservacontroller", function(reservaservice){

  this.nova_reserva = {};

  this.listar = () => reservaservice.buscareservas().then( (ret) => {
      this.reservas = ret.data;
  });

  this.listar();

  this.salvareserva = () => {
      reservaservice.salvareserva(this.nova_reserva).then( (ret) => {
      alert("Reserva salva com id " + ret.data.id_reserva);
      this.listar();
      this.nova_reserva = {};
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

   $routeProvider.when("/reservas", {
    controller:"reservacontroller",
    templateUrl:"reservas.html",
    controllerAs:"ctl"
   });

  $routeProvider.otherwise("/pessoas");

});