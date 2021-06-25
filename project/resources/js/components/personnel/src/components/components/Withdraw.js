import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Availcount() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Available Bed Count</Title>
      <Typography component="p" variant="h4">
        5
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 15 March, 2021
      </Typography>
      <Title>Bed Status</Title>
      <Typography component="p" variant="h4">
        Critical
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 15 March, 2019
      </Typography>

    </React.Fragment>
    
  );
}