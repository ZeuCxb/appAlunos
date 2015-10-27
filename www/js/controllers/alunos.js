angular.module('Alunos').controller('alunosCtrl', ['AlunosApi', '$location', function(AlunosApi, $location) {
	var self = this;

	AlunosApi.listarAlunos().then(function(data) {
        self.alunos = data;
        console.log(data);
    }, function(error) {
        console.log(error);
    });

    self.redirect = function(id) {
    	$location.path('/aluno/' + id);
    };
}]);