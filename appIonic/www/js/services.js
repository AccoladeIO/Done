angular.module('app.services', [])

.factory('Auth', [function(){
        var config = {
            apiKey: "AIzaSyD9LaLoxOy8DT4zxr94_fPd1kSvc0ibRRI",
            authDomain: "test-fb8e8.firebaseapp.com",
            databaseURL: "https://test-fb8e8.firebaseio.com",
        };

        firebase.initializeApp(config);

        var rootRef = firebase.database().ref();

        return rootRef;
}])

.service('BlankService', [function(){

}]);
