
.factory('tasks', function($http){
  var tasks = [];

  var _loading = $http.get('http://localhost/done/api/tasks.php').then(function(res){
    tasks = res.data.results;
  });

  return {
   loading: _loading,
      all: function() {
        return tasks;
      },
      remove: function(tasks) {
        tasks.splice(tasks.indexOf(task), 1);
      },
      get: function(chatId) {
            return tasks[Id];
      }
    };

});
