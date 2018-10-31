(() => {
  angular.module('abadon').config(config);
  config.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'state'
  ];

  function config(
    $httpProvider,
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    state
  ) {
    $httpProvider.defaults.headers['Content-Type'] =
      'Access-Control-Allow-Origin: *';
    $httpProvider.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8;';
    $httpProvider.defaults.headers.put['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.delete = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    $urlRouterProvider.otherwise('/inicio');
    state($stateProvider, 'inicio');
    state($stateProvider, 'aprendiz');
    state($stateProvider, 'reportes');
    state($stateProvider, 'instructor');
  }
})();
