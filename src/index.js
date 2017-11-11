import React from 'react';
import ReactDOM from 'react-dom';
import Messenger from './pages/Messenger';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

const App = () => (
  <Router basename="/">
    <Route exact path="/" component={Messenger} />
  </Router>
);

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
  registerServiceWorker();
}

export default App;
