// src/Welcome.tsx
import { Button, Container, Typography } from '@mui/material'
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
    <Container>
      <Typography variant="h4">Welcome!</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  )
}

export default WelcomePage
