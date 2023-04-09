import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '@Pages/Home';
import NewContact from '@Pages/NewContact';
import EditContact from '@Pages/EditContact';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}

export default routes;
