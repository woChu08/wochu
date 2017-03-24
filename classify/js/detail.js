app.controller('detailCtrl', function($scope, $rootScope,cartService, $stateParams, $anchorScroll) {
    $scope.id = JSON.parse($stateParams.id);
	$anchorScroll();
    console.log(JSON.parse($stateParams.id));
    var goods = cartService.getAllGoods();
	function init() {
    	for (var i = 0; i < goods.length; i++) {
    		if ($scope.id.name == goods[i].name) {
    			$scope.data = $scope.id.count = goods[i].count;
    			return;
    		}
   	 	}
    	$scope.data = $scope.id.count = 1;
    	return;
    }
    init();

	
	//点击加号事件
	$scope.addGoods = function () {
		console.log($scope.id);
		$scope.id.count++;
		$scope.data = $scope.id.count;
		
	}
	//点击减号事件
	$scope.delGoods = function () {
		if ($scope.id.count == 1) {
			$scope.id.count = 1;
		} else {
			$scope.id.count--;
			$scope.data = $scope.id.count;
		}
		console.log($scope.id);
		
	}
	
	$scope.addCart = function () {
		
		cartService.addDetailGood($scope.id);
		$rootScope.num = cartService.getGoodsLength();
	}
})