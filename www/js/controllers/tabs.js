angular.module('cosmic.controllers').controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
   
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
   
});
