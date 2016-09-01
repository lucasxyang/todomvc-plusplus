'use strict';

const Vue = require('vue');
const appView = require('./views/todos');
const router = require('./util/routes');

// Create main Vue app
let app = new Vue(appView);

//var visitor = ua('UA-83226147-1');
//visitor.pageview("/").send();

// Configure router
router(app);
