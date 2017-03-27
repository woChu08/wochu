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
		//保存商品数据
		cartService.addGoods(this.item1);
		cartService.getGoodsLength();
		$rootScope.num = cartService.getGoodsLength();
	}
	
	$timeout(function () {
		$(function() {
			var offset = $("#end").offset();
			console.log(offset)
			$(".addcar").click(function(event) {
				var addcar = $(this);
				console.log($(this))
				var img = addcar.parent().parent().find('img').attr('src');
				var flyer = $('<img class="u-flyer" src="' + img + '">');
				console.log(flyer)
				flyer.fly({
					start: {
						left: event.clientX, //开始位置（必填）#fly元素会被设置成position: fixed 
						top: event.clientY //开始位置（必填） 
					},
					end: {
						left: offset.left + 10, //结束位置（必填） 
						top: offset.top + 10, //结束位置（必填） 
						width: 0, //结束时宽度 
						height: 0 //结束时高度 
					},
					onEnd: function() { //结束回调 
						$("#msg").show().animate({ width: '250px' }, 200).fadeOut(1000); //提示信息 
					}
				});
			});
		});
	}, 1000)
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