app.controller("dayctrl", ["cartService","$rootScope","$http","$scope",function(cartService,$rootScope,$http,$scope){
	$scope.dayreturntop = function(){
		cartService.returntop()
	}
	
	//购物车
	$scope.addGood = function () {
//      console.log(this.item);
        // 使用service的方法保存数据
        cartService.addGoods(this.item);
        $rootScope.num = cartService.getGoodsLength();
    };
	
	$http.get("http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A691%7D").success(function(data){
				$scope.data = data.data.categories[0].goods;
//				console.log($scope.data)
			})
	
	$http.get("http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A722%7D").success(function(data1){
				$scope.data1 = data1.data.categories[0].goods;
//				console.log($scope.data1)
		})
	
}])
