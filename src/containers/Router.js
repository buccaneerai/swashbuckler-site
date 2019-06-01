import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Navbar from './Navbar';
import HomeScreen from './HomeScreen';

const Router = function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={HomeScreen} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
