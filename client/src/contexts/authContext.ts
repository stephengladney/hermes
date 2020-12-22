import { createContext } from "react"

interface AuthContextProps {
  logOut: () => void
  token: string | null
}
export const authContext = createContext<AuthContextProps>({
  logOut: () => {},
  token: null,
})

export const AuthProvider = authContext.Provider
