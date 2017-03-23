// 服务
app.service('cartService', function () {
    // 定义数组，用于保存所有购物车数据
    var arr = [];

    // 添加商品的方法
    this.addGoods = function (obj) {
    	if (arr.length == 0) {
    		obj.count = 1;
  			arr.push(obj);
    	} else {
    		var l = arr.length;
    		for (var i = 0; i < l; i++) {
  				if (arr[i].goodsName == obj.goodsName) {
  					arr[i].count++;
  					return;
  				}
    		}
    		obj.count = 1;
    		arr.push(obj);
    	}
    }
	
    // 获取所有商品的方法
    this.getAllGoods = function () {
        return arr;
    };
    
    
    //删除商品的方法
    this.delGoods = function (value) {
    	for (var i = 0; i < arr.length; i ++) {
    		if (arr[i].goodsName == value) {
    			arr.splice(i, 1);
    			return;
    		}
    	}
    };
    
    //获取价格
    this.getPrice = function (id) {
    	for (var i = 0; i < arr.length; i ++) {
    		if (arr[i].goodsName == id) {
    			return arr[i].price * arr[i].count;
    		}
    	}
    };
    
    //获取所有价格
    this.getAllPrice = function () {
    	var money = 0;
    	for (var i = 0; i < arr.length; i++) {
    		var tempMoney = arr[i].price;
    		var count = arr[i].count;
    		money += tempMoney * count;
    	}
    	return money;
    }
    
    
    
    
    
});