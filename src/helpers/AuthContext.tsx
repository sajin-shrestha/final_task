import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

// Define the shape of the context
interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

// Create a Context with undefined initial value
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check localStorage or any other storage to initialize login state
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  // Login function
  const login = () => {
    setIsLoggedIn(true)
    // Store token if needed
    const token = localStorage.getItem('authToken')
    if (!token) {
      console.error('No token found for login')
    }
  }

  // Logout function
  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('authToken') // Remove token on logout
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook for using AuthContext
export const UseAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
