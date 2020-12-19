import React, { useEffect } from "react"
import { useAsync, useCookie, useToggle } from "react-use"
import { Loading } from "./components/Loading/Loading"
import { RouteHandler } from "./components/RouteHandler/RouteHandler"
import { AuthProvider } from "./contexts/authContext"

function App() {
  const [token, _, deleteCookie] = useCookie("hermes_token")
  const [isLoggedIn, toggleIsLoggedIn] = useToggle(true)
  const [isLoading, toggleIsLoading] = useToggle(true)

  const logOut = () => {
    deleteCookie()
    toggleIsLoggedIn(false)
  }

  useEffect(() => {
    setTimeout(() => {
      toggleIsLoading(false)
    }, 1000)
  }, [])

  return (
    <AuthProvider value={{ logOut }}>
      {isLoading ? <Loading /> : <RouteHandler isLoggedIn={isLoggedIn} />}
    </AuthProvider>
  )
}

export default App
