angular.module('abadon').controller('inicioController', inicioController);
inicioController.$inject = [
  '$scope',
  '$state',
  'host',
  'inicioService',
  '$sessionStorage'
];
function inicioController(
  $scope,
  $state,
  host,
  inicioService,
  $sessionStorage
) {
  // if (typeof $sessionStorage.usuario == 'undefined') {
  $scope.ingresar = () => {
    inicioService
      .ingresar($scope.usuario)
      .then(result => {
        $sessionStorage.usuario = result.data;
        toastr.success(result.data.message);
        if ($sessionStorage.usuario.id_rol == 1) {
          $state.go('instructor');
        } else if ($sessionStorage.usuario.id_rol == '2') {
          $state.go('aprendiz');
        }
      })
      .catch(err => {
        toastr.error(err.data.message);
      });
  };
  // } else {
  // $state.go('inicio');
  // }
}
