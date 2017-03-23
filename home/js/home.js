app.controller('homeCtrl', ['$scope', '$http', '$timeout', 'cartService', '$state', function($scope, $http, $timeout, cartService,$state) {
	
	$scope.showDetail = function (){
		console.log(this.item1);
		$state.go("detail", {id: JSON.stringify(this.item1)})
	}
	
	//轮播
	$timeout(function() {
		var mySwiper = new Swiper('.swiper-container', {
			initialSlide: 4,
			direction: 'horizontal',
			autoplayDisableOnInteraction: false,
			loop: true,
			autoplay: 1000,
			speed: 2000,
			// 如果需要分页器
			pagination: '.swiper-pagination',
		})
	}, 1000);

	//轮播数据
	$http.get('http://api5.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22%3A%2210.0.0%22%2C%22source%22%3A%22H%22%7D').success(function(data) {
		console.log(data.data.recommendedContent);
		$scope.lunboData = data.data.carousel;
		$scope.navData = data.data.recommendedContent;
	});

	//页面数据
	$http.get('data.json').success(function(data) {
		console.log(data.data.acts);
		$scope.listData = data.data.acts;
		console.log(data)
	});
	
	//点击添加商品事件
	$scope.addGood = function () {
		console.log(this.item1);
		//保存商品数据
		cartService.addGoods(this.item1);
		console.log(cartService.getAllGoods());
	}
	
}])