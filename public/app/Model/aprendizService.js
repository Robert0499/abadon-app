angular.module('abadon').service('aprendizService', aprendizService);
aprendizService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function aprendizService($http, host, $httpParamSerializerJQLike) {
  this.confirmar = data => {
    return $http.put(host + 'confirmar', $httpParamSerializerJQLike(data));
  };
}
