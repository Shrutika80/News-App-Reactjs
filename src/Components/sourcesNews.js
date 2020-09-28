import React, { Component } from 'react';
import SourcesCard from './SourcesCard';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = (theme) => ({
  root: {
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
});

class SourcesNews extends Component {
  constructor(){
    super();
    this.state={
      id:'google-news',
      sources:[],
      loading: true
    }
  }

  fetchChannrelnews(id){
      fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=87e84931f10444c49fac2830d412f20d`)
         .then(response => {
           return response.json()
         })
         .then(data => {
           this.setState({
             loading: false,
             sources: data.articles
           })
           console.log(data)
         })
         .catch(err => console.log("opps!! an error ocurred"))
      }   

      componentDidUpdate(){
        this.fetchChannrelnews(this.state.id)
      }

  render() {

    const { classes } = this.props;
    
    const { loading } = this.state;
    
        const channelnews = this.state.sources.map((article, id) => (
            <SourcesCard
              key={id}
              cid={article.source.id}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
        ));
    return (
      <div>
        <div className={classes.root}>
        <AppBar position="sticky" color="inherit" className={classes.app}>
          <Toolbar>
            <Button variant="outer" className={classes.button} color="inherit" onClick={() => this.setState({id:'google-news'})} >Google News</Button>
            <Button variant="outer" className={classes.button} color="inherit" onClick={() => this.setState({id:'google-news-in'})} >Google News (India)</Button>
            <Button variant="outer" className={classes.button} color="inherit" onClick={() => this.setState({id:'the-times-of-india'})} >The Times of India</Button>
          </Toolbar>
        </AppBar>
      </div>
        { loading ? <LinearProgress /> : channelnews }
      </div>  
    )
  }
}


export default withStyles(useStyles)(SourcesNews)



