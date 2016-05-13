# mithril-isomorph-start

This is a complete production-ready isomorphic web-application for quick start with Mithril.js.
It consist of two simple pages: HelloWorld and ToDo app.

If you're looking for something more easy to start with - try this simple app https://github.com/Demven/mithril-es6-start

<img src="https://hsto.org/files/862/67c/a0d/86267ca0d43d4356aec0b4f4ffcbcc82.png"/>

Use this application as a boilerplate for your own isomorphic mithril SPA application with ES6 and a lot of awesome features.

Features:
* Node.js (Express) on server-side
* ES6 (using Babel) for client and server code
* Compiling MSX syntax
* All client scripts and styles are concatenated to bundles
* Revisions for bundles (styles and scripts)
* Stylus as CSS-preprocessor
* GZIP compression for styles and scripts
* Eslint and EditorConfig for code style
* UI-components are shared between server 
* Routes are configured for client and server
* Gulp tasks for fonts and images
* Watch tasks for gulp for development

<h2>Install</h2>

At first - <a href="https://nodejs.org/en/download/">download and install Node.js</a> if you need. It contains own package-manager - NPM.
Then run npm to install all necessary dependencies

```shell
npm install
```

<h2>Run build</h2>

```shell
gulp
```
If you want to watch changes in your files and automatically rebuild app - then use this:
```shell
gulp dev
```

<h2>Start Express server</h2>

```shell
npm start
```

Then open localhost:4000 and check it.


<h2>Why do you need to use isomorphic approach?</h2>

* Better Search Engine Optimization (SEO)
* Better performance
* Better maintainability

<img src="http://www.clixlogix.com/wp-content/uploads/2015/04/isomorphic-MVC-Airbnb-535x521.png"/>
