angular.module('abadon').service('inicioService', inicioService);
inicioService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function inicioService($http, host, $httpParamSerializerJQLike) {
  this.ingresar = data => {
    return $http.post(host + 'auth', $httpParamSerializerJQLike(data));
  };
}
