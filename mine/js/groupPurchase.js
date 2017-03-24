app.controller('groupPurchaseCtrl', ['$http', '$scope', function ($http, $scope) {

    $http.get('http://api5.wochu.cn/client/v1/goods/SearchAndCategoryByCategoryId?parameters=%7B%22orderId%22%3A0%2C%22categoryId%22%3A759%7D').success(function (data) {
        $scope.data = data.data.categories[0].goods;
        console.log(data.data.categories[0].goods);
    });

}]);
