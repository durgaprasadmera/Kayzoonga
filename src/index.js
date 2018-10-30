import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
// import Full from './containers/Full/'
// import Full from '../../containers/Full'

import kayzoonga from './views/kayzoonga/kayzoonga'
import { Provider } from "react-redux";
import  store  from './store';
import { bindActionCreators } from 'redux';
ReactDOM.render(

    <Provider store={store}>
      <HashRouter>
          <Switch>
            <Route exact path="/" name="kayzoonga" component={kayzoonga} />
          </Switch>
       
        
        }
       
      </HashRouter>
    </Provider>
    
    , document.getElementById('root'));
