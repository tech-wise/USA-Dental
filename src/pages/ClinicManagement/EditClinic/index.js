import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
    color: '#21BFD9',
    primary: {
      main: '#21BFD9'
    },
    secondary: {
      main: '#253053'
    }
  }
});
const useStyles = makeStyles({
  root: {
    color: '#21BFD9',
    '&$checked': {
      checked: '#21BFD9'
    }
  },
  checked: {},
})

export default function EditClinic() {
  const classes = useStyles();
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Edit Clinic
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
            <Grid item xs={12} sm={12} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                defaultValue="USADENTAL-1"
                  color="secondary"
                  className={classes.TextfieldTheme}
                  id="cliniccode"
                  label="Clinic ID"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                defaultValue="Dentist Service"
                 color="secondary"
                  className={classes.TextFieldStyle}
                  id="clinicname"
                  label="Clinic Name"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                defaultValue="+1254879635"
                color="secondary"
                  className={classes.TextFieldStyle}
                  id="contact"
                  label="Contact No"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                defaultValue="ABC"
                color="secondary"
                  className={classes.TextFieldStyle}
                  id="notes"
                  label="Notes"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Update Clinic
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
