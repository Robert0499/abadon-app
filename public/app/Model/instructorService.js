angular.module('abadon').service('instructorService', instructorService);
instructorService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];
function instructorService($http, host, $httpParamSerializerJQLike) {
  this.download = () => {
    window.location.href = host + 'formato';
  };
  this.getFichas = () => {
    return $http.get(host + 'fichas');
  };

  this.getAprendices = id => {
    return $http({
      method: 'GET',
      url: host + 'user?id=' + id
    });
  };
  this.Regasistencia = data => {
    return $http.post(host + 'asistencia', $httpParamSerializerJQLike(data));
  };

  this.inasistencia = id => {
    return $http({
      method: 'GET',
      url: host + 'inasistencia?id=' + id
    });
  };
}
