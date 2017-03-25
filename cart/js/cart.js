app.controller('cartCtrl', ['$scope', 'cartService', function($scope, cartService) {
	var total = document.querySelector('.total-price');
	var totalInput = document.querySelector('#total');
	
	$scope.data = cartService.getAllGoods();
	console.log($scope.data)

	$scope.sub = function() {
		if(totalInput.checked == true) {
			totalInput.nextSibling.removeAttribute('class');
			var libellis = document.querySelectorAll('.goods label');
			for( var n = 0; n < libellis.length; n++) {
				libellis[n].previousSibling.checked = false;
				libellis[n].removeAttribute('class');
				console.log(libellis[n].className)
			}
		} 
			
			var totalmo = 0;
		if(this.item.count == 1) {
			cartService.delGoods(this.item.goodsName);
			var Labels = document.querySelectorAll('.goods label');
			for(var i = 0; i < Labels.length; i++) {
				Labels[i].previousSibling.checked = false;
				Labels[i].removeAttribute('class');
			}
			total.innerHTML = '￥' + totalmo;
		}else{
			this.item.count--;
			totalmo = showMoney().toFixed(2);
			total.innerHTML = '￥' + totalmo;
		}
	};

	$scope.add = function() {
		if(totalInput.checked == true) {
			totalInput.nextSibling.removeAttribute('class');
			var libellis = document.querySelectorAll('.goods label');
			for( var n = 0; n < libellis.length; n++) {
				libellis[n].previousSibling.checked = false;
				libellis[n].removeAttribute('class');
			}
		} 
		this.item.count++;
		var totalmo = showMoney().toFixed(2);
		total.innerHTML = '￥' + totalmo;
	};
	
	
	changeClass = function(the) {
		console.log(totalInput.checked)
		if(totalInput.checked == true) {
			totalInput.checked = false;
			totalInput.nextSibling.removeAttribute('class');
			var libellis = document.querySelectorAll('.goods label');
			for( var n = 0; n < libellis.length; n++) {
				libellis[n].previousSibling.checked = false;
				libellis[n].removeAttribute('class');
			}
		} 
		if(the.getAttribute('class') == 'clickInput') {
			the.removeAttribute('class');
		} else {
			the.setAttribute('class', 'clickInput');
		}
		var totalMoney = 0;
		var tempMoney = showMoney();
		if(the.previousSibling.checked == false) {
			var thisMoney1 = 0;
			var id1 = the.previousSibling.id;
			thisMoney1 = cartService.getPrice(id1);
			totalMoney = (tempMoney + thisMoney1).toFixed(2);
			total.innerHTML = '￥' + totalMoney;
		} else {
			var thisMoney2 = 0;
			var id2 = the.previousSibling.id;
			thisMoney2 = cartService.getPrice(id2);
			totalMoney = (tempMoney - thisMoney2).toFixed(2);
			total.innerHTML = '￥' + totalMoney;
		}

	}
	
	
	//全选
	selectAll = function (the) {
		var labels = document.querySelectorAll('.goods label');
		console.log(labels)
		if(the.getAttribute('class') == 'clickAll') {
			the.removeAttribute('class');
			for( var i = 0; i < labels.length; i++ ){
				labels[i].removeAttribute('class');
			}
			total.innerHTML = '￥' + 0.00;
		} else {
			for( var j = 0; j < labels.length; j++ ){
				labels[j].setAttribute('class', 'clickInput');
			}
			the.setAttribute('class', 'clickAll');
			total.innerHTML = '￥' + (cartService.getAllPrice()).toFixed(2);
		}
	}
	
	
	//money
	showMoney = function () {
	    var money = 0;
	    var labels = document.querySelectorAll('.goods label');
	    //console.log(labels)
	    labels.forEach(function (item) {
	      var smoney = 0;
	      if (item.previousSibling.checked) {
	        var id = item.previousSibling.id;
	        smoney = cartService.getPrice(id);
	      }
	      money += smoney;
	    });
	
	    return money;
	 }

	var index = document.querySelector("#index");
	var shopping = document.querySelector("#shopping");
	var cart = document.querySelector("#cart");
	var mine = document.querySelector("#mine");
	index.src = "common/img/index_n.png";
	shopping.src = "common/img/foot_classify.png";
	cart.src = "common/img/foot_cart.png";
	mine.src = "common/img/foot_mine.png";
	cart.src = "common/img/cart_r.png";



//	送货日期Tab切换
	$scope.Currenttime = 'time3';
	$scope.CurrenttimeSub = 'time1Sub1';
	$scope.selectTime = function(time){
		$scope.Currenttime= time
		$scope.CurrenttimeSub = 'time1Sub1'
	}
	$scope.selectTimeSub = function(time){
		$scope.CurrenttimeSub = time;
	}

	$scope.today=new Date();
	$scope.tomorrow=new Date((new Date()/1000+86400)*1000);
	$scope.AfterTomorrow=new Date((new Date()/1000+86400*2)*1000);
	$scope.threeDays=new Date((new Date()/1000+86400*3)*1000);

	
}])