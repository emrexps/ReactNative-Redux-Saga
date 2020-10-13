/**
 * author Emre Eker 
 * year 2019
 * 
 */


import React,{Component}from 'react';
import {AppRegistry} from 'react-native';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import reducers from './src/reducers';
import { logger } from 'redux-logger';
import Router from './src/router';
import rootSaga from './src//sagas';
const sagaMiddleware = createSagaMiddleware();
export default class App extends Component{

 render(){
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware, logger),
      );
      
      sagaMiddleware.run(rootSaga);
   return(
       <Provider store={store}>
          <Router/>
      </Provider>
      
   );
 }
}

AppRegistry.registerComponent('App',()=>App);
