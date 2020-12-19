import React, { useContext } from "react"
import { Dashboard } from "../Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { authContext } from "../../contexts/authContext"

export function RouteHandler() {
  const auth = useContext(authContext)
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}
