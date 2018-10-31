angular.module('abadon').controller('reportesController', reportesController);
reportesController.$inject = [
  '$scope',
  '$state',
  'host',
  '$sessionStorage',
  '$localStorage'
];
function reportesController(
  $scope,
  $state,
  host,
  $sessionStorage,
  $localStorage
) {
  // if (typeof $sessionStorage.usuario !== 'undefined') {
  $inas = $localStorage.reportes;
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ],
      datasets: [
        {
          label: '# de Aprendices',
          data: $inas,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
  // } else {
  // $state.go('inicio');
  // }
  $scope.cerrar = () => {
    $sessionStorage.$reset();
    $state.go('inicio');
  };
  $scope.inst = () => {
    $state.go('instructor');
  };
}
