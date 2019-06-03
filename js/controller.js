const controller = ($scope, $http) => {
    $scope.year = new Date().getFullYear();
    $scope.title = '';
    $scope.catalogue = [];

    $http
        .get('res/config.json')
        .then(responseDataTx)
        .then((config) => {
            Object
                .keys(config)
                .forEach(key => $scope[key] = config[key]);
        });
}

const responseDataTx = (res) => res.data;

const app = angular.module('gei', []);
app.controller('gei-ctrl', controller, ['$scope', '$http']);