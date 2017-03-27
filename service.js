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
    
    //获取数组长度
    this.getGoodsLength = function () {
    	return arr.length;
    }
    //详情添加商品方法
    this.addDetailGood = function (obj) {
    	var l = arr.length;
    		for (var i = 0; i < l; i++) {
  				if (arr[i].goodsName == obj.goodsName) {
  					arr[i].count = obj.count;
  					return;
  				}
    		}
    	arr.push(obj);
    }

    
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
    
    //回到顶部
    this.returntop = function(){
			
			var timer = null;
			
			cancelAnimationFrame(timer);
			
			timer = requestAnimationFrame(function fn(){
				var oTop = document.body.scrollTop || document.documentElement.scrollTop;
				if(oTop > 0){
					document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
					timer = requestAnimationFrame(fn);
				}else{
					cancelAnimationFrame(timer);
				} 
			})
		};
    
    
    
});
