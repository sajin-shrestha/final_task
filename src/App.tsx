import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import { AuthProvider } from './helpers/AuthContext'
import PrivateRoute from './helpers/PrivateRoute'
import './index.css'
import LoginPage from './pages/LoginPage'
import UnauthorizedPage from './pages/UnauthorizedPage'
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Redirect root path to the login page */}
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
          {/* Route for the login page */}
          <Route
            path="/login"
            element={<LoginPage />}
          />
          {/* Protected route for the welcome page */}
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <WelcomePage />
              </PrivateRoute>
            }
          />
          {/* Route for unauthorized access page */}
          <Route
            path="/unauthorized"
            element={<UnauthorizedPage />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
