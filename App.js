import NavMenu from './NavMenu/NavMenu';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router >
    <NavMenu/>
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/about">
    <About/>
    </Route>
      <Route path="/skills">
    <Skills/>
    </Route>
       {/* <Route path="/work">
    <Work/>
    </Route> */}
       <Route path="/contact">
    <Contact/>
    </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
