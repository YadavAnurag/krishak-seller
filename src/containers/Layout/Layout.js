import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Navigation/Footer/Footer';


const Layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main>
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
