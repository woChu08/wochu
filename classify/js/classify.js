//classify
app.controller('classifyCtrl', ['$http', '$scope', function($http, $scope) {

	changeLi = function(clic) {
		var lis = document.querySelectorAll('li');
		for(var item of lis) {
			item.setAttribute('class', 'menunoClick');
		}
		clic.setAttribute('class', 'menuClick');
	}
	var index = document.querySelector("#index");
	var shopping = document.querySelector("#shopping");
	var cart = document.querySelector("#cart");
	var mine = document.querySelector("#mine");
	index.src = "common/img/index_n.png";
	shopping.src = "common/img/foot_classify.png";
	cart.src = "common/img/foot_cart.png";
	mine.src = "common/img/foot_mine.png";
	shopping.src = "common/img/shopping_r.png";
}]);

//推荐
app.controller('classifyoneCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('http://api5.wochu.cn/client/v1/goods/GetCategoryRecommendList').success(function(data) {
		$scope.data = data.data;
	});
}]);

//净菜
app.controller('classifytwoCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A648%7D').success(function(data) {
		$scope.data = data.data;
	})
}]);