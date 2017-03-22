app.controller('weekctrl', ["$http",'$scope',function($http,$scope){
	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A648%7D').success(function(data){

		var self = this;
		$scope.data = data.data.categories[0].goods;
		console.log($scope.data);
	})
}])



