import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
  const { quantity } = useContext(AppContext)
  const { loggedIn } = useAuth()
  return (
    <AppBar position="sticky" color="header">
      <Toolbar
        sx={{
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display={'flex'} alignItems={'center'}>
          <IconButton size="large" color="inherit">
            <PetsIcon />
          </IconButton>
          <Typography variant="h5" component="div">
            Зоомагазин Природа
          </Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Stack direction="row" spacing={2}>
            <Link to="/">
              <Button color="inherit" sx={{ fontWeight: '600' }}>
                Главная
              </Button>
            </Link>
            <Link to="/catalog">
              <Button color="inherit" sx={{ fontWeight: '600' }}>
                Каталог
              </Button>
            </Link>
            <Link to="/blog">
              <Button color="inherit" sx={{ fontWeight: '600' }}>
                Блог
              </Button>
            </Link>
            <Link to="/contacts">
              <Button color="inherit" sx={{ fontWeight: '600' }}>
                Контакты
              </Button>
            </Link>
          </Stack>
        </Box>
        <Box display={'flex'}>
          {loggedIn ? (
            <Link to="/cart">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={quantity} color="warning">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            </Link>
          ) : null}
          <Link to="/signin">
            <IconButton size="large" color="inherit">
              <LoginIcon />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
