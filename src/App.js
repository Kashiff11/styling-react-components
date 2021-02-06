import './App.css';
import Inline from './Inline';
import {Link, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h2 className="intro">
        Below are links to the completed examples from Jake Trent's
        course on styling react components available on Pluralsight.com. 
      </h2>
      <div className="links">
        <Link to='/inline' className="link">Inline Styling</Link>
        <Link to='/css-in-js'className="link">CSS-in-JS</Link>
        <Link to='css-stylesheets' className="link">CSS Stylesheets</Link>
        <Link to='css-modules' className="link">CSS Modules</Link>
      </div>

      <Switch>
        <Route exact path='/inline'><Inline/></Route>
        <Route exact path='/css-in-js'><h1>css-in-js</h1></Route>
        <Route exact path='/css-stylesheets'><h1>css-stylesheets</h1></Route>
        <Route exact path='/css-modules'><h1>css-modules</h1></Route>
      </Switch>
    </div>
  );
}

export default App;
