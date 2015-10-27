angular.module('Alunos', ['ionic', 'ngCordova', 'ngRoute'])
  .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          if (window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          }
          if (window.StatusBar) {
              StatusBar.styleDefault();
          }
      });
  })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/lista.html'
      })
      .when('/aluno/:_id', {
        templateUrl: 'views/aluno.html'
      })
      .when('/add', {
        templateUrl: 'views/add.html'
      })
      .when('/edit/:_id', {
        templateUrl: 'views/add.html'
      })
      .otherwise({redirectTo: '/'});
  }]);

