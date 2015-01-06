angular.module( 'lkScaffold', [
  'templates-app',
  'templates-common',
  'lk.about',
  'ui.router.state',
  'ui.route'
])


  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise( '/about' );
  }])


  .run( function run () {
  })


  .controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
  }]);
