import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { UseAuth } from './AuthContext'

interface PrivateRouteProps {
  children: ReactElement
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = UseAuth()

  return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute
