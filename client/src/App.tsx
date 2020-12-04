import React, { Fragment } from "react"
import { Login } from "./components/Login/Login"
import { Dashboard } from "./components/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useAsync, useCookie, useToggle } from "react-use"

function App() {
  const [token, updateCookie, deleteCookie] = useCookie("hermes_token")
  const [isLoggedIn, toggleIsLoggedIn] = useToggle(false)

  const { loading, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("DONE"), 2000)
    })
  }, [])

  return (
    <Router>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Fragment>
          {isLoggedIn && (
            <Switch>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          )}
          {!isLoggedIn && <Login />}
        </Fragment>
      )}
    </Router>
  )
}

export default App
