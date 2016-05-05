import m from 'mithril';

function TodoItem(data) {
  this.description = m.prop(data.description);
  this.done = m.prop(data.done || false);
}

export default TodoItem;
