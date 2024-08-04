import { Button, Container, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const UnauthorizedPage: FC = () => {
  const navigate = useNavigate()

  const handleGoToLogin = () => {
    navigate('/')
  }

  return (
    <Container
      maxWidth="xs"
      sx={{ mt: 8, textAlign: 'center' }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        Unauthorized
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 3 }}
      >
        You do not have permission to access this page.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoToLogin}
        sx={{
          background: 'linear-gradient(to right, #3f51b5, #2196f3)',
          '&:hover': {
            background: 'linear-gradient(to right, #303f9f, #1976d2)',
          },
        }}
      >
        Go to Login
      </Button>
    </Container>
  )
}

export default UnauthorizedPage
