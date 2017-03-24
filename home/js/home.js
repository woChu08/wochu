app.controller('homeCtrl', ['$scope', '$rootScope', '$http', '$timeout', 'cartService', '$state', function($scope, $rootScope, $http, $timeout, cartService, $state) {

	$scope.showDetail = function() {
		console.log(this.item1);
		$state.go("detail", { id: JSON.stringify(this.item1) })
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
		$scope.lunboData = data.data.carousel;
		$scope.navData = data.data.recommendedContent;
	});

	//页面数据
	$http.get('data.json').success(function(data) {
		$scope.listData = data.data.acts;
	});

	//点击添加商品事件
	$scope.addGood = function() {
		console.log(this.item1);
		//保存商品数据
		cartService.addGoods(this.item1);
		console.log(cartService.getAllGoods());
		cartService.getGoodsLength();
		$rootScope.num = cartService.getGoodsLength();
	}
	
	
	//footer
	var index = document.querySelector("#index");
	var shopping = document.querySelector("#shopping");
	var cart = document.querySelector("#cart");
	var mine = document.querySelector("#mine");
	index.src = "common/img/index_n.png";
	shopping.src = "common/img/foot_classify.png";
	cart.src = "common/img/foot_cart.png";
	mine.src = "common/img/foot_mine.png";
	index.src = "common/img/foot_home.png";
}])