import { FC, ReactElement } from 'react'
import UnauthorizedPage from '../pages/UnauthorizedPage' // Import the UnauthorizedPage component
import { UseAuth } from './AuthContext'

interface PrivateRouteProps {
  children: ReactElement
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = UseAuth()

  // Check if the user is logged in
  if (!isLoggedIn) {
    return <UnauthorizedPage /> // Redirect to UnauthorizedPage if not logged in
  }

  return children
}

export default PrivateRoute
