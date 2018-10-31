angular
  .module('abadon')
  .controller('instructorController', instructorController);
instructorController.$inject = [
  '$scope',
  '$state',
  'host',
  'instructorService',
  'Upload',
  '$sessionStorage',
  '$localStorage'
];
function instructorController(
  $scope,
  $state,
  host,
  instructorService,
  Upload,
  $sessionStorage,
  $localStorage
) {
  // if (typeof $sessionStorage.usuario !== 'undefined') {
  $scope.open = () => {
    $('#show1').modal('show');
  };
  $scope.download = () => {
    instructorService
      .download()
      .then(result => {})
      .catch(err => {
        console.log(err);
      });
  };

  $scope.addFicha = () => {
    Upload.upload({
      url: host + 'fichas',
      data: {
        formato: $scope.user.formato,
        numero_ficha: $scope.user.numero_ficha,
        descripcion: $scope.user.descripcion,
        nombre_ficha: $scope.user.nombre_ficha
      },
      headers: { 'Content-Type': 'application/json' }
    }).then(
      function(resp) {
        toastr.success(resp.data.message);
        instructorService
          .getFichas()
          .then(result => {
            console.log(result);
            $scope.array = result.data;
          })
          .catch(err => {
            console.log(err);
          });
        $('#show1').modal('hide');
        $('#form1')[0].reset();
      },
      function(resp) {
        toastr.error(resp.data.message);
        console.log(resp.data);
      }
    );
  };

  instructorService
    .getFichas()
    .then(result => {
      console.log(result);
      $scope.array = result.data;
    })
    .catch(err => {
      console.log(err);
    });
  $scope.usuarios = [];
  $scope.asisten = id => {
    instructorService
      .getAprendices(id)
      .then(result => {
        $scope.usuarios = result.data;
        console.log(result.data);

        $scope.random();
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(id);
    $('#show2').modal('show');
  };
  $scope.random = () => {
    bool = false;
    i = Math.floor(Math.random() * $scope.usuarios.length);
    if ($scope.usuarios[i] !== null) {
      $scope.usuario = $scope.usuarios[i];
      $scope.usuarios.splice(i, 1);
    } else if ($scope.usuarios.length == 0) {
      $('#show2').modal('hide');
      // $('#asistio').disabled = true;
    } else {
      $scope.random();
    }
  };

  $scope.asistio = (id, id_fich) => {
    $scope.asistencia = {
      id_usuario: id,
      id_ficha: parseInt(id_fich),
      asistio: true
    };
    instructorService
      .Regasistencia($scope.asistencia)
      .then(result => {
        $scope.codigo = result.data.codigo;
        toastr.success(result.data.codigo);
        setTimeout($scope.random(), 5000);
      })
      .catch(err => {
        console.log(err);
      });
  };
  $scope.noasistio = (id, id_fich) => {
    $scope.asistencia = {
      id_usuario: id,
      id_ficha: parseInt(id_fich),
      asistio: false
    };
    instructorService
      .Regasistencia($scope.asistencia)
      .then(result => {
        console.log(result);
        $scope.random();
      })
      .catch(err => {
        console.log(err);
      });
  };
  // } else {
  // $state.go('inicio');
  // }
  $scope.cerrar = () => {
    $sessionStorage.$reset();
    $state.go('inicio');
  };
  $scope.reportes = id => {
    instructorService
      .inasistencia(id)
      .then(result => {
        console.log(result.data);
        $localStorage.reportes = result.data;
        $state.go('reportes');
      })
      .catch(err => {
        console.log(err.data);
      });
  };
}
