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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = UseAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username || !password) {
      setError('Username and Password cannot be empty')
      return
    }

    /* try-2 */
    try {
      // Sending credentials to the API
      // const response = await axios.post(
      //   'https://cors-anywhere.herokuapp.com/https://login.dataconstruct.com.np/login', // Using CORS proxy
      //   {
      //     username, // Sending credentials
      //     password,
      //   },
      //   {
      //     headers: { 'Content-Type': 'application/json' }, // Ensuring correct content type for JSON payload
      //   },
      // )
      const response = await axios.post(
        '/api/login', // Using CORS proxy
        {
          username, // Sending credentials
          password,
        },
        {
          headers: { 'Content-Type': 'application/json' }, // Ensuring correct content type for JSON payload
        },
      )

      // Check if the response message is 'Login successful'
      if (response.data.message === 'Login successful') {
        // Store the token if needed (e.g., in localStorage or context)
        localStorage.setItem('authToken', response.data.token)
        login() // Call login function from UseAuth
        navigate('/welcome') // Redirect to /welcome (welcome-page) on successful login
      } else {
        setError('Invalid credentials') // Display error if input-credentials are incorrect
      }
    } catch (err) {
      setError('Error occurred while logging in') // Display generic error message
    }

    /* try-1 */
    // try {
    //   const response = await axios.post(
    //     'https://login.dataconstruct.com.np/login',
    //     {
    //       username, // Sending credentials
    //       password,
    //     },
    //     {
    //       headers: { 'Content-Type': 'application/json' }, // Ensuring correct content type for JSON payload
    //     },
    //   )

    //   // Check if the response message is 'Login successful'
    //   if (response.data.message === 'Login successful') {
    //     // Store the token if needed (e.g., in localStorage or context)
    //     localStorage.setItem('authToken', response.data.token)
    //     login() // Call login function from UseAuth
    //     navigate('/welcome') // Redirect to /welcome (welcome-page) on successful login
    //   } else {
    //     setError('Invalid credentials') // Display error if input-credentials are incorrect
    //   }
    // } catch (err) {
    //   setError('Error occurred while logging in') // Display generic error message
    // }
  }

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
