import { FC, ReactElement } from 'react'
import UnauthorizedPage from '../pages/UnauthorizedPage' // Import the UnauthorizedPage component
import { UseAuth } from './AuthContext' // Import the custom hook for authentication context

// Define the props for the PrivateRoute component
interface PrivateRouteProps {
  children: ReactElement // The component or elements that should be conditionally rendered
}

// PrivateRoute component that conditionally renders children based on authentication state
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  // Use the custom hook to access the authentication context
  const { isLoggedIn } = UseAuth()

  // Check if the user is logged in
  if (!isLoggedIn) {
    // If the user is not logged in, render the UnauthorizedPage component
    return <UnauthorizedPage />
  }

  // If the user is logged in, render the children components
  return children
}

export default PrivateRoute
