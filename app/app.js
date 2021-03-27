const firstModule = angular.module('firstModule', [])

firstModule.controller('firstController', ($scope)=>{
    $scope.message = 'Hellooooooo from scope'
})