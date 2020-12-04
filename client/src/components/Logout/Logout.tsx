interface LogoutProps {
  deleteCookie: () => void
  toggleIsLoggedIn: (nextValue: any) => void
}

export function Logout({ deleteCookie, toggleIsLoggedIn }: LogoutProps) {
  deleteCookie()
  toggleIsLoggedIn(false)
  return null
}
