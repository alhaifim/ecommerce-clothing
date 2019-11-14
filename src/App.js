import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} /> {/* the / on the path means the root.  exact is a bolean true or false 
      property and if nothing was written it will be true
       which means the path must be exactly / in order to render*/}
       <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
