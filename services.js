app.service('cartService', function () {
	//定义数组，储存购物车数据
	var cartArr = [];
	
	//添加商品方法
	this.addGoods = function (obj) {
		
		var flag = false;
		cartArr.forEach(function (item) {
			if (item.goodsName == obj.goodsName) {
				item.count++;
				flag = true;
			}
		});
		if (flag === false) {
			obj.count = 1;
			cartArr.push(obj);
		}
		console.log(cartArr);
	}
	//获取商品方法
	this.getAllGoods = function () {
		return cartArr;
	}
	//移除商品方法
	this.removeGoods = function (obj) {
		cartArr.forEach(function (item) {
			if (item.goodsName == obj.goodsName) {
				if (obj.count == 1) {
					alert("商品数量已经最小");
				} else {
					obj.count--;
				}
			}
		});
	}
})