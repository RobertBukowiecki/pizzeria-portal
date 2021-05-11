import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import BookingInfo from './components/views/BookingInfo/BookingInfo';
import BookingNew from './components/views/BookingNew/BookingNew';
import EventInfo from './components/views/EventInfo/EventInfo';
import EventNew from './components/views/EventNew/EventNew';
import OrderInfo from './components/views/OrderInfo/OrderInfo';
import OrderNew from './components/views/OrderNew/OrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/Waiter';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import { StylesProvider} from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/bookings/:id`} component={BookingInfo} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventInfo} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={EventNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/orders/:id`} component={OrderInfo} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
