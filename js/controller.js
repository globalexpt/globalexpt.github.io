const controller = ($scope, $http) => {
    $scope.year = new Date().getFullYear();
    $scope.catalogue = [];

    $http
        .get('res/catalogue.json')
        .then(responseDataTx)
        .then((catalogue) => {
            $scope.catalogue = catalogue;
        });
}

const responseDataTx = (res) => res.data;

const app = angular.module('gei', []);
app.controller('gei-ctrl', controller, ['$scope', '$http']);