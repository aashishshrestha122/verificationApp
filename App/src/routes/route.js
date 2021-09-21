import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';

import Home from '../pages/home';
import Success from '../pages/success';


const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/success' component={Success} />
      </Switch>
    </Fragment>
  );
};


export default Routes;
