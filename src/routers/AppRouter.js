import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FirstContainer from '../containers/FirstContainer/FirstContainer';
import FirstComponent from '../components/FirstComponent/FirstComponent';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Footer from '../components/Navigation/Footer/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div className='page-container'>
      <Toolbar />
      <div className='content-wrap'>
        <Switch>
          <Route path='/' exact component={FirstContainer} />
          <Route path='/second' exact component={FirstComponent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
