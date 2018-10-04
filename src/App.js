import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/layout/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
     <div className="App">
        <Nav/>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/work' component={Work}></Route>
        <Route exact path='/skills' component={Skills}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </div>
    </Router>

    );
  }
}

export default App;
