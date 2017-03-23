app.factory('calcFactory', function (cartService) {
	return {
		calcPrice : function () {
			var money = 0;
			cartService.getAllGoods().forEach(function (item) {
				money = (parseFloat(money) + parseFloat(item.count) * parseFloat(item.price)).toFixed(2);
			});
			return money;
		}
	}
})