app.controller('homeCtrl', ['$scope', '$http', '$timeout', 'cartService', '$state', function($scope, $http, $timeout, cartService,$state) {
	
	$scope.showDetail = function (){
		console.log(this.item1);
		$state.go("detailone", {id: JSON.stringify(this.item1) })
	}
	
	//轮播
	$timeout(function() {
		var mySwiper = new Swiper('.swiper-container', {
			initialSlide: 4,
			direction: 'horizontal',
			loop: true,
			autoplay: 1000,
			speed: 3000,
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
	$http.get('http://api5.wochu.cn/client/v1/actsamend?parameters=%7B%22version%22%3A%2220.0.0%22%2C%22source%22%3A%22H%22%7D').success(function(data) {
		console.log(data.data.acts);
		$scope.listData = data.data.acts;
	});
	
	$scope.addGood = function () {
		console.log(this.item1);
		//使用services方法保存数据
		cartService.addGoods(this.item1);
	}
	
}])