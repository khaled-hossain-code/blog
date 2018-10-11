import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise';

import reducers from "./reducers";

import PostIndex from "./containers/PostIndex";
import PostNew from "./containers/PostNew";
import PostDetails from "./containers/PostDetails";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route exact path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
