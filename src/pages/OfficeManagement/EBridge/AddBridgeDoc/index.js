import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
 import PhotoCamera from '@material-ui/icons/PhotoCamera';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
const TextfieldTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#21BFD9",
    },
    secondary: {
      main: "#253053",
    }
  },
});

const useStyles = makeStyles({
  root: {
    fontSize: '1rem',
    color: 'gray',
  }
});

export default function AddBridgeDoc() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-08-18'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Upload Document
            </h4>
          </div>
          {/* <div className="card-header--actions">
            <div>
              you can write something
            </div>
          </div> */}
        </div>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme} >
              <TextField
                  margin="normal"
                  color="secondary"
                  className={classes.TextFieldStyle}
                  id="description"
                  label="Document ID"
                  fullWidth
                   
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme} >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    color="secondary"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </MuiPickersUtilsProvider>
               </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme} >
              <TextField
                  margin="normal"
                  color="secondary"
                  className={classes.TextFieldStyle}
                  id="description"
                  label="Document Title"
                  fullWidth
                   
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ThemeProvider theme={TextfieldTheme}>
              <Typography color="primary">Upload Document</Typography>
              </ThemeProvider>
              <input

                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: 'none' }}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  className="mt-1 btn-primary btn-gradient shadow-none btn-gradient-inverse bg-heavy-rain"
                  component="span"
                  startIcon={<PhotoCamera />}>
                  Upload
                </Button>
              </label>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Upload Document
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
