import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import render from 'mithril-node-render';

import routes from './routes';
import authenticate from './middleware/auth';
import indexHtmlTemplater from './services/templates';

const mithrilRenderPlaceholder = '<!-- mithril-server-render-placeholder -->';

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

// render mithril app on server
routes.forEach(({ routePath, PageComponent }) => {
  app.get(routePath, authenticate('mithril', 'mithril'), (req, res) => {
    res.end(indexHtmlTemplater(mithrilRenderPlaceholder, render(new PageComponent())));
  });
});

// Just return html file without server rendering
// import TodoApp from './components/TodoApp/TodoApp';
// In such case just comment the lines with configuring express routes
// app.get('/', authenticate('mithril', 'mithril'), (req, res) => {
//    res.sendFile(path.join(__dirname, '../../build/html', 'index.html'));
// });

app.listen(app.get('port'));

console.info('Server started on localhost: 4000');
