import React from 'react';
import ReactDOM from 'react-dom';
import Messenger from './pages/Messenger';
import Home from './pages/Home';
import Footer from './sections/Footer';
import Header from './sections/Header';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

const App = () => (
    <Router basename="/">
      <div>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/messenger" component={Messenger} />
        </div>
        <Footer />
      </div>
    </Router>
);

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
  registerServiceWorker();
}

export default App;
