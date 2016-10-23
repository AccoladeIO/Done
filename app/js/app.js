var myApp = angular.module('myApp', [
    'ngRoute',
    'activityFeedControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/activity_feed', {
        templateUrl: 'partials/activity_feed.html',
        controller: 'TaskListController'
    }).
    when('/task_details/:itemId', {
        templateUrl: 'partials/task_details.html',
        controller: 'TaskDetailsController'
    }).
    when('/task_flow/:itemId', {
        templateUrl: 'partials/task_flow.html',
        controller: 'TaskFlowDetailsController'
    }).
    when('/task_flow_list', {
        templateUrl: 'partials/task_flow_list.html',
        controller: 'TaskFlowListController'
    }).
    when('/mediaLibrary/:itemId', {
        templateUrl: 'partials/mediaLibrary.html',
        controller: 'PowerUpImagesController'
    }).
    when('/photoCapture/:itemId', {
        templateUrl: 'partials/photoCapture.html',
        controller: 'PowerUpCameraController'
    }).
    otherwise({
        redirectTo: '/activity_feed'
    });
}]);