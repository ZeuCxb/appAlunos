angular.module('Alunos').controller('alunoCtrl', ['AlunosApi', '$routeParams', '$location', function(AlunosApi, $routeParams, $location) {
	var self = this;

    var _id = $routeParams._id;

	AlunosApi.mostrarAluno(_id).then(function(data) {
        self.aluno = data;
        console.log(data);
    }, function(error) {
        console.log(error);
    });

    self.removeAluno = function() {
        AlunosApi.deletarAluno(_id).then(function() {
        $location.path('/#');
    }, function(error) {
        console.log(error);
    });
    };

}]);