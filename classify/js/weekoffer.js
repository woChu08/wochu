app.controller('weekctrl', ["$http",'$scope','$state',function($http,$scope,$state){
	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A648%7D').success(function(data){

		var self = this;
		$scope.data = data.data.categories[0].goods;
		console.log($scope.data);
	})

	$scope.showDetail = function (){
		console.log(this.item);
		$state.go("detail", {id: JSON.stringify(this.item) })
	}
}])



