app.controller('cartCtrl', ['$scope', 'cartService', 'calcFactory', function ($scope, cartService, calcFactory) {
	$scope.data = cartService.getAllGoods();
	console.log($scope.data);
	
	//点击加号
	$scope.addCount = function () {
		console.log(this.item.count);
		cartService.addGoods(this.item);
		$scope.allMoney = calcFactory.calcPrice();
	}
	//点击减号
	$scope.delCount = function () {
//		console.log(this.item);
//		if (this.item.count == 1) {
//			alert("商品数量已经最小");
//		} else {
//			this.item.count--;
//		}
		cartService.removeGoods(this.item);
		$scope.allMoney = calcFactory.calcPrice();
	}
	
	//从工厂中读取商品总价
	$scope.allMoney = calcFactory.calcPrice();
}])