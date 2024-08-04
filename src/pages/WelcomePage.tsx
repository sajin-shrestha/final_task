// src/Welcome.tsx
import { Box, Button, Container, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseAuth } from '../helpers/AuthContext'

const WelcomePage: FC = () => {
  const { logout } = UseAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        p: 3,
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 2,
          }}
        >
          Welcome!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 4,
          }}
        >
          You have successfully logged in.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{
          fontWeight: 'bold',
          py: 1.5,
          px: 3,
          borderRadius: 2,
          background: 'linear-gradient(to right, #3f51b5, #2196f3)',
          '&:hover': {
            background: 'linear-gradient(to right, #303f9f, #1976d2)',
          },
        }}
      >
        Logout
      </Button>
    </Container>
  )
}

export default WelcomePage
