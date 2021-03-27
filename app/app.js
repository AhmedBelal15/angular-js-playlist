const firstModule = angular.module('firstModule', [])

firstModule.controller('firstController', ['$scope', ($scope)=>{
    $scope.message = 'Hellooooooo from scope'
    $scope.favAnimeCharacters=[
        {
            name: 'Luffy',
            gender: 'male',
            superpower: 'Devil Fruit',
            power: 100
        },
        {
            name: 'Killua',
            gender: 'male',
            superpower: 'Nen',
            power: 80
        },
        {
            name: 'Mikasa',
            gender: 'female',
            superpower: 'Ackerman Superpower',
            power: 2000
        }
    ]
}]

)