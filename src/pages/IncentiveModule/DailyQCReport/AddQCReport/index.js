import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import clsx from 'clsx';

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
    color:'gray',
  }
});

export default function AddQCReport() {
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
              Add Report
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
                <FormControl className={classes.FormControlStyle} fullWidth>
                  <InputLabel htmlFor="age-native-simple" color="secondary">
                    Department
                  </InputLabel>
                  <Select
                    color="secondary"
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple'
                    }}>
                    <option aria-label="None" value="" className="hoverColor-Theme" />
                    <option value="officemanager" className="hoverColor-Theme">Office Management</option>
                    <option value="frontdesk" className="hoverColor-Theme">Front Desk</option>
                    <option value="rda" className="hoverColor-Theme">RDA Cell</option>
                    <option value="tc" className="hoverColor-Theme">TC Cell</option>
                  </Select>
                </FormControl>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme} >
                <FormControl className={classes.FormControlStyle} fullWidth>
                  <InputLabel htmlFor="age-native-simple" color="secondary">
                    Employee
                  </InputLabel>
                  <Select

                    color="secondary"
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple'
                    }}>
                    <option aria-label="None" value="" className="hoverColor-Theme" />
                    <option value="001" className="hoverColor-Theme">001 - Sara Khan</option>
                    <option value="002" className="hoverColor-Theme">002 - Cameron	Toussaint</option>
                    <option value="003" className="hoverColor-Theme">003 - Jamier Gray</option>
                    <option value="004" className="hoverColor-Theme">004 - Roy	Tristan</option>
                  </Select>
                </FormControl>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme} >
                <FormControl className={classes.FormControlStyle} fullWidth>
                  <InputLabel htmlFor="age-native-simple" color="secondary">Performance</InputLabel>
                  <Select
                    color="secondary"
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple'
                    }}>
                    <option aria-label="None" value="" className="hoverColor-Theme" />
                    <option value="100%" className="hoverColor-Theme">Excellent</option>
                    <option value="80%" className="hoverColor-Theme">Good</option>
                    <option value="70%" className="hoverColor-Theme">Average</option>
                    <option value="50%" className="hoverColor-Theme">Poor</option>

                  </Select>
                </FormControl>
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
                  label="Extra hour Work"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start"> <AccessTimeIcon className={clsx(classes.root)}/> </InputAdornment>,
                  }}
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ThemeProvider theme={TextfieldTheme} >
                <TextField
                  margin="normal"
                  color="secondary"
                  className={classes.TextFieldStyle}
                  id="description"
                  label="Bonus"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ThemeProvider theme={TextfieldTheme} >
                <TextField
                  color="secondary"
                  className={classes.TextFieldStyle}
                  id="description"
                  label="Notes on Extra Activity"
                  fullWidth
                  multiline={true}
                  rows={3}
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Save Report
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
