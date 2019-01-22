import React, { Component } from 'react';
import Home from './container/Home'
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Detail from './container/Detail'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import { ReducerList } from './reducers/ReducerIndex';
import logger from 'redux-logger';

const store = createStore(ReducerList,applyMiddleware(logger));

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
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
