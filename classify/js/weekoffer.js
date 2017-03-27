app.controller('weekctrl', ["$http",'$scope','cartService', '$state', '$rootScope',function($http,$scope, cartService, $state, $rootScope){
	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A648%7D').success(function(data){

		var self = this;
		$scope.data = data.data.categories[0].goods;
		
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
	$scope.showDetail = function (){
		console.log(this.item);
		$state.go("detail", {id: JSON.stringify(this.item) })
	}
}])



