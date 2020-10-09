import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button
} from '@material-ui/core';

const TextfieldTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#21BFD9'
    },
    secondary: {
      main: '#253053'
    }
  }
});

export default function EditARReport() {
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  const [selectedDate, setSelectedDate] = React.useState(
    month + "/" + date + "/" + year
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Edit AR Report
            </h4>
          </div>
          <div className="card-header--actions">
            <div>
              {/* You can write something here ! */}
            </div>
          </div>
        </div>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  defaultValue="USA123456 "
                  color="secondary"
                  id="patientname"
                  label="UID"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  defaultValue="Sara"
                  color="secondary"
                  id="patientname"
                  label="Patient First Name"

                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  defaultValue="Khan "
                  color="secondary"
                  id="patientname"
                  label="Patient Last Name"

                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    color="secondary"
                    id="date-picker-dialog"
                    label="Birthday"
                    format="MM/dd/yyyy"
                    defaultValue={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </MuiPickersUtilsProvider>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    color="secondary"
                    id="date-picker-dialog"
                    label="Service"
                    format="MM/dd/yyyy"
                    defaultValue={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </MuiPickersUtilsProvider>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  defaultValue="Dr Vajahat Yar Khan "
                  color="secondary"
                  id="service"
                  label="Service Provider"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  color="secondary"
                  id="insuranceID"
                  label="Insurance ID"
                  defaultValue="H13AB001"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  color="secondary"
                  id="insurancename"
                  label="Insurance Name"
                  defaultValue="Health Ins"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  color="secondary"
                  id="procedure"
                  label="Procedure"
                  defaultValue="D102"
                  type="text"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="standard-adornment-amount" color="secondary">
                    Amount
                  </InputLabel>
                  <Input
                    value="210"
                    color="secondary"
                    id="standard-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  color="secondary"
                  id="payeridcode"
                  label="Payer ID Code"
                  type="text"
                  defaultValue="DPAY258963"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  color="secondary"
                  id="payername"
                  label="Payer Name"
                  type="text"
                  defaultValue="Insurance Person"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  color="secondary"
                  id="description"
                  label="Research Notes"
                  defaultValue="Medicine is a science of uncertainty and an art of Probability"
                  fullWidth
                  multiline={true}
                  rows={3}
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Save
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
