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
import WelcomePage from './pages/WelcomePage'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <WelcomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
