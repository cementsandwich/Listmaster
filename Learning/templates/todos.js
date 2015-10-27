
<script type="text/ng-template" id="/todos.html">
  <ul>
    <input type="text" placeholder="Something to do..." ng-model="newTodo">
    <button ng-click="save()">Add</button>
    <br><br>
    <li ng-repeat="todo in todos">
      <input type="checkbox" ng-model="todo.completed" ng-change="update($index)">

      <a ng-show="!isEditing[$index]" href="#/todo/{{todo._id}}">{{todo.title}}</a>
      <button ng-show="!isEditing[$index]" ng-click="isEditing[$index] = true">edit</button>
      <button ng-show="!isEditing[$index]" ng-click="remove($index)">remove</button>

      <input ng-show="isEditing[$index]" type="text" ng-model="todo.title">
      <button ng-show="isEditing[$index]" ng-click="update($index)">update</button>
      <button ng-show="isEditing[$index]" ng-click="isEditing[$index] = false">cancel</button>
    </li>
  </ul>
</script>