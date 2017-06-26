import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import DayTask from "./routes/DayTask.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/dayTask" component={DayTask} />
    </Router>
  );
}

export default RouterConfig;
