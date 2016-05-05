import m from 'mithril';
import Unloadable from '../../util/Unloadable';
import TodoItem from '../../model/TodoItem';
import _Footer from '../Footer/Footer';

class TodoApp extends Unloadable {
  constructor(props) {
    super();

    this.props = props;
    this.list = this.loadList();
    this.description = m.prop('');

    this.view = this.view.bind(this);
    this.onMount = this.onMount.bind(this);
    this.onUnload = this.onUnload.bind(this);

    this.add = this.add.bind(this);
    this.saveList = this.saveList.bind(this);
    this.loadList = this.loadList.bind(this);
  }

  add() {
    if (this.description()) {
      this.list.push(new TodoItem({ description: this.description() }));
      this.description('');
    }
  }

  loadList() {
    let list = [];

    if (typeof localStorage !== 'undefined') {
      const listFromStorage = JSON.parse(localStorage.getItem('todo')) || [];
      if (listFromStorage.length > 0) {
        list = listFromStorage.map((itemData) => new TodoItem(itemData));
      }
    }

    return list;
  }

  saveList() {
    if (typeof localStorage !== 'undefined') {
      if (this.list.length > 0) {
        console.log('save list of todos');
        window.localStorage.setItem('todo', JSON.stringify(this.list));
      }
    }
  }

  onMount(element, isInit) {
    if (!isInit) {
      console.log('onMount', element);
    }
  }

  onUnload() {
    console.log('onUnload');
    this.saveList();
  }

  view() {
    const Footer = new _Footer();

    return (
      <div className="TodoApp" config={this.onMount}>
        <h2 className="TodoApp__title">ToDo App</h2>

        <div className="TodoApp__form">
          <input
            className="TodoApp__input"
            onchange={m.withAttr('value', this.description)}
            value={this.description()}
          />
          <button className="TodoApp__add" onclick={this.add}>Add</button>
        </div>

        <table className="TodoApp__list">
          {this.list.map((task) => {
            return (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    onclick={m.withAttr('checked', task.done)}
                    checked={task.done()}
                  />
                </td>
                <td
                  style={{ textDecoration: task.done() ? 'line-through' : 'none' }}
                  className="TodoApp__list-item"
                >
                  {task.description()}
                </td>
              </tr>
            );
          })}
        </table>
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
