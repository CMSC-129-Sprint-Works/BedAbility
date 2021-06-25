import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, time, date, name) {
  return { id, time, date, name };
}

const rows = [
  createData(0, '9:05','25 June, 2021', 'Jason Reyes'),
  createData(1, '8:45','25 June, 2021', 'Nial Bonifacio'),
  createData(2, '5:00','25 June, 2021', 'Harry De Guzman'),
  createData(3, '4:45','25 June, 2021', 'Ariana Ibarra'),
  createData(4, '3:45','25 June, 2021', 'Jennie Olay'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Admission Requests</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell>Time</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
            <TableCell>{row.time}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more requests
        </Link>
      </div>
    </React.Fragment>
  );
}