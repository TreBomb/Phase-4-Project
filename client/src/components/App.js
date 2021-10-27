import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Login";
import SignUp from "./SignUp"
import Navbar from "./NavBar";
import Main from "./Main";




function App() {
    return (
      <Router>
      <div>
            
      
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/main">
            <Navbar/>
            <Main/>
          </Route>
      </Switch>
  </div>
  </Router>
    )
}

export default App
