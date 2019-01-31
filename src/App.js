import React, { Component } from 'react';
import Home from './container/Home'
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Detail from './container/Detail'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import { ReducerList } from './reducers/ReducerIndex';
import logger from 'redux-logger';
import Header from '../src/component/Header'
import Footer from '../src/component/Footer'
import CartItems from './container/CartItems';
import OrderDetails from './container/OrderDetails';

const store = createStore(ReducerList,applyMiddleware(logger));

class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <div className="App">
          <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/details" component={Detail}/>
              <Route path="/cartItem" component={CartItems}/>
              <Route path="/orderDetails" component={OrderDetails}></Route>
            </Switch>
          <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
