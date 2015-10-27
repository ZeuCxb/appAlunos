angular.module('Alunos').controller('addAlunosCtrl', ['AlunosApi', '$location', '$routeParams', function(AlunosApi, $location, $routeParams) {
	var self = this;

	self.url = '#/'

	if($routeParams._id) {

		var _id = $routeParams._id;

		AlunosApi.mostrarAluno(_id).then(function(data) {
	        self.aluno = data;
	        console.log(data);
	    }, function(error) {
	        console.log(error);
	    });

	    self.url += 'aluno/' + _id;

	    self.edit = function() {
			AlunosApi.editAluno(self.aluno).then(function() {
		    	$location.path('/#');
		    }, function(error) {
		        console.log(error);
		    });
		};
	}

	self.add = function() {
		AlunosApi.addAluno(self.aluno).then(function() {
	    	$location.path('/#');
	    }, function(error) {
	        console.log(error);
	    });
	};

}]);