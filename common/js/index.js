app.controller('indexCtrl', ['$rootScope', 'cartService', function ($rootScope, cartService) {
	$rootScope.num = cartService.getGoodsLength();
	console.log(cartService.getGoodsLength());
}])