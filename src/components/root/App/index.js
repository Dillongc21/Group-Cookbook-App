import React, { PureComponent } from 'react'
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import Router from "../Router";
import v from '../../../styles/variables'
import { globalStyles } from './styled'

const theme = getMuiTheme({
  palette: {
    primary1Color: v.colorPrimary,
    primary2Color: v.colorPrimaryDark,
    primary3Color: v.colorPrimaryLightest
  }
});

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider className={globalStyles} theme={theme}>
        <Router />
      </MuiThemeProvider>
    );
  }
}

export default App;
