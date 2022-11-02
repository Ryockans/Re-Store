import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./components/app";
import store from "./store";
import ServiceContext from "./components/service-context";
import BookstoreService from "./services/bookstore-service";
import ErrorBoundary from "./components/error-boundary";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ServiceContext.Provider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </ServiceContext.Provider>
    </ErrorBoundary>
  </Provider>
);

