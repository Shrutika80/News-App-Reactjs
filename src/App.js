import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TopNews from './Components/TopNews';
import SourcesNews from './Components/sourcesNews';



const useStyles = (theme) => ({  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  button: {
    marginLeft: theme.spacing(3)
    
  },
  link: {
    color: "white"
  }
});

  class App extends Component {
    render() {
      const { classes } = this.props;
        return (
          <Router>
            <div>
              <div className={classes.root}>
              <AppBar position="sticky" color="primary" className={classes.app}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  BrightNews
                </Typography >
                  <Button variant="outer"  className={classes.button} color="inherit"><Link to='/' className={classes.link}>Top Headlines</Link></Button>
                  <Button variant="outer"  className={classes.button} color="inherit"><Link to='/source'className={classes.link}>Sources</Link></Button>
                </Toolbar>
              </AppBar>
            </div>
              <div>
                <Switch>
                  <Route exact path='/' component={TopNews}/>
                  <Route path='/Source' component={SourcesNews}/>
                </Switch>
              </div>  
            </div>  
          </Router>
        )
      }
} 

export default withStyles(useStyles)(App)





