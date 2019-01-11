import React, { Component } from 'react';
import Home from './container/Home'
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Detail from './container/Detail'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Detail}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
