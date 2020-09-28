import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    display: 'flex',
    padding: theme.spacing(4),
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height:200,
    borderRadius: 5,
    overflow: 'hidden',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
});

 function Source(props, id) {
  const { classes } = props;
  return (
    <Grid item xs={12} md={12} key={id}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={props.urlToImage}
          title={props.url}
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
            <Typography variant="body2" paragraph>
                {props.description}
            </Typography>
            <Typography variant="body3" paragraph>
                {props.cid}
            </Typography>
            </CardContent>  
            <CardActions className={classes.actions} disableActionSpacing>
              <Button size="small" color="primary" href={props.url} target="_blank">
                Learn More
              </Button>
          </CardActions>                   
        </div>
      </Card>
    </Grid>
  )
}
export default withStyles(styles)(Source);