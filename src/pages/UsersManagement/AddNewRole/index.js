import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Module from './module.json';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Switch
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
  label:{
    color:'#253053',
    fontSize:'1.1rem',
    fontWeight:500,
  },
  root: {
    color: '#21BFD9',
    '&$checked': {
      checked: '#21BFD9'
    }
  },
  checked: {},
});

export default function AddNewRole() {
  const classes = useStyles();
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold color-pb">
              Add New Role
            </h4>
          </div>
          {/* <div className="card-header--actions">
            <div>
              you can write something
            </div>
          </div> */}
        </div>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={12} md={4} style={{ padding: '10px' }}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                  color="secondary"
                  className={classes.TextFieldStyle}
                  id="shortcode"
                  label="Short Code"
                  fullWidth
                />
              </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={8} style={{ padding: '10px' }}>
              <ThemeProvider theme={TextfieldTheme}>
                <TextField
                 color="secondary"
                  className={classes.TextFieldStyle}
                  id="role"
                  label="Role"
                  fullWidth
                />
              </ThemeProvider> 
            </Grid>
            <div className="m-3"></div>
            {Module.map((module) => (
              <React.Fragment>
                <Grid item xs={12} sm={12} md={12}>
                  <ThemeProvider theme={TextfieldTheme}>
                    <Typography color="secondary">
                      <FormControlLabel
                      classes={{label:classes.label}}
                       color="secondary"
                        control={
                          <Switch color="secondary" />
                        }
                        label={module.modulename}
                      />
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container style={{ marginTop: '-10px' }}>
                    {module.features.split(',').map((access) => (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        style={{ paddingLeft: '35px' }}>
                        <ThemeProvider theme={TextfieldTheme}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name={access}
                                classes={{
                                  root: classes.root,
                                  checked: classes.checked
                                }}
                                color="primary"
                              />
                            }
                            label={access}
                          />
                        </ThemeProvider>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <div className="divider m-3"></div>
              </React.Fragment>
            ))}

            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button size="small" className="btn-neutral-primary btn-hover">
                  Save Role
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
