import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'

const theme = createMuiTheme({
  palette: {
		type: 'light',
		primary: blue,
		secondary: {main: '#5680E9'}
  }
})

export default theme