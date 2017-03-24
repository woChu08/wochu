app.controller('SuggestionsCtrl', ['$scope', function ( $scope) {

    $scope.Currentmenu = 'menu1'; //默认选中
    $scope.CurrentmenuSub = 'menu1Sub1'
    $scope.selectMenu = function(menu){
        $scope.Currentmenu = menu;
        $scope.CurrentmenuSub = 'menu1Sub1'
    }

    $scope.selectMenuSub = function(menuSub){
        $scope.CurrentmenuSub = menuSub;
    }

}]);
