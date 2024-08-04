import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseAuth } from '../helpers/AuthContext'

const LoginPage: FC = () => {
  // State for managing input values and errors
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  // Hook for navigation
  const navigate = useNavigate()
  // Destructure login function from AuthContext
  const { login } = UseAuth()

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation for empty fields
    if (!username || !password) {
      setError('Username and Password cannot be empty')
      return
    }

    try {
      // Make POST request to the proxy API endpoint
      const response = await axios.post(
        '/api/login', // Proxy API endpoint (/api -> https://login.dataconstruct.com.np)
        {
          username, // Credentials to be sent
          password,
        },
        {
          headers: { 'Content-Type': 'application/json' }, // Ensure JSON payload
        },
      )

      // Check if login was successful
      if (response.status === 200) {
        // Store the token and update authentication state
        localStorage.setItem('authToken', response.data.token)
        login() // Update auth context
        navigate('/welcome') // Redirect to welcome page
      } else {
        setError('Invalid credentials') // Handle invalid credentials
      }
    } catch (err) {
      setError('Error occurred while logging in') // Handle errors
    }
  }

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Container
      maxWidth="xs"
      sx={{ mt: 8 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 3,
          p: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #3f51b5, #2196f3)',
              '&:hover': {
                background: 'linear-gradient(to right, #303f9f, #1976d2)',
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default LoginPage
