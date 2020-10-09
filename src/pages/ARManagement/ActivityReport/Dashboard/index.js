import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
   
} from '@material-ui/core';
import CountUp from 'react-countup';
import Trend from 'react-trend';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import MUIDataTable from 'mui-datatables';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#21BFD9'
    }
  }
});
const options = {
  filterType: 'dropdown',
  selectableRows: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 50],
 };

const columns = [
  {
    label: 'Sr',
    name: 'sr'
  },
  {
    label: 'Modified User',
    name: 'user'
  },
  {
    label: 'Portal Billed',
    name: 'portalbilled'
  },
  {
    label: 'Paid Not Posted',
    name: 'paidnotposted'
  },
  {
    label: 'Send Statement',
    name: 'sendstatement'
  },
  {
    label: 'Send Apeal',
    name: 'sendapeal'
  },
  {
    label: 'Trends',
    name: 'trends',
    options:{
      sort:false,
      filter:false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Trend
          style={{width:"150px",margin:"0px"}}
          data={[0, 10, 5, 22, 3.6, 11]}
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-in"
          radius={15}
          smooth
          stroke="var(--danger)"
          strokeLinecap="round"
          strokeWidth={5}
        />
         );
      }
    }
  },
  {
    label: 'Total',
    name: 'total',
    options:{
      sort:false,
      filter:false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <span className="">
          <CountUp
            start={0}
            end={3465}
            duration={6}
            deplay={2}
            separator=""
            decimals={0}
            decimal=","
          />
        </span>
        );
      }
    }
  }
];
const data = [
  {
    sr: 1,
    user: 'Abdul Saud khan',
    portalbilled: '6',
    paidnotposted: '1',
    sendstatement: '1',
    sendapeal: '5',
    total: '781'
  },
  {
    sr: 2,
    user: 'Payment Posting',
    portalbilled: '6',
    paidnotposted: '1',
    sendstatement: '1',
    sendapeal: '2',
    total: '4253'
  },
  {
    sr: 3,
    user: 'Sara Work Info',
    portalbilled: '3',
    paidnotposted: '6',
    sendstatement: '1',
    sendapeal: '3',
    total: '8040'
  },
  {
    sr: 4,
    user: 'Wajahat Yar Khan',
    portalbilled: '6',
    paidnotposted: '3',
    sendstatement: '2',
    sendapeal: '1',
    total: '346'
  },
  {
    sr: 5,
    user: 'Grand TOTAL',
    portalbilled: '365',
    paidnotposted: '35',
    sendstatement: '65',
    sendapeal: '365',
    total: '10523'
  }
];
class RcmActivityDashboard extends Component {
  state = { date: '2014-08-18T21:11:54' };
  handleDateChange = (date) => {
    this.setState({ date });
  };

  render() {
    return (
      <>
      
        <Card className="card-box mb-spacing-6-x2">
          <div className="card-header">
            <div className="card-header--title">
              <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
                Activity Reports
              </h4>
            </div>
            <div className="card-header--actions">
              <div>{/* You can write something here ! */}</div>
            </div>
          </div>
          <CardContent className="pt-2 px-4 pb-4">
            <ThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Modified Time"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time'
                  }}
                />
              </MuiPickersUtilsProvider>
            </ThemeProvider>
          
              <MUIDataTable options={options} columns={columns} data={data} />
        
          </CardContent>
        </Card>
      </>
    );
  }
}

export default RcmActivityDashboard;
