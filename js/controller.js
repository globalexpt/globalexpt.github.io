const controller = ($scope) => {
    $scope.catalog = [
        {
            name: 'Jute Shopping Bags',
            products: [
                {
                    name: 'cool',
                    img: 'img/catalog/1Jute_Shopping_Bags/jsb1.jpg',
                    link: '',
                }
            ]
        }
    ]
}

const app = angular.module('gei', []);
app.controller('gei-ctrl', controller, ['$scope']);