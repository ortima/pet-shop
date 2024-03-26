import { createTheme } from '@mui/material'

const color = {
  'bright-yellow-crayola': 'hsl(36, 94%, 57%)',
  'portland-orange': 'hsl(15, 84%, 57%)',
  'battleship-gray': 'hsl(0, 0%, 53%)',
  'silver-chalice': 'hsl(0, 0%, 70%)',
  'spanish-gray': 'hsl(0, 0%, 60%)',
  'sonic-silver': 'hsl(208, 7%, 46%)',
  'raisin-black': 'hsl(228, 6%, 17%)',
  'eerie-black': 'hsl(210, 3%, 13%)',
  bittersweet: 'hsl(9, 96%, 69%)',
  'light-gray': 'hsl(0, 0%, 80%)',
  platinum: 'hsl(0, 0%, 91%)',
  amber: 'hsl(45, 100%, 51%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  onyx: 'hsl(220, 2%, 24%)',
}

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(249, 148, 42, 1)',
    },
    secondary: {
      main: color['portland-orange'],
    },
    header: {
      main: 'rgba(249, 148, 42, 1)',
    },
    common: {
      white: color['white'],
      black: color['black'],
    },
  },
})

export default theme
