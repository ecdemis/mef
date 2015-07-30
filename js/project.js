angular.module('project', [])
  .controller('projectController', function($scope) {

$scope.name = "ellie";
$scope.time = time('date');


var CONSTANTS = {};
CONSTANTS.dateFormat = 'MMMM Do YYYY';ss
CONSTANTS.timeFormat = 'h:mm:ss A';

function time(format){
  if(format === 'date'){
    format = CONSTANTS.dateFormat;
  }
  if(format === 'time'){
    format = CONSTANTS.timeFormat;
  }
  var time = moment().format(format); // this is today's date
  }


    // var todoList = this;
    // todoList.todos = [
    //   {text:'learn angular', done:true},
    //   {text:'build an angular app', done:false}];
 
    // todoList.addTodo = function() {
    //   todoList.todos.push({text:todoList.todoText, done:false});
    //   todoList.todoText = '';
    // };
 
    // todoList.remaining = function() {
    //   var count = 0;
    //   angular.forEach(todoList.todos, function(todo) {
    //     count += todo.done ? 0 : 1;
    //   });
    //   return count;
    // };
 
    // todoList.archive = function() {
    //   var oldTodos = todoList.todos;
    //   todoList.todos = [];
    //   angular.forEach(oldTodos, function(todo) {
    //     if (!todo.done) todoList.todos.push(todo);
    //   });
    // };







  });