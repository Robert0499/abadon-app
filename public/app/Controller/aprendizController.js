angular.module('abadon').controller('aprendizController', aprendizController);
aprendizController.$inject = [
  '$scope',
  '$state',
  'host',
  'aprendizService',
  '$sessionStorage'
];
function aprendizController(
  $scope,
  $state,
  host,
  aprendizService,
  $sessionStorage
) {
  // if (typeof $sessionStorage.usuario !== 'undefined') {
  $scope.confirmar = () => {
    $scope.aprendiz.id = $sessionStorage.usuario.datos.id;
    console.log($scope.aprendiz);
    aprendizService
      .confirmar($scope.aprendiz)
      .then(result => {
        toastr.success(result.data.message);
      })
      .catch(err => {
        toastr.error(err.data.message);
      });
  };
  $scope.open = () => {
    $('#show1').modal('show');
  };
  // } else {
  // $state.go('inicio');
  // }
  $scope.cerrar = () => {
    $sessionStorage.$reset();
    $state.go('inicio');
  };
}
