angular.module('Alunos').factory('AlunosApi', ['$q', '$http', function($q, $http) {

	var listarAlunos = function() {

		var deferred = $q.defer();
		
		$http.get('https://api-alunos.herokuapp.com/alunos')
            .success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
	};

	var mostrarAluno = function(_id) {

		var deferred = $q.defer();

		$http.get('https://api-alunos.herokuapp.com/alunos/' + _id)
            .success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
	};

	var addAluno = function(aluno) {

		var deferred = $q.defer();

		$http.post('https://api-alunos.herokuapp.com/alunos/', aluno)
            .success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
	};

	var editAluno = function(aluno) {

		var deferred = $q.defer();

		$http.put('https://api-alunos.herokuapp.com/alunos/' + aluno._id, aluno)
            .success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
	};

	var deletarAluno = function(_id) {

		var deferred = $q.defer();

		$http.delete('https://api-alunos.herokuapp.com/alunos/' + _id)
            .success(deferred.resolve)
            .error(deferred.reject);

        return deferred.promise;
	};

	return {
		listarAlunos: listarAlunos,
		mostrarAluno: mostrarAluno,
		addAluno: addAluno,
		deletarAluno: deletarAluno,
		editAluno: editAluno
	};
}]);