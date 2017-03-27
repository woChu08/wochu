app.controller('weekctrl', ["$http",'$scope','cartService', '$state', '$rootScope','$timeout',function($http,$scope, cartService, $state, $rootScope,$timeout){
	$http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A648%7D').success(function(data){

		var self = this;
		$scope.data = data.data.categories[0].goods;
		
	});
	$scope.addGood = function () {
		cartService.addGoods(this.item);
		console.log(cartService.getAllGoods()) ;
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
	$scope.showDetail = function (){
		console.log(this.item);
		$state.go("detail", {id: JSON.stringify(this.item) })
	}
}])



