//var server_address = '192.168.43.183';
var server_address = 'localhost';

angular.module('app.controllers', ['firebase'])

  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('startCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicSideMenuDelegate) {
     $scope.$on('$ionicView.enter', function(){
          $ionicSideMenuDelegate.canDragContent(false);
        });

}])
      
.controller('activityFeedCtrl', ['$scope', '$stateParams', '$ionicSideMenuDelegate', '$http', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicSideMenuDelegate, $http, $ionicLoading) {

    $scope.$on('$ionicView.enter', function(){
        $ionicSideMenuDelegate.canDragContent(true);
    });
    
    $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>',
        content: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });


    var task_cards = [];
    $http.get('http://' + server_address + '/done/api/tasks.php').then(function(res) {
        task_cards = res.data.results;
        $scope.task_cards = task_cards;
        $ionicLoading.hide();
    });

}])
   
.controller('taskFlowDetailCtrl', ['$scope', '$stateParams', '$http', '$filter', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $filter, $ionicLoading) {

    $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>',
        content: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });

    var task_flow_cards = [];
    $http.get('http://' + server_address + '/done/api/flow.php').then(function(res) {
        task_flow_cards = res.data.results;
        $scope.task_flow_cards = $filter('filter')(task_flow_cards, {taskflow_id: $stateParams.item_id.toString()}, true);
    });

    var task_cards = [];
    $http.get('http://' + server_address + '/done/api/tasks.php').then(function(res) {
        task_cards = res.data.results;
        $scope.status = 0;
        $scope.task_cards = $filter('filter')(task_cards, {taskflow_id: $stateParams.item_id.toString()}, true);
        $ionicLoading.hide();
    });

    $scope.item_id = $stateParams.item_id.toString();
    $scope.back = $stateParams.back_link.toString();
    
}])
   
.controller('taskFlowDetailConfigCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.up_link = $stateParams.back_link1.toString();
    $scope.item = $stateParams.item_id.toString();
    $scope.back = $stateParams.back_link2.toString();

}])
   
.controller('taskFlowMembersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.up_link = $stateParams.back_link1.toString();
    $scope.item = $stateParams.item_id.toString();
    $scope.back = $stateParams.back_link2.toString();

}])
   
.controller('taskFlowAddMemberCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.up_link = $stateParams.back_link1.toString();
    $scope.item = $stateParams.item_id.toString();
    $scope.back = $stateParams.back_link2.toString();
    
}])
   
.controller('userProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('otherUserProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.back = $stateParams.back_link.toString();
    
}])
   
.controller('userProfileDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.goBack = function () {
        window.history.back();
    };
    
}])
   
.controller('taskDetailCtrl', ['$scope', '$stateParams', '$http', '$filter', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $filter, $ionicLoading) {

    $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>',
        content: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });

    var task_cards = [];
    $http.get('http://' + server_address + '/done/api/tasks.php').then(function(res) {
        task_cards = res.data.results;
        $scope.task_cards = $filter('filter')(task_cards, {task_id: $stateParams.item_id.toString()}, true);
    });

    var task_powerup = [];
    $http.get('http://' + server_address + '/done/api/powerups.php').then(function(res) {
        task_powerup = res.data.results;
        $scope.task_powerup = $filter('filter')(task_powerup, {task_id: $stateParams.item_id.toString()}, true);
        $ionicLoading.hide();
    });
    
    

    if ($stateParams.back_link == 'taskFlowDetail') {
        $scope.back = $stateParams.back_link.toString();
        $scope.backparams = "({item_id:" + $stateParams.flow_id.toString() + ", back_link:'taskFlowDetail'})";
        $scope.flow = $stateParams.flow_id.toString()
    } else {
        $scope.back = $stateParams.back_link.toString();
    }


}])
   
.controller('taskFlowCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicLoading) {
    
    $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>',
        content: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });

    var task_flow_cards = [];
    $http.get('http://' + server_address + '/done/api/flow.php').then(function (res) {
        task_flow_cards = res.data.results;
        $scope.task_flow_cards = task_flow_cards;
        $ionicLoading.hide();
    });

}])
   
.controller('chatsCtrl', ['$scope', '$stateParams', '$http', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicLoading) {

    $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>',
        content: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });

    var chats = [];
    $http.get('http://' + server_address + '/done/api/chats.php').then(function (res) {
        chats = res.data.results;
        $scope.chats = chats;
        $ionicLoading.hide();
    });

}])
   
.controller('loginCtrl', ['Auth','$scope', '$stateParams', '$firebaseAuth', '$firebaseObject', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function (Auth, $scope, $stateParams, $firebaseAuth, $firebaseObject) {

    $scope.loginForm = {};

    $scope.login = function() {

        firebase.auth().signInWithEmailAndPassword($scope.loginForm.email, $scope.loginForm.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
        }
        
    };

}])
   
.controller('splash1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('splash3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('splash4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('splash5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('splash6Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('splash7Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('photoCaptureCtrl', ['$scope', '$stateParams', '$cordovaCamera', '$http', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaCamera, $http, $ionicLoading) {

        $scope.saveSuccess = false;
        var imagebase64 = "";

        $scope.takePicture = function () {

            $ionicLoading.show({
                template: '<ion-spinner icon="lines"></ion-spinner>',
                content: 'Loading...',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });

          var options = {
              quality: 70,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG,
              popoverOptions: CameraPopoverOptions,
              saveToPhotoAlbum: false
          };

      $cordovaCamera.getPicture(options).then(function (imageData) {

          $scope.pictureUrl = "data:image/jpeg;base64," + imageData;
          imagebase64 = imageData;
          $scope.capturedpicture();

          $ionicLoading.hide();
           }, function (err) {
                    // An error occured. Show a message to the user
          });
            $scope.saveSuccess = false;
        };

        $scope.capturedpicture = function(){
            if ($scope.pictureUrl == null) {
                return "ng-hide";
            } else {
                return "ng-show";
            }
        };

        $scope.savedpicture = function(){
            if ($scope.saveSuccess == false) {
                return "ng-hide";
            } else {
                return "ng-show";
            }
        };

        $scope.submitImage = function () {


            $ionicLoading.show({
                template: '<ion-spinner icon="lines"></ion-spinner>',
                content: 'Loading...',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });

            $http.post('http://' + server_address + '/done/api/addphoto.php', {param_foreign_id:1, param_foreign_id_type:'"task"', param_image_base64:imagebase64}).then(function(res) {
                $scope.response = res.data;
                $ionicLoading.hide();
                $scope.saveSuccess = true;
                $scope.pictureUrl = null;
                $scope.capturedpicture();
                $scope.savedpicture();
            });

        };

    $scope.up_link = $stateParams.back_link1.toString();
    $scope.item = $stateParams.item_id.toString();
    $scope.flow = $stateParams.flow_id.toString();
    $scope.back = $stateParams.back_link2.toString();

}])
   
.controller('mediaLibraryCtrl', ['$scope', '$stateParams','$http','$filter','$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http ,$filter ,$ionicLoading) {

    $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>',
        content: 'Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });

    var image_cards = [];
    $http.get('http://' + server_address + '/done/api/images.php').then(function(res) {

        var arr =[];
        for( var i in res.data.results ) {
            if (res.data.results.hasOwnProperty(i)){
                arr.push(res.data.results[i]);
            }
        }

        $scope.image_cards = arr;
        $ionicLoading.hide();
    });

    $scope.deleteImage = function (item_id, index) {

        $ionicLoading.show({
            template: '<ion-spinner icon="lines"></ion-spinner>',
            content: 'Loading...',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        $http.post('http://' + server_address + '/done/api/deletephoto.php', {image_id:item_id}).then(function(res) {
            $scope.response = res.data;

            $scope.image_cards.splice(index, 1);

            $ionicLoading.hide();
        });
    };

    $scope.up_link = $stateParams.back_link1.toString();
    $scope.item = $stateParams.item_id.toString();
    $scope.flow = $stateParams.flow_id.toString();
    $scope.back = $stateParams.back_link2.toString();
    
}])
   
.controller('TaskDetailRejectCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('destroyProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


function LoginCtrl(Auth, $state) {

    this.loginWithGoogle = function loginWithGoogle() {
        Auth.$authWithOAuthPopup('google')
            .then(function(authData) {
                $state.go('tab.dash');
            });
    };

}
LoginCtrl.$inject = ['Auth', '$state'];