var activityFeedControllers = angular.module('activityFeedControllers', []);


activityFeedControllers.controller('TaskListController', ['$scope', '$http', function($scope, $http) {
var task_cards = [];
    $http.get('http://localhost/done/api/tasks.php').then(function(res) {
            task_cards = res.data.results;
            $scope.task_cards = task_cards;
            $scope.taskOrder = 'tuple_created_datetime';
            $scope.status = 0;
        });

    $scope.$back = function() {
        window.history.back();
    };
}]);

activityFeedControllers.controller('TaskDetailsController', ['$scope', '$http','$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {
    var task_cards = [];
    $http.get('http://localhost/done/api/tasks.php').then(function(res) {
        task_cards = res.data.results;
        $scope.task_cards = $filter('filter')(task_cards, {task_id: $routeParams.itemId},true);
    });

    var task_powerup = [];
    $http.get('http://localhost/done/api/powerups.php').then(function(res) {
        task_powerup = res.data.results;
        $scope.task_powerup = $filter('filter')(task_powerup, {task_id: $routeParams.itemId},true);
    });
    
    $scope.$back = function() {
        window.history.back();
    };
}]);


activityFeedControllers.controller('PowerUpImagesController', ['$scope', '$http','$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {

    var image_cards = [];
    $http.get('http://localhost/done/api/images.php').then(function(res) {
        image_cards = res.data.results;
        $scope.image_cards = image_cards;
    });

    $scope.$back = function() {
        window.history.back();
    };
}]);

activityFeedControllers.controller('PowerUpCameraController', ['$scope', '$http','$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {
    
    $scope.$back = function() {
        window.history.back();
    };
    
}]);


activityFeedControllers.controller('TaskFlowDetailsController', ['$scope', '$http','$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {
    var task_cards = [];
    $http.get('http://localhost/done/api/tasks.php').then(function(res) {
        task_cards = res.data.results;
        $scope.task_cards = $filter('filter')(task_cards, {taskflow_id: $routeParams.itemId},true);
        $scope.status = 0;
        $scope.taskOrder = 'tuple_created_datetime';
    });

    var task_flow_cards = [];
    $http.get('http://localhost/done/api/flow.php').then(function(res) {
        task_flow_cards = res.data.results;
        $scope.task_flow_cards = $filter('filter')(task_flow_cards, {taskflow_id: $routeParams.itemId},true);
    });
    
    $scope.$back = function() {
        window.history.back();
    };
}]);

activityFeedControllers.controller('TaskFlowListController', ['$scope', '$http', function($scope, $http) {
    var task_flow_cards = [];
    $http.get('http://localhost/done/api/flow.php').then(function(res) {
        task_flow_cards = res.data.results;
        $scope.task_cards = task_flow_cards;
        $scope.taskOrder = 'tuple_created_datetime';
    });
    
    $scope.$back = function() {
        window.history.back();
    };
}]);
