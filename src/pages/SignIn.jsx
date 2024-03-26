import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Вот здесь исправленный импорт
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import Header from '../components/Header/Header'
import { auth, signInWithEmailAndPassword } from './../config/config'
import CheckIcon from '@mui/icons-material/Check'
import Alert from '@mui/material/Alert'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import theme from '../../theme'

export default function SignIn() {
  const navigate = useNavigate()
  const { setLoggedIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        console.log(credentials)
        setSuccessMsg('Успешная авторизация')
        setLoggedIn(true)
        setTimeout(() => {
          setEmail('')
          setPassword('')
          setErrorMsg('')
          setSuccessMsg('')
          navigate('/')
        }, 2000)
      })
      .catch((error) => setErrorMsg(error.message))
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(./signin.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Авторизация
            </Typography>
            {successMsg && (
              <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                {successMsg}
              </Alert>
            )}
            {errorMsg && (
              <Alert
                severity="warning"
                onClose={() => {
                  setErrorMsg('')
                }}
              >
                {errorMsg}
              </Alert>
            )}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Войти
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {'Нету аккаунта? Зарегистрируйтесь'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
