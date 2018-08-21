import React, { Component } from 'react';
import './App.css';
import Grid from "@material-ui/core/es/Grid/Grid";

class App extends Component {
  render() {
    return (
      <Grid container>
          <Grid item xs={3} style={{border: '1px solid blue', height: '100%'}}>menu</Grid>
          <Grid item xs={9} style={{border: '1px solid yellow', height: '100%'}}>document</Grid>
      </Grid>
    );
  }
}

export default App;
