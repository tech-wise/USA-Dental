import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
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
    primary: {
      main: "#21BFD9",
    },
    secondary: {
      main: "#253053",
    }
  },
});

const useStyles = makeStyles({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  },
  TextFieldStyle: {},
  FormControlStyle: {},
  saveButton: {
    marginRight: '15px'
  }
});

export default function AddRecallDue() {

  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Add Treatment Report
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
            <Grid item xs={12} sm={6} md={6}>
              <ThemeProvider theme={TextfieldTheme} >
                <FormControl className={classes.FormControlStyle} fullWidth>
                  <InputLabel htmlFor="age-native-simple" color="secondary">Patient</InputLabel>
                  <Select
                    color="secondary"
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple'
                    }}>
                    <option aria-label="None" value="" className="hoverColor-Theme" />
                    <option value="BODM" className="hoverColor-Theme">SaKh-56325896</option>
                    <option value="BODM" className="hoverColor-Theme">John-56563896</option>
                  </Select>
                </FormControl>
              </ThemeProvider>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <ThemeProvider theme={TextfieldTheme} >
                <FormControl className={classes.FormControlStyle} fullWidth>
                  <InputLabel htmlFor="age-native-simple" color="secondary">Provider</InputLabel>
                  <Select
                    color="secondary"
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple'
                    }}>
                    <option aria-label="None" value="" className="hoverColor-Theme" />
                    <option value="BODM" className="hoverColor-Theme">Dr. Vajahat Yar Khan</option>

                  </Select>
                </FormControl>
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
                  Recall Patient
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
