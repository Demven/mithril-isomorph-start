import HelloWorld from './components/HelloWorld/HelloWorld';
import TodoApp from './components/TodoApp/TodoApp';

export const DEFAULT_PATH = '/';

export default [
  {
    routePath: '/',
    PageComponent: HelloWorld,
  },
  {
    routePath: '/todo',
    PageComponent: TodoApp,
  },
];
