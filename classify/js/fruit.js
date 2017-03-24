app.controller('fruitCtrl', ['$http', '$scope', '$rootScope',function($http, $scope, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		console.log(data.data.categories);
	});
	
	changeLi = function(clic) {
		var lis = document.querySelectorAll('li');
		for(var item of lis) {
			item.setAttribute('class', 'menunoClick');
		}
		clic.setAttribute('class', 'menuClick');
	}
	
	
}]);
app.controller('oneCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[0];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('twoCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[1];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('threeCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[2];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('fourCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[3];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('fiveCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[4];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('sixCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[5];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('sevenCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[6];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('eightCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope){

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[7];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('nineCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[8];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('tenCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[9];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);
app.controller('elevenCtrl', ['$http', '$scope', 'cartService', '$rootScope',function($http, $scope, cartService, $rootScope) {

	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A726%7D').success(function (data) {
		$scope.data = data.data.categories[10];
		console.log($scope.data)
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
		$rootScope.num = cartService.getGoodsLength();
	}
}]);