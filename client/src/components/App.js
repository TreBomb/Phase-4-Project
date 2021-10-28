import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Login";
import SignUp from "./SignUp"
import Navbar from "./NavBar";
import Main from "./Main";
import Brand from "./Brand";
import ItemPage from "./ItemPage";




function App() {
    return (
      <Router>
      <div>
            
      
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route  exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/main">
            <Navbar/>
            <Main/>
          </Route>
          <Route exact path="/brand/:id">
            <Navbar/>
            <Brand/>
          </Route>
          <Route exact path="/product/:id">
            <Navbar/>
            <ItemPage/>
          </Route>
      </Switch>
  </div>
  </Router>
    )
}

export default App
