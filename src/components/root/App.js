import React, { PureComponent } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Router from "./Router";

class App extends PureComponent {
  render() {
    return (
      <MuiThemeProvider className="App">
        <Router />
      </MuiThemeProvider>
    );
  }
}

export default App;
