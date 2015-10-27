<script type="text/ng-template" id="/todo.html">
  <h1>{{todo.title}}</h1>
  Completed: {{todo.completed}} <br>
  Notes:
  <textarea>{{todo.notes}}</textarea>
  <br>
  <button ng-click="save()">save</button>
  <a href="#/todos">back</a>
</script>