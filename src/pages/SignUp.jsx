import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ThemeProvider } from '@mui/material/styles'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { auth, createUserWithEmailAndPassword, fs } from './../config/config'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import CheckIcon from '@mui/icons-material/Check'
import theme from '../../theme'

export default function SignUp() {
  const navigate = useNavigate()

  const [fullName, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        console.log(credentials)
        createCollection()
          .then(() => {
            setSuccessMsg(
              'Успешная регистрация. Вас автоматически перенесет на страницу авторизации'
            )
            setTimeout(() => {
              setFullname('')
              setEmail('')
              setPassword('')
              setErrorMsg('')
              setSuccessMsg('')
              navigate('/signin')
            }, 3000)
          })
          .catch((error) => setErrorMsg(error.message))
      })
      .catch((error) => {
        setErrorMsg(error.message)
      })
  }

  const createCollection = async () => {
    try {
      const docRef = await addDoc(collection(fs, 'users'), {
        FullName: fullName,
        Email: email,
        Password: password,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
      throw e
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
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
            onSubmit={handleSignup}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Name"
              name="name"
              autoComplete="name"
              onChange={(e) => setFullname(e.target.value)}
              value={fullName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              Зарегистрироваться
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/signin" variant="body2">
                  {'Уже есть аккаунт? Авторизуйтесь!'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}
