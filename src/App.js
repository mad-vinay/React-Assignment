import React, { Component } from 'react';
import Home from './container/Home'
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Detail from './container/Detail';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import reducer from './reducers';

class App extends Component { 
  render() {
    const store = 
    createStore(
      reducer, 
      applyMiddleware(thunk, logger)
    );
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/details" component={Detail}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
