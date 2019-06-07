const controller = ($scope, $http) => {
    $scope.year = new Date().getFullYear();
    $scope.title = '';
    $scope.catalogue = [];
    $scope.order = {
        submitted: false,
        submitting: false,
        values: {}
    };

    $scope.toId = (val) => val ? val.toLowerCase().replace(/[^a-z0-9]/i, '-') : val;

    $http
        .get('res/config.json')
        .then(responseDataTx)
        .then((config) => {
            Object
                .keys(config)
                .forEach(key => $scope[key] = config[key]);
        });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxi539wEWK4EbeA3RZICwDO7KM0cZF9JoorbfiPOBuby6-afVE/exec';
    $scope.submitOrder = () => {
        $scope.order.submitting = true;

        const form = document.forms['orderForm'];
        const formData = new FormData(form);
        $http
            .post(scriptURL, formData, { headers: { 'Content-Type': undefined } })
            .then(response => {
                $scope.order.submitted = true;
                console.log('Success!', response);
            })
            .catch(error => {
                alert("Please try again. Your order was not sumbitted due to some technical issue.");
                console.error('Error!', error.message)
            })
            .finally(() => $scope.order.submitting = false);
    }

    $scope.newOrder = () => {
        $scope.order.values = {};
        $scope.order.submitted = false;
    }
}

const responseDataTx = (res) => res.data;

const app = angular.module('gei', []);
app.controller('gei-ctrl', controller, ['$scope', '$http']);
app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);