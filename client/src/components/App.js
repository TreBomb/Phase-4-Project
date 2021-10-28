import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Login";
import SignUp from "./SignUp"
import Navbar from "./NavBar";
import Main from "./Main";
import Brand from "./Brand";
import ItemPage from "./ItemPage";




function App() {
    const [login, setLogin] = useState("");
    const [userInfo, setUserInfo] = useState({});
    
    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        console.log("user found")

        console.log(loggedInUser)

        fetch(`http://localhost:3000/user`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          setUserInfo({
            username: data.username,
            email: data.email,
            id: data.id
          })
        })
      }
    }, [])

    useEffect(() => {
    if (login !== "") {
      console.log(login)
      fetch(`http://localhost:3000/user`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setUserInfo({
          username: data.username,
          email: data.email,
          id: data.id
        })
        localStorage.setItem('user', [data.id])
      })
    }
    }, [login])

    return (
      <Router>
      <div>
        <Switch>
            <Route exact path="/">
              <Login setLogin={setLogin} />
            </Route>
            <Route  exact path="/signup">
              <SignUp setLogin={setLogin} />
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
