Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Study JavaScript',
    isCompleted: true
  },
  {
    id: 2,
    title: 'Study more JavaScript',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Study even more Javascript',
    isCompleted: false
  }
]