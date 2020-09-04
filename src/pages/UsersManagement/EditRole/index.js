import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Module from './module.json';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';

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

export default function EditRole() {
  const classes = useStyles();
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Edit Role
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
              <TextField
                className={classes.TextFieldStyle}
                id="shortcode"
                label="Short Code"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8} style={{ padding: '10px' }}>
              <TextField
                className={classes.TextFieldStyle}
                id="role"
                label="Role"
                fullWidth
              />
            </Grid>
            {Module.map((module) => (
              <React.Fragment>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography style={{ color: 'purple' }}>
                    <FormControlLabel
                      className={classes.controlLabel}
                      control={<Checkbox />}
                      label={module.modulename}
                    />
                  </Typography>
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
                        <FormControlLabel
                          control={<Checkbox name={access} />}
                          label={access}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <div className="dividar m-1" />
              </React.Fragment>
            ))}

            <Grid item xs={12} sm={12} md={12}>
              <Typography align="right">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.saveButton}>
                  Update Role
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
