//配置路由

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	//配置默认锚点
	$urlRouterProvider.when('', 'home');
	$urlRouterProvider.when('/classify', 'classify/classifyone')
	
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
	.state('detail', {
		url : '/detail/:id',
		templateUrl : './classify/detail.html',
		controller : 'detailCtrl'
	})
	.state('detailone', {
		url : '/detailone/:id',
		templateUrl : './classify/detailone.html',
		controller : 'detailoneCtrl'
	})
	.state('cart', {
		url : '/cart',
		templateUrl : './cart/cart.html',
		controller : 'cartCtrl'
	})
	.state('mine', {
		url : '/mine',
		templateUrl : './mine/mine.html'
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
}])