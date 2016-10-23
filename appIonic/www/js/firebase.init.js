angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9LaLoxOy8DT4zxr94_fPd1kSvc0ibRRI",
    authDomain: "test-fb8e8.firebaseapp.com",
    databaseURL: "https://test-fb8e8.firebaseio.com",
    storageBucket: "test-fb8e8.appspot.com",
  };
 // firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/