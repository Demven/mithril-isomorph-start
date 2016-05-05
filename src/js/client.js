import m from 'mithril';
import routes, { DEFAULT_PATH } from './routes';

// You can try to mount your main component without using mithril router
// In such case comment all lines with configuring router
// m.mount(document.getElementById('content'), new TodoApp({ paramOne: 'ToDo', paramTwo: 'App' }));


// configure client router
m.route.mode = 'pathname';

// use the same routes as for express app
const mithrilRoutes = {};
routes.forEach(({ routePath, PageComponent }) => {
  mithrilRoutes[routePath] = new PageComponent();
});


m.route(document.getElementById('content'), DEFAULT_PATH, mithrilRoutes);
