app.controller('detailCtrl', function($scope, $stateParams) {
    $scope.id = JSON.parse($stateParams.id);

    console.log(JSON.parse($stateParams.id));


})