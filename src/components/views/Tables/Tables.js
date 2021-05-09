import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables VIEW</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW BOOKING</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>NEW EVENT</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Booking ID</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Event ID</Link>
    </div>
  );
};

export default Tables;
