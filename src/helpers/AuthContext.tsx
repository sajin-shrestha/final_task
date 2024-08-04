import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

// Define the shape of the authentication context
interface AuthContextType {
  isLoggedIn: boolean // Indicates whether the user is logged in
  login: () => void // Function to log in the user
  logout: () => void // Function to log out the user
}

// Create a Context with an initial value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider component that provides authentication context to its children
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Effect to initialize login state based on token in localStorage
  useEffect(() => {
    // Retrieve the authentication token from localStorage
    const token = localStorage.getItem('authToken')
    // If token exists, set the user as logged in
    if (token) {
      setIsLoggedIn(true)
    }
  }, [])

  // Function to log in the user
  const login = () => {
    setIsLoggedIn(true)
    // Retrieve the authentication token (for logging in or other purposes)
    const token = localStorage.getItem('authToken')
    if (!token) {
      console.error('No token found for login')
    }
  }

  // Function to log out the user
  const logout = () => {
    setIsLoggedIn(false)
    // Remove the authentication token from localStorage
    localStorage.removeItem('authToken')
  }

  // Provide the authentication state and functions to child components
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook for accessing the authentication context
export const UseAuth = () => {
  // Get the context value
  const context = useContext(AuthContext)
  // Ensure the context is used within an AuthProvider
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
