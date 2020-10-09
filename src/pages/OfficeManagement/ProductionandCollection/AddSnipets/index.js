import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    color: 'gray',
  }
});

export default function AddSnippets() {
  
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Add Snippets
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
                  label="Patient ID"
                  fullWidth
                   
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
                  label="Patient Name"
                  fullWidth
                   
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
                  label="Address"
                  fullWidth
                   
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
                  label="Phone"
                  fullWidth
                   
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
                  label="Production Amount"
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
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
                  label="collection Amount"
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
                  label="Notes"
                  fullWidth
                  multiline={true}
                  rows={3}
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Save Snippets
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
