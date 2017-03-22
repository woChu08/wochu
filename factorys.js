app.factory('celcFactory', function () {
	return {
		lazyLoad : function () {
				//计算滚动中的底部的值
				var sn = window.innerHeight + document.body.scrollTop;
				console.log(sn);
				for (var i = 0; i < document.querySelectorAll("img").length; i++) {
					if (document.querySelectorAll("img")[i].offsetTop <= sn) {
						document.querySelectorAll("img")[i].src = document.querySelectorAll("img")[i].getAttribute("data-src");//把data-src的值赋给src
					}
				}
		}
	}
})