import React from 'react';
import ReactDOM from 'react-dom';
import Commit from 'pages/Commit';

import registerServiceWorker from 'registerServiceWorker';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import './index.css';

const App = () => (
  <Router basename="/commit">
    <Route exact path="/" component={Commit} />
  </Router>
);

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
  registerServiceWorker();
}

export default App;
