angular.module( 'lk.about', [
  'ui.router.state',
  'lk.components'
])


  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state( 'about', {
      url: '/about',
      views: {
        "main": {
          controller: 'AboutCtrl',
          templateUrl: 'about/about.tpl.html'
        }
      }
    });
  }])


  .controller( 'AboutCtrl', ['$scope', function ($scope) {
    $scope.title = 'Aboutasef Page';
  }]);
