import React from 'react';
import styles from './OrderInfo.module.scss';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';

const renderActions = data => {

  return (
    <div key={data.id}>
      <Typography>Order: {data.order}</Typography>
      <Typography>Status: {data.status}</Typography>
      <Button variant="contained" color="primary">Delete order</Button>
      <Button variant="contained" color="primary">Edit order</Button>
    </div>
  );
};

const OrderInfo = () => {
  const { id } = useParams();
  const demoOrder = [
    { status: 'ordered', id: '1', order: 'Pizza, Coffe, Ice', price: 20 },
    { status: 'ordered', id: '2', order: 'Coffe', price: 5 },
    { status: 'prepared', id: '3', order: 'Salad', price: 12 },
  ];

  return (
    <Paper className={styles.component}>
      {demoOrder.map(data => (
        data.id === id ? renderActions(data) : null
      ))}
    </Paper>
  );
};

export default OrderInfo;
