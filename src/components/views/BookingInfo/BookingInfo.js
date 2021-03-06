import React from 'react';
import styles from './BookingInfo.module.scss';
import { useParams } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';



const renderActions = data => {
  return (
    <div key={data.id}>
      <Typography>Table: {data.tableId}</Typography>
      <Typography>Date: {data.date}</Typography>
      <Typography>Hour: {data.hour}</Typography>
      <Typography>Status: {data.status}</Typography>
      <Button variant="contained" color="primary">Delete booking</Button>
      <Button variant="contained" color="primary">Edit booking</Button>
    </div>
  );
};

const BookingInfo = () => {
  const { id } = useParams();
  console.log(id);
  const demoContent = [
    { tableId: '1', status: null, id: null, date: '10-04-2021', hour: '12:00' },
    { tableId: '2', status: 'booked', id: '333', date: '10-04-2021', hour: '12:00' },
    { tableId: '3', status: 'event', id: '444', date: '10-04-2021', hour: '12:00' },
    { tableId: '1', status: 'event', id: '222', date: '10-04-2021', hour: '12:30' },
    { tableId: '2', status: 'booked', id: '111', date: '10-04-2021', hour: '12:30' },
    { tableId: '3', status: 'booked', id: '555', date: '10-04-2021', hour: '12:30' },
    { tableId: '1', status: null, id: null, date: '10-04-2021', hour: '13:00' },
    { tableId: '2', status: 'booked', id: '431', date: '10-04-2021', hour: '13:00' },
    { tableId: '3', status: null, id: null, date: '10-04-2021', hour: '13:00' },
    { tableId: '1', status: null, id: null, date: '10-04-2021', hour: '13:30' },
    { tableId: '2', status: null, id: null, date: '10-04-2021', hour: '13:30' },
    { tableId: '3', status: 'event', id: '132', date: '10-04-2021', hour: '13:30' },
    { tableId: '1', status: 'booked', id: '124', date: '10-04-2021', hour: '14:00' },
    { tableId: '2', status: 'booked', id: '321', date: '10-04-2021', hour: '14:00' },
    { tableId: '3', status: 'event', id: '123', date: '10-04-2021', hour: '14:00' },
  ];

  return (
    <Paper elevation={3} className={styles.component}>
      <h2>Booking details </h2>
      {demoContent.map(data => (
        data.id === id && data.status === 'booked' ? renderActions(data) : null
      ))}
    </Paper>
  );
};

export default BookingInfo;
