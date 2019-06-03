const controller = ($scope, $http) => {
    $scope.year = new Date().getFullYear();
    $scope.catalogue = [];
    $scope.about = [];

    $http
        .get('res/catalogue.json')
        .then(responseDataTx)
        .then((catalogue) => {
            $scope.catalogue = catalogue;
        });

    $http
        .get('res/aboutt.json')
        .then(responseDataTx)
        .then((about) => {
            $scope.about = about;
        });
}

const responseDataTx = (res) => res.data;

const app = angular.module('gei', []);
app.controller('gei-ctrl', controller, ['$scope', '$http']);