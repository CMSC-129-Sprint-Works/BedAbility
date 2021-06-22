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

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Bed Count</Title>
      <Typography component="p" variant="h4">
        500
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 15 March, 2021
      </Typography>
      <Title>Occupied Beds</Title>
      <Typography component="p" variant="h4">
        495
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as of 15 March, 2019
      </Typography>

    </React.Fragment>
    
  );
}