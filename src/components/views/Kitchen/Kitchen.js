import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'thinking', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'ordered', order: 345},
  {id: '6', status: 'ordered', order: 456},
];

const filtered = demoContent.filter(filtered => filtered.status === 'ordered');

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Grid container spacing={3}>
        {filtered.map(card => (
          <Grid key={card.id} item lg={4} xs={6}>
            <Paper className={styles.paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                        Order id: <strong>{card.id}</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography align={'center'}>
                        {card.order}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Button variant='outlined'>
                        Change Status: prepared
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Kitchen;
