import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Access from './../RandomDataApi/access.json';
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

export default function AddNewModule() {
  const classes = useStyles();
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Add New Module
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
                  color="secondary"
                  className={classes.TextfieldTheme}
                  id="modulecode"
                  label="Module Code"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                 color="secondary"
                  className={classes.TextFieldStyle}
                  id="modulename"
                  label="Module Name"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                color="secondary"
                  className={classes.TextFieldStyle}
                  id="modulename"
                  label="Module Slug/URL/Parameters"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ThemeProvider theme={TextfieldTheme}>
              <Typography variant="h6" color="secondary">
                <br />
                Features
              </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container className={classes.gridMargin}>
                {Access.map((access) => (
                  <Grid item xs={12} sm={12} md={3}>
                    <ThemeProvider theme={TextfieldTheme}>
                    <FormControlLabel
                      control={
                          <Checkbox
                            name={access.name}
                            color="primary "
                            classes={{
                              root: classes.root,
                              checked: classes.checked
                            }}
                          />
                      }
                      label={access.label}
                    />
                     </ThemeProvider>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Save Module
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
