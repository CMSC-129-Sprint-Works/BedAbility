import React from 'react';
import Button from '@material-ui/core/Button';
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

export default function Modify() {
  const classes = useStyles();
  return (
    <React.Fragment>

     <Button variant="contained">Add Available Bed</Button>
    <p></p>
     <Button variant="contained">Deduct Available Bed</Button>
     <p></p>
    <Button variant="contained" color="primary" >
        Update
    </Button>
    <p></p>
    <Button variant="contained" color="secondary">
        Disregard
    </Button>
    </React.Fragment>
    
  );
}

