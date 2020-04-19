import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import FirstContainer from '../containers/FirstContainer/FirstContainer';
import FirstComponent from '../components/FirstComponent/FirstComponent';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Footer from '../components/Navigation/Footer/Footer';
import CategoryListPage from '../components/Category/CategoryListPage';
import SubcategoryListPage from '../components/Subcategory/SubcategoryListPage';
import ProductListPage from '../components/Product/ProductListPage';


const history = createBrowserHistory({
  basename: '',
  forceRefresh: false
});

const AppRouter = () => (
  <Router history={history}>
    <div className='page-container'>
      {/* <Toolbar /> */}
      <div className='content-wrap'>
        <Switch>
          <Route path='/' exact component={FirstContainer} />
          <Route path='/second' exact component={FirstComponent} />

          <Route path='/category' exact component={CategoryListPage} />
          <Route path='/subcategory' exact component={SubcategoryListPage} />
          <Route path='/product' exact component={ProductListPage} />

        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
