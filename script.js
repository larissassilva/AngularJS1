angular.module('ex2', []).
controller('AgendaCtrl', function($scope) {
  $scope.agenda=[
      { nome: "José de Abreu", fone: "98765432" },
      { nome: "Marcio Alves", fone: "99887766" },
      { nome: "Manoel Rodrigues", fone: "89897676" },
      { nome: "Miriam Souza", fone: "83234554" }
    ];
  $scope.adiciona = function() {
    var novo = { nome: $scope.nome, fone: $scope.fone };
    $scope.agenda.push(novo);
  };
  $scope.remove = function(ix) {
    $scope.agenda.splice(ix,1);
  };
  
});