app.controller('detailCtrl', function($scope, $stateParams, $anchorScroll) {
    $scope.id = JSON.parse($stateParams.id);
	$anchorScroll();
    console.log(JSON.parse($stateParams.id));


})