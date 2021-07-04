import React from 'react'
import "./App.css"
import Header from './Header'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import TinderCard from './Cards'

function App() {
    return (
        <div className="app">
          <Router>
          <Header/>
          <Switch>
              <Route path="/chat">
                  <h2>chat page</h2>
              </Route>
              <Route path="/">
                <TinderCard/>
              </Route>
          </Switch>
          </Router>
    
        </div>
    )
}

export default App
