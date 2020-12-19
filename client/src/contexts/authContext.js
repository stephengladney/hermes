import { createContext } from "react"
export const authContext = createContext({
  logOut: () => {},
})

export const AuthProvider = authContext.Provider
