//配置路由

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	//配置默认锚点
	$urlRouterProvider.when('', 'home');
	$urlRouterProvider.when('/classify', 'classify/classifyone');
	$urlRouterProvider.when('/fruit', 'fruit/one');
	//配置路由
	$stateProvider
	.state('home', {
		url : '/home',
		templateUrl : './home/home.html',
		controller : 'homeCtrl'
	})
	.state('classify', {
		url : '/classify',
		templateUrl : './classify/classify.html',
		controller : 'classifyCtrl'
	})
	.state('weekoffer', {
		url : '/weekoffer',
		templateUrl : './classify/weekoffer.html',
		controller:'weekctrl'
	})
	.state('fruit', {
		url : '/fruit',
		templateUrl : './classify/fruit.html',
	})
	.state('detail', {
		url : '/detail/:id',
		templateUrl : './classify/detail.html',
		controller : 'detailCtrl'
	})
	.state('cart', {
		url : '/cart',
		templateUrl : './cart/cart.html',
		controller : 'cartCtrl'
	})
	.state('mine', {
		url : '/mine',
		templateUrl : './mine/mine.html',
		controller : 'mineCtrl'
	})
	.state('Suggestions', {
		url : '/Suggestions',
		templateUrl : './mine/Suggestions.html',
		controller:"SuggestionsCtrl"
	})
	.state('helpCenter', {
		url : '/helpCenter',
		templateUrl : './mine/helpCenter.html'
	})
	.state('groupPurchase', {
		url : '/groupPurchase',
		templateUrl : './mine/groupPurchase.html',
		controller:"groupPurchaseCtrl"
	})
	.state('receivingAddress', {
		url : '/receivingAddress',
		templateUrl : './mine/receivingAddress.html',
	})

	//二级路由
	.state('classify.classifyone', {
		url : '/classifyone',
		templateUrl : './classify/classifyone.html',
		controller : 'classifyoneCtrl'
	})
	.state('classify.classifytwo', {
		url : '/classifytwo',
		templateUrl : './classify/classifytwo.html',
		controller : 'classifytwoCtrl'
	})
	//水果二级
	.state('fruit.one', {
		url : '/one',
		templateUrl : './classify/one.html',
		controller : 'oneCtrl'
	})
	.state('fruit.two', {
		url : '/two',
		templateUrl : './classify/two.html',
		controller : 'twoCtrl'
	})
	.state('fruit.three', {
		url : '/three',
		templateUrl : './classify/three.html',
		controller : 'threeCtrl'
	})
	.state('fruit.four', {
		url : '/four',
		templateUrl : './classify/four.html',
		controller : 'fourCtrl'
	})
	.state('fruit.five', {
		url : '/five',
		templateUrl : './classify/five.html',
		controller : 'fiveCtrl'
	})
	.state('fruit.six', {
		url : '/six',
		templateUrl : './classify/six.html',
		controller : 'sixCtrl'
	})
	.state('fruit.seven', {
		url : '/seven',
		templateUrl : './classify/seven.html',
		controller : 'sevenCtrl'
	})
	.state('fruit.eight', {
		url : '/eight',
		templateUrl : './classify/eight.html',
		controller : 'eightCtrl'
	})
	.state('fruit.nine', {
		url : '/nine',
		templateUrl : './classify/nine.html',
		controller : 'nineCtrl'
	})
	.state('fruit.ten', {
		url : '/ten',
		templateUrl : './classify/ten.html',
		controller : 'tenCtrl'
	})
	.state('fruit.eleven', {
		url : '/eleven',
		templateUrl : './classify/eleven.html',
		controller : 'elevenCtrl'
	})
}])