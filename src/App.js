import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} /> {/* the / on the path means the root.  exact is a bolean true or false 
      property and if nothing was written it will be true
       which means the path must be exactly / in order to render*/}
       <Route  path='/Shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
