angular.module('MyAlert', [])
  .controller('AlertController', ['$scope', '$window', function($scope, $window) {
    $scope.greeting = 'Gros Boujoux!';
    $scope.doGreeting = function(greeting) {
      $window.alert(greeting);
    };
  }]);
