import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../containers/Layout/Layout';
import FirstContainer from '../containers/FirstContainer/FirstContainer';
import FirstComponent from '../components/FirstComponent/FirstComponent';

const AppRouter = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={FirstContainer} />
        <Route path='/' component={FirstComponent} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default AppRouter;
